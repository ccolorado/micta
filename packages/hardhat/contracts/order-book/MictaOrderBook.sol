// SPDX-License-Identifier: MIT
// Deploy in Oasis sapphire(mainnet)
pragma solidity ^0.7.0;

import "../interfaces/IERC20.sol";
import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";

import {VennFirewallConsumer} from "@ironblocks/firewall-consumer/contracts/consumers/VennFirewallConsumer.sol";

contract MictaOrderBook is VennFirewallConsumer {
    enum OrderStatus { ACTIVE, CANCELLED }

    struct Order {
        uint256 id;
        address buyer;
        uint256 ethAmount; // Amount of ETH buyer wants to buy
        uint256 usdcPrice; // Price in USDC per ETH
        OrderStatus status;
    }

    uint256 public orderCounter = 0;
    IERC20 public usdc; // USDC token contract
    address public admin;
    address public mailboxHyperlane;

    mapping(uint256 => Order) public orders; // Store all orders
    mapping(address => uint256[]) public userOrders; // Track user's order IDs

    event OrderPlaced(
        uint256 indexed orderId,
        address indexed buyer,
        uint256 ethAmount,
        uint256 usdcPrice
    );
    event OrderCancelled(uint256 indexed orderId);
    event OrderFilled(
        uint256 indexed orderId,
        address indexed seller,
        uint256 ethAmount,
        uint256 totalUSDC
    );

    constructor() {
        usdc = IERC20(0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d);
        admin = msg.sender;
        mailboxHyperlane = 0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8; //_HyperlaneMailbox;
    }

    // Place a buy order for ETH using USDC
<<<<<<< HEAD:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
    function placeBuyOrder(uint256 _ethAmount, uint256 _usdcPrice, bytes memory orderHash) external payable firewallProtected returns (uint256) {
||||||| 904f5d2:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
    function placeBuyOrder(uint256 _ethAmount, uint256 _usdcPrice, bytes orderHash) external returns (uint256) {
=======
    function placeBuyOrder(uint256 _ethAmount, uint256 _usdcPrice, bytes memory orderHash) external returns (uint256) {
>>>>>>> noveron:packages/hardhat/contracts/order-book/MictaOrderBook.sol
        require(_ethAmount > 0, "ETH amount must be greater than zero");
        require(_usdcPrice > 0, "USDC price must be greater than zero");

        uint256 totalUSDC = _ethAmount * _usdcPrice;

        // Transfer USDC from buyer to the contract
        require(
            usdc.transferFrom(msg.sender, address(this), totalUSDC),
            "USDC transfer failed"
        );

        // Create a new order
        orderCounter++;
        orders[orderCounter] = Order({
            id: orderCounter,
            buyer: msg.sender,
            ethAmount: _ethAmount,
            usdcPrice: _usdcPrice,
            status: OrderStatus.ACTIVE
        });

        userOrders[msg.sender].push(orderCounter);

        emit OrderPlaced(orderCounter, msg.sender, _ethAmount, _usdcPrice);

        sendOrderToEvm(orderHash);
        return orderCounter;
    }

    // Cancel an active order (only by the buyer)
    function cancelOrder(uint256 _orderId) external firewallProtected {
        Order storage order = orders[_orderId];
        require(order.buyer == msg.sender, "Not your order");
        require(order.status == OrderStatus.ACTIVE, "Order not active");

        // Refund USDC to the buyer
        uint256 totalUSDC = order.ethAmount * order.usdcPrice;
        require(
            usdc.transfer(order.buyer, totalUSDC),
            "USDC refund failed"
        );

        order.status = OrderStatus.CANCELLED;

        emit OrderCancelled(_orderId);
    }

    // Get orders for a specific user
    function getUserOrders(address _user) external view returns (uint256[] memory) {
        return userOrders[_user];
    }

    // Fallback to accept ETH in contract
    receive() external payable {
        revert("Direct ETH transfers not allowed");
    }

    // Hyperlane message
<<<<<<< HEAD:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
    function sendOrderToEvm(bytes memory hash_digest) public payable {
||||||| 904f5d2:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
    function sendOrderToEvm(bytes hash_digest) internal {
=======
    function sendOrderToEvm(bytes memory hash_digest) internal {
>>>>>>> noveron:packages/hardhat/contracts/order-book/MictaOrderBook.sol
         bytes memory payload = abi.encode(
            msg.sender,
            hash_digest
        );
         /// @dev Hyperlane
         IMailbox(mailboxHyperlane).dispatch{value: msg.value}(
                421614, // 42161
<<<<<<< HEAD:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
                bytes32(uint256(uint160(0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8))), // 0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8, 0x979Ca5202784112f4738403dBec5D0F3B9daabB9
||||||| 904f5d2:packages/hardhat/contracts/OrderBook/MictaOrderBook.sol
                HyperlaneAddress, // 0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8, 0x979Ca5202784112f4738403dBec5D0F3B9daabB9
=======
                bytes32(uint256(uint160(0x6c13643B3927C57DB92c790E4E3E7Ee81e13f78C))),
                // 0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8,
>>>>>>> noveron:packages/hardhat/contracts/order-book/MictaOrderBook.sol
                payload
            );
    }

}
