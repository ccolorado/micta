import React, { useEffect, useState } from 'react'
import { ordersData } from '../ordersData'
import OrderTable from './OrderTable'
import { Transaction } from '@/types'
import { useAccount } from 'wagmi'
import TransactionTable from './TransactionTable'

type Response = {
    items: Transaction[]
}

function Transactions() {
    const account = useAccount();
    const paymasterQuery = `https://eth.blockscout.com/api/v2/addresses/${account.address}/transactions?filter=to%20%7C%20from`
    const [data, setData] = useState<Response>();

    useEffect(() => {
        fetch(paymasterQuery)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    console.log(data)

    return (
        < div id="order-book" className="flex flex-col gap-2 items-center max-h-[50vh] overflow-y-auto">
            {account.isConnected && <div>
                {data?.items && <TransactionTable transactions={data?.items} selected={""} />}
            </div>}
        </div >

    )
}

export default Transactions