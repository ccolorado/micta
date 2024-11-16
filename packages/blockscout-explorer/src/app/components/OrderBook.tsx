import React from 'react'
import { ordersData } from '../ordersData'
import OrderTable from './OrderTable'

function OrderBook() {
    return (
        < div id="order-book" className="flex flex-col gap-2 items-center max-h-[50vh] overflow-y-auto">
            <h1>Order book</h1>
            <OrderTable orders={ordersData} />
        </div >

    )
}

export default OrderBook