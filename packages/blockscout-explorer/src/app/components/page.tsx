"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import OrderBook from "./components/OrderBook";
import SwapInterface from "./components/SwapInterface";
import { VennClient } from '@vennbuild/venn-dapp-sdk';
import Image from "next/image";
import { useState } from "react";


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

          {select == 0 && <OrderBook />}
          {select == 0 && <Paymaster />}

        </section>


        <SwapInterface />

      </main >
    </div>
  );
}



// type Response = {
//   items: Transaction[]
// }
// const paymasterQuery = "https://explorer.kinto.xyz/api/v2/addresses/0x1842a4EFf3eFd24c50B63c3CF89cECEe245Fc2bd/transactions?filter=to%20%7C%20from"
{/* {account.isConnected && <div>
  {data?.items && <TransactionTable transactions={data?.items} selected={""} />}
</div>} */}

// const [data, setData] = useState<Response>();
// useEffect(() => {
//   fetch(paymasterQuery)
//     .then(response => response.json())
//     .then(json => setData(json))
//     .catch(error => console.error(error));
// }, []);
// console.log(data)
