// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Learn2EarnToken is ERC20, Ownable, Pausable {
    // Mapping to track course completion rewards
    mapping(address => mapping(uint256 => bool)) public courseRewards;
    
    // Mapping to track total rewards earned per user
    mapping(address => uint256) public totalRewards;
    
    // Course reward amounts
    mapping(uint256 => uint256) public courseRewardAmounts;
    
    // Events
    event CourseRewardSet(uint256 indexed courseId, uint256 amount);
    event RewardClaimed(address indexed user, uint256 indexed courseId, uint256 amount);
    event RewardsPaused();
    event RewardsUnpaused();

    constructor(
        string memory name,
        string memory symbol,
        address initialOwner
    ) ERC20(name, symbol) {
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Set reward amount for a course
     * @param courseId The ID of the course
     * @param amount The amount of tokens to reward
     */
    function setCourseReward(uint256 courseId, uint256 amount) external onlyOwner {
        courseRewardAmounts[courseId] = amount;
        emit CourseRewardSet(courseId, amount);
    }

    /**
     * @dev Award tokens for course completion
     * @param user The address of the user
     * @param courseId The ID of the completed course
     */
    function awardCourseCompletion(address user, uint256 courseId) external onlyOwner whenNotPaused {
        require(!courseRewards[user][courseId], "Reward already claimed");
        require(courseRewardAmounts[courseId] > 0, "No reward set for course");

        uint256 rewardAmount = courseRewardAmounts[courseId];
        courseRewards[user][courseId] = true;
        totalRewards[user] += rewardAmount;

        _mint(user, rewardAmount);
        emit RewardClaimed(user, courseId, rewardAmount);
    }

    /**
     * @dev Pause reward distribution
     */
    function pause() external onlyOwner {
        _pause();
        emit RewardsPaused();
    }

    /**
     * @dev Unpause reward distribution
     */
    function unpause() external onlyOwner {
        _unpause();
        emit RewardsUnpaused();
    }

    /**
     * @dev Get total rewards earned by a user
     * @param user The address of the user
     * @return The total amount of rewards earned
     */
    function getTotalRewards(address user) external view returns (uint256) {
        return totalRewards[user];
    }

    /**
     * @dev Check if a user has claimed reward for a course
     * @param user The address of the user
     * @param courseId The ID of the course
     * @return Whether the reward has been claimed
     */
    function hasClaimedReward(address user, uint256 courseId) external view returns (bool) {
        return courseRewards[user][courseId];
    }
} 