'use client';
import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

interface Props {
    quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const onQuantityChange = (value: number) => {
        if (count + value < 1 || count + value > 5) return;

        setCount(count + value);
    };

    return (
        <div className='flex'>
            <button
                onClick={() => onQuantityChange(-1)}
                disabled={count === MIN_ITEMS}
                className='disabled:text-gray-400'>
                <IoRemoveCircleOutline size={30} />
            </button>
            <span className='w-20 mx-3 px-5 bg-gray-200 text-center rounded font-semibold flex items-center justify-center'>
                {count}
            </span>
            <button
                onClick={() => onQuantityChange(1)}
                disabled={count === MAX_ITEMS}
                className='disabled:text-gray-400'>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    );
};
