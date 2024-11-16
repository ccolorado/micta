"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import OrderBook from "./components/OrderBook";
import SwapInterface from "./components/SwapInterface";

export default function Home() {
  const account = useAccount()

  return (
    <div>
      <main className="h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col bg-background text-white gap-8 items-center justify-between py-10 font-mono no-scrollbar">
        <div className="">
          <ConnectButton />
        </div>


        <section className="max-h-[50vh]">
          <OrderBook />
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
