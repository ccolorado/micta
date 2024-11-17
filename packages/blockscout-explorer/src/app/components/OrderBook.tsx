import React, { useEffect, useState } from 'react'
import { ordersData } from '../ordersData'
import OrderTable from './OrderTable'

const api = "https://api.cow.fi/mainnet/api/v1/auction"

function OrderBook() {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    console.log("data", data?.orders);

    return (
        < div id="order-book" className="flex flex-col gap-2 items-center max-h-[50vh] max-w-[90vw] overflow-y-auto">
            <OrderTable orders={data?.orders ?? []} />
        </div >

    )
}

export default OrderBook