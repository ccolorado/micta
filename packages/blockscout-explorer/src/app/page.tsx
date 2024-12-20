"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import OrderBook from "./components/OrderBook";
import SwapInterface from "./components/SwapInterface";
import { VennClient } from '@vennbuild/venn-dapp-sdk';
import Image from "next/image";
import { useState } from "react";
import Transactions from "./components/Transactions";

export default function Home() {
  // const vennURL = "https://dc7sea.venn.build/sign";
  // const vennPolicyAddress = "YOUR FIREWALL ADDRESS";

  // const vennClient = new VennClient({ vennURL, vennPolicyAddress });

  // You probably have something like this:
  // const tx = { to, from, data, value };
  // const receipt = await wallet.sendTransaction(approvedTransaction);
  // // But now you need this:
  // const tx = { to, from, data, value };
  // const approvedTransaction = await vennClient.approve(tx);
  // const receipt = await wallet.sendTransaction(approvedTransaction);

  const [select, setSelect] = useState<number>(0)

  return (
    <div>

      <main className="h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col bg-background text-white gap-8 items-center justify-between pt-4 font-mono no-scrollbar">
        <div className="flex justify-between w-screen px-8 ">
          <h1 className="text-4xl">Micta</h1>
          <ConnectButton />
        </div>
        <section className="max-h-[50vh]">
          <div className="flex gap-8">
            <button onClick={() => { setSelect(0) }} className="h-8 hover:cursor-pointer hover:underline">Orderbook</button>
            <button onClick={() => { setSelect(1) }} className="h-8 hover:cursor-pointer hover:underline">Transactions</button>
          </div>
          {select == 0 && <OrderBook />}
          {select == 1 && <Transactions />}
        </section>
        <SwapInterface />
      </main >
    </div>
  );
}



