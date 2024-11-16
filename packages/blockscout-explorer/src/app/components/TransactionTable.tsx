import { Transaction } from '@/types';
import React from 'react';


interface Props {
    transactions: Transaction[];
    selected: string
}

const TransactionTable = (props: Props) => {
    const totalGasUsed = props.transactions.map((tx) => parseInt(tx.gas_used)).reduce((a, b) => a + b)

    return (
        <div className="o">
            <h1>total gas used: {totalGasUsed}</h1>
            <table className=" table-auto border-collapse">
                <thead>
                    <tr className="bg-two text-left">
                        <th className="px-2 py-1">block</th>
                        <th className="px-2 py-1">from</th>
                        <th className="px-2 py-1">to</th>
                        <th className="px-2 py-1">gas used</th>
                    </tr>
                </thead>
                <tbody>
                    {props.transactions.map((transaction, index) => (
                        <tr key={index} className="odd:bg-three even:bg-five">
                            <td className="px-2 py-1">{transaction.block_number}</td>
                            <td className="px-2 py-1">{transaction.from.hash}</td>
                            <td className="px-2 py-1">{transaction.to.hash}</td>
                            <td className="px-2 py-1">{transaction.gas_used}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default TransactionTable;