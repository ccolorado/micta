"use client"
import { paymaster, Transaction } from "@/blockscoutConfig";
import { useEffect, useState } from "react";
import TransactionTable from "./components/TransactionTable";

type Response = {
  items: Transaction[]
}

const paymasterQuery = "https://explorer.kinto.xyz/api/v2/addresses/0x1842a4EFf3eFd24c50B63c3CF89cECEe245Fc2bd/transactions?filter=to%20%7C%20from"


const stateFunctions = [
  "addDepositFor(address account)",
  "unlockTokenDeposit",
  "lockTokenDeposit",
  "withdrawTokensTo",
  "setAppRegistry",
  "setUserOpMaxCost"
]

export default function Home() {

  const [data, setData] = useState<Response>();
  const [select, setSelect] = useState<string>("");


  useEffect(() => {
    fetch(paymasterQuery)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  console.log(data)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl">Blockscout paymaster explorer</h1>
        <h4>Paymaster kinto mainnet: {paymaster}</h4>
        state functions
        <div className="flex gap-2 ">
          {stateFunctions.map((item) => <button onClick={() => setSelect(item)} key={item} className={`border rounded p-2 hover:bg-white ${select == item && "border-dotted"}`}>{item}</button>)}
        </div>

        <div>
          {data?.items && <TransactionTable transactions={data?.items} selected={select} />
          }        </div>      </main>

    </div >
  );
}
