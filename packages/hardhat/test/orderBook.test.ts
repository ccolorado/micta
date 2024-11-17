import { expect } from "chai";
import { ethers } from "hardhat";
import { MictaOrderBook, } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("MictaOrderBook", function () {
  // We define a fixture to reuse the same setup in every test.

  let yourContract: MictaOrderBook;
  let owner : SignerWithAddress;

  before(async () => {
    [owner] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("MictaOrderBook");
    yourContract = (await yourContractFactory.deploy()) as MictaOrderBook;
    await yourContract.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      expect(await yourContract.greeting()).to.equal("Building Unstoppable Apps!!!");
    });

    it("Should allow setting a new message", async function () {
      const newGreeting = "Learn Scaffold-ETH 2! :)";

      await yourContract.setGreeting(newGreeting);
      expect(await yourContract.greeting()).to.equal(newGreeting);
    });
  });
});
