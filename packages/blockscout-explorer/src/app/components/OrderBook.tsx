import React from 'react'
import { ordersData } from '../ordersData'
import OrderTable from './OrderTable'

function OrderBook() {
    return (
        < div id="order-book" className="flex items-center max-h-[50vh] overflow-y-auto">
            <OrderTable orders={ordersData} />
        </div >

    )
}

export default OrderBook