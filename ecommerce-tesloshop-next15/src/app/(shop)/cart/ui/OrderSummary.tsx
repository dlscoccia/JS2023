'use client';
import { useCartStore } from '@/store';
import { CurrrencyFormatter } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const OrderSummary = () => {
    const { subTotal, tax, total, itemsInCart } = useCartStore((state) =>
        state.getSummaryInformation()
    );

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <p>Cargando...</p>;

    return (
        <div className='grid grid-cols-2'>
            <span>No. Productos</span>
            <span className='text-right'>
                {itemsInCart} artículo{itemsInCart > 1 ? 's' : ''}
            </span>

            <span>Subtotal</span>
            <span className='text-right'>{CurrrencyFormatter(subTotal)}</span>

            <span>Impuestos (15%)</span>
            <span className='text-right'>{CurrrencyFormatter(tax)}</span>

            <span className='mt-5 text-2xl'>Total:</span>
            <span className='mt-5 text-2xl text-right'>
                {CurrrencyFormatter(total)}
            </span>
        </div>
    );
};
