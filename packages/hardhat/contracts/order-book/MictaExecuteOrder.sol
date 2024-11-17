// SPDX-License-Identifier: MIT
// Deploy on Arbitrum and Ethereum mainnet
pragma solidity ^0.8.0;

import {VennFirewallConsumer} from "@ironblocks/firewall-consumer/contracts/consumers/VennFirewallConsumer.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IMailbox} from "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";

contract MictaExecuteOrder is VennFirewallConsumer {
    address mailboxHyperlane;
    address lastSender;
    bytes lastData;

    event ReceivedMessage(uint origin, address sender, uint value, string data);

    constructor(
        address HyperlaneMailbox
    ) {
        mailboxHyperlane = HyperlaneMailbox;
    }

    function handle(
    uint32 _origin,
    bytes32 _sender,
    bytes calldata _data
) external payable virtual firewallProtected {
    // check sender
    if (msg.sender != mailboxHyperlane) {
            revert();
        }
    if (
            address(uint160(uint256(_sender))) != mailboxHyperlane &&
            _origin != 421614
        ) {
            revert();
        }

        (address user, bytes memory hash_digest) = abi.decode(
            _data,
            (address, bytes)
        );
        lastSender = user;
        lastData = hash_digest;
    }

    function executeOrder() public {
      // TODO: Implement the COW Swap contracts

    }
}
