// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CourseNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Mapping to track course completion NFTs
    mapping(address => mapping(uint256 => bool)) public courseCertificates;
    
    // Mapping to store course metadata
    mapping(uint256 => string) public courseMetadata;
    
    // Events
    event CourseCertificateMinted(address indexed user, uint256 indexed courseId, uint256 tokenId);
    event CourseMetadataSet(uint256 indexed courseId, string metadataURI);

    constructor(
        string memory name,
        string memory symbol,
        address initialOwner
    ) ERC721(name, symbol) {
        _transferOwnership(initialOwner);
    }

    /**
     * @dev Set metadata URI for a course
     * @param courseId The ID of the course
     * @param metadataURI The URI containing course metadata
     */
    function setCourseMetadata(uint256 courseId, string memory metadataURI) external onlyOwner {
        courseMetadata[courseId] = metadataURI;
        emit CourseMetadataSet(courseId, metadataURI);
    }

    /**
     * @dev Mint a course completion certificate
     * @param user The address of the user
     * @param courseId The ID of the completed course
     * @return The ID of the minted token
     */
    function mintCourseCertificate(address user, uint256 courseId) external onlyOwner returns (uint256) {
        require(!courseCertificates[user][courseId], "Certificate already minted");
        require(bytes(courseMetadata[courseId]).length > 0, "Course metadata not set");

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(user, newTokenId);
        _setTokenURI(newTokenId, courseMetadata[courseId]);
        
        courseCertificates[user][courseId] = true;
        
        emit CourseCertificateMinted(user, courseId, newTokenId);
        
        return newTokenId;
    }

    /**
     * @dev Check if a user has a certificate for a course
     * @param user The address of the user
     * @param courseId The ID of the course
     * @return Whether the user has a certificate
     */
    function hasCertificate(address user, uint256 courseId) external view returns (bool) {
        return courseCertificates[user][courseId];
    }

    /**
     * @dev Get total certificates minted
     * @return The total number of certificates
     */
    function totalCertificates() external view returns (uint256) {
        return _tokenIds.current();
    }
} 