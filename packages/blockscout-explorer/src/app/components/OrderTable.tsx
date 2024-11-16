import { Order, OrderKind } from '@/types';
import React from 'react';

interface Props {
    orders: Order[];
}

const OrderTable = (props: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-two text-left">
                        <th className="px-4 py-2">Order Kind</th>
                        <th className="px-4 py-2">Sell Token</th>
                        <th className="px-4 py-2">Buy Token</th>
                        <th className="px-4 py-2">Sell Amount</th>
                        <th className="px-4 py-2">Buy Amount</th>
                        <th className="px-4 py-2">Fee Amount</th>
                        <th className="px-4 py-2">Valid To</th>
                        <th className="px-4 py-2">Chain</th>
                        <th className="px-4 py-2">Partially Fillable</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((order, index) => (
                        <tr key={order.sellToken + order.buyToken + order.validTo + index} className="odd:bg-three even:bg-five">
                            <td className="px-4 py-2">{order.kind === OrderKind.SELL ? 'Sell' : 'Buy'}</td>
                            <td className="px-4 py-2">{order.sellToken}</td>
                            <td className="px-4 py-2">{order.buyToken}</td>
                            <td className="px-4 py-2 text-right">{order.sellAmount}</td>
                            <td className="px-4 py-2 text-right">{order.buyAmount}</td>
                            <td className="px-4 py-2 text-right">{order.feeAmount}</td>
                            <td className="px-4 py-2">{new Date(order.validTo * 1000).toLocaleString()}</td>
                            <td className="px-4 py-2">{order.chain}</td>
                            <td className="px-4 py-2">{order.partiallyFillable ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
