import { Transaction } from '@/blockscoutConfig';
import React from 'react';


interface Props {
    transactions: Transaction[];
    selected: string
}

const TransactionTable = (props: Props) => {
    return (
        <div className='text-sm'>
            <div className='flex flex-col'>
                {props.transactions.map((transaction, index) => (
                    <div key={index} className='flex flex-col border p-4 m-2 justify-between'>
                        <div className='px-4'>block: {transaction.block_number}</div>
                        <div className='px-4'>method: {transaction.decoded_input.method_call}</div>
                        <div className='px-4'>from: {transaction.from.hash}</div>
                        <div className='px-4'>to: {transaction.to.hash}</div>
                        <div className='p-4'>parameters:
                            <div className='flex flex-col pl-2'>
                                <div>
                                    name: {transaction.decoded_input.parameters.map((p) => p.name)}
                                </div>
                                <div>
                                    type: {transaction.decoded_input.parameters.map((p) => p.type)}
                                </div>
                                <div>
                                    value: {transaction.decoded_input.parameters.map((p) => p.value)}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionTable;