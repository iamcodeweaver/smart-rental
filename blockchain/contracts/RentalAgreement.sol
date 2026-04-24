// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RentalAgreement {

    address public landlord;
    address public tenant;

    uint256 public rentAmount;
    uint256 public leaseStart;
    uint256 public leaseEnd;
    uint256 public paymentInterval; // e.g. 30 days

    uint256 public totalPaid;

    mapping(uint256 => bool) public paidPeriods;

    event RentPaid(
        address indexed tenant,
        uint256 amount,
        uint256 period,
        uint256 timestamp
    );

    event LeaseCreated(
        address landlord,
        address tenant,
        uint256 rentAmount,
        uint256 leaseStart,
        uint256 leaseEnd
    );

    modifier onlyTenant() {
        require(msg.sender == tenant, "Only tenant allowed");
        _;
    }

    modifier onlyLandlord() {
        require(msg.sender == landlord, "Only landlord allowed");
        _;
    }

    modifier leaseActive() {
        require(block.timestamp >= leaseStart, "Lease not started");
        require(block.timestamp <= leaseEnd, "Lease ended");
        _;
    }

    constructor(
        address _tenant,
        uint256 _rentAmount,
        uint256 _leaseStart,
        uint256 _leaseEnd,
        uint256 _paymentInterval
    ) {
        landlord = msg.sender;
        tenant = _tenant;
        rentAmount = _rentAmount;
        leaseStart = _leaseStart;
        leaseEnd = _leaseEnd;
        paymentInterval = _paymentInterval;

        emit LeaseCreated(
            landlord,
            tenant,
            rentAmount,
            leaseStart,
            leaseEnd
        );
    }

    // 🧮 Get current period index
    function getCurrentPeriod() public view returns (uint256) {
        if (block.timestamp < leaseStart) {
            return 0;
        }

        return (block.timestamp - leaseStart) / paymentInterval;
    }

    // 💸 Pay rent
    function payRent() external payable onlyTenant leaseActive {
        require(msg.value == rentAmount, "Incorrect rent amount");

        uint256 period = getCurrentPeriod();

        require(!paidPeriods[period], "Rent already paid for this period");

        paidPeriods[period] = true;
        totalPaid += msg.value;

        // Transfer funds to landlord
        payable(landlord).transfer(msg.value);

        emit RentPaid(msg.sender, msg.value, period, block.timestamp);
    }

    // 🔍 Check if a period is paid
    function isPaid(uint256 period) external view returns (bool) {
        return paidPeriods[period];
    }

    // 📊 Get lease summary
    function getDetails()
        external
        view
        returns (
            address,
            address,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            landlord,
            tenant,
            rentAmount,
            leaseStart,
            leaseEnd,
            totalPaid
        );
    }
}