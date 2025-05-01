// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Learn2EarnToken.sol";
import "./CourseNFT.sol";

contract RewardManager is Ownable, Pausable, ReentrancyGuard {
    Learn2EarnToken public rewardToken;
    CourseNFT public courseNFT;

    // Mapping to track user progress
    mapping(address => mapping(uint256 => uint256)) public userProgress;
    
    // Mapping to store course requirements
    mapping(uint256 => uint256) public courseRequirements;
    
    // Events
    event ProgressUpdated(address indexed user, uint256 indexed courseId, uint256 progress);
    event CourseRequirementSet(uint256 indexed courseId, uint256 requirement);
    event RewardDistributed(address indexed user, uint256 indexed courseId, uint256 amount);
    event CertificateMinted(address indexed user, uint256 indexed courseId, uint256 tokenId);

    constructor(
        address _rewardToken,
        address _courseNFT,
        address initialOwner
    ) {
        rewardToken = Learn2EarnToken(_rewardToken);
        courseNFT = CourseNFT(_courseNFT);
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Set completion requirement for a course
     * @param courseId The ID of the course
     * @param requirement The required progress for completion
     */
    function setCourseRequirement(uint256 courseId, uint256 requirement) external onlyOwner {
        courseRequirements[courseId] = requirement;
        emit CourseRequirementSet(courseId, requirement);
    }

    /**
     * @dev Update user progress for a course
     * @param user The address of the user
     * @param courseId The ID of the course
     * @param progress The new progress value
     */
    function updateProgress(
        address user,
        uint256 courseId,
        uint256 progress
    ) external onlyOwner whenNotPaused {
        require(progress <= 100, "Progress cannot exceed 100%");
        userProgress[user][courseId] = progress;
        emit ProgressUpdated(user, courseId, progress);

        // Check if course is completed
        if (progress >= courseRequirements[courseId]) {
            _handleCourseCompletion(user, courseId);
        }
    }

    /**
     * @dev Handle course completion
     * @param user The address of the user
     * @param courseId The ID of the completed course
     */
    function _handleCourseCompletion(address user, uint256 courseId) private {
        // Award tokens
        rewardToken.awardCourseCompletion(user, courseId);
        emit RewardDistributed(user, courseId, rewardToken.courseRewardAmounts(courseId));

        // Mint certificate
        uint256 tokenId = courseNFT.mintCourseCertificate(user, courseId);
        emit CertificateMinted(user, courseId, tokenId);
    }

    /**
     * @dev Get user progress for a course
     * @param user The address of the user
     * @param courseId The ID of the course
     * @return The user's progress
     */
    function getProgress(address user, uint256 courseId) external view returns (uint256) {
        return userProgress[user][courseId];
    }

    /**
     * @dev Check if a course is completed
     * @param user The address of the user
     * @param courseId The ID of the course
     * @return Whether the course is completed
     */
    function isCourseCompleted(address user, uint256 courseId) external view returns (bool) {
        return userProgress[user][courseId] >= courseRequirements[courseId];
    }

    /**
     * @dev Pause reward distribution
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause reward distribution
     */
    function unpause() external onlyOwner {
        _unpause();
    }
} 