"use client"
import Image from "next/image";
import { useState } from "react";
import { formatEther, formatUnits, parseEther, parseUnits } from "viem";
import { sapphire } from "viem/chains";
import { useAccount, useBalance } from 'wagmi';


const tokens = [
    "/usdc.webp",
    "/eurc.webp"
]

export default function SwapInterface() {
    const [token, setToken] = useState<string>("/usdc.webp");
    const [price, setPrice] = useState<number>(3000);
    const [amount, setAmount] = useState<number>(0);
    const [spend, setSpend] = useState<number>(0);
    const account = useAccount()
    const balance = useBalance({ address: account.address })

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        const checkedValueFormatted: number = Math.floor(value * 10 ** 4) / 10 ** 4; // 4 decimal places
        const newValue = checkedValueFormatted > 0 ? checkedValueFormatted : 0
        setAmount(newValue);
        setSpend(newValue * price);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        const checkedValueFormatted: number = Math.floor(value * 10 ** 4) / 10 ** 4; // 4 decimal places
        const newValue = checkedValueFormatted > 0 ? checkedValueFormatted : 0
        setPrice(newValue);
        setAmount(spend / price)
    };

    const handleSpendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        const checkedValueFormatted: number = Math.floor(value * 10 ** 4) / 10 ** 4; // 4 decimal places
        const newValue = checkedValueFormatted > 0 ? checkedValueFormatted : 0
        setSpend(newValue);
        setAmount(newValue / price)
    };

    return (
        < div id="swap-interface" className="flex items-center" >
            {
                account.isConnected &&
                account.chainId == sapphire.id &&
                <div className="h-96 flex flex-col gap-8 items-center">
                    <div className="flex w-[30vw] justify-around">
                        <div className="flex flex-col items-start justify-start">
                            <h1>Tokens</h1>
                            <div className="flex gap-2">
                                <button className="hover:scale-105" onClick={(()=>setToken("/usdc.webp"))}>
                                    <Image src="/usdc.webp" height={48} width={48} alt="USDC" />
                                </button>
                                <button className="hover:scale-105">
                                    <Image src="/eurc.webp" height={48} width={48} alt="EURC" onClick={(()=>setToken("/eurc.webp"))}/>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start">
                            <h1>Destination chain</h1>
                            <div className="flex gap-2">
                                <Image src="/eth.png" height={48} width={48} alt="USDC" className="bg-white rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-12 justify-between">
                        {/* price */}
                        <div>
                            <h1>Price</h1>
                            <div id="inputs" className="flex py-2 px-4  gap-2 items-center justify-center bg-white border border-white rounded-sm text-end h-11 shadow-drop shadow-[24px_6px_0px_0px] outline-0 w-full">
                                <input
                                    id="price-input"
                                    className=" text-black bg-transparent  ring-none outline-none"
                                    placeholder="0.00"
                                    value={price}
                                    type="number"
                                    onChange={handlePriceChange}
                                    title="Price"
                                    min="0.00"
                                    step="0.0001"

                                />
                                <Image src={token} height={24} width={24} alt="USDC" />
                            </div>
                        </div>
                        {/* input */}
                        <div>
                            <h1>Spend</h1>
                            <div id="inputs" className="flex py-2 px-4  gap-2 items-center justify-center bg-white border border-white rounded-sm text-end h-11 shadow-drop shadow-[24px_6px_0px_0px] outline-0 w-full">
                                <input
                                    id="amount-input"
                                    className=" text-black bg-transparent  ring-none outline-none"
                                    placeholder="0.00"
                                    value={spend}
                                    type="number"
                                    onChange={handleSpendChange}
                                    title="Amount"
                                    min="0.00"
                                    step="0.0001"

                                />
                                <Image src={token} height={24} width={24} alt="USDC" />
                            </div>
                        </div>

                        {/* output */}
                        <div>
                            <h1>Amount</h1>
                            <div id="inputs" className="flex py-2 px-4  gap-2 items-center justify-center bg-white border border-white rounded-sm text-end h-11 shadow-drop shadow-[24px_6px_0px_0px] outline-0 w-full">
                                <input
                                    id="amount-input"
                                    className=" text-black bg-transparent  ring-none outline-none"
                                    placeholder="0.0000"
                                    onChange={handleAmountChange}
                                    value={amount}
                                    type="number"
                                    title="Amount"
                                    min="0.00"
                                    step="0.0001"

                                />
                                <Image src="/eth.png" height={24} width={24} alt="USDC" />
                            </div>
                        </div>
                    </div>
                    <h4>Max: 23423.23 USDC</h4>



                    {/* < div id="use-balance-percentage" className="flex flex-row items-end justify-center gap-2">
                                <div id="gas-balance" className="flex flex-row items-center gap-4">
                                    <button className="border text-white px-4 text-sm shadow-drop shadow-[8px_2px_0px_0px]" onClick={() => setAmount(balance.data?.value ?? BigInt(0))}>
                                        25%
                                    </button>
                                    <button className="border text-white px-4 text-sm shadow-drop shadow-[8px_2px_0px_0px]" onClick={() => setAmount(balance.data?.value ?? BigInt(0))}>
                                        50%
                                    </button>
                                    <button className="border text-white px-4 text-sm shadow-drop shadow-[8px_2px_0px_0px]" onClick={() => setAmount(balance.data?.value ?? BigInt(0))}>
                                        75%
                                    </button>
                                    <button className="border text-white px-4 text-sm shadow-drop shadow-[8px_2px_0px_0px]" onClick={() => setAmount(balance.data?.value ?? BigInt(0))}>
                                        100%
                                    </button>
                                </div>
                            </div> */}

                    <button className={`border px-4 py-2 rounded-sm w-32 shadow-drop shadow-[24px_6px_0px_0px] hover:-skew-x-12 hover:scale-110 hover:cursor-pointer`}>Swap</button>
                </div>
            }
            {/* show balances when not on oasis */}
            {
                account.isConnected && !(account.chainId == sapphire.id) &&
                <div className="h-96 flex flex-col gap-8 items-center">
                    <h1>ETH Balance</h1>
                    <div id="inputs" className="flex flex-row gap-2 items-center justify-center">
                        <input
                            readOnly
                            id="amount-input"
                            className=" text-black py-2 px-4 border-2 border-white rounded-sm text-end h-11 shadow-drop shadow-[24px_6px_0px_0px] outline-0"
                            placeholder="0.0000"
                            value={formatEther(balance.data?.value ?? BigInt(0))}
                            type="number"
                            title="Amount"
                            min="0.00"
                            step="0.0001"

                        />
                    </div>
                </div>
            }
        </div >
    )
}
