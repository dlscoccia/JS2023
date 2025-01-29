'use client';
import { Product } from '@/interfaces';
import Image from 'next/image';
interface Props {
    products: any;
}

export const OrderProducts = ({ products }: Props) => {
    return (
        <>
            {products.map((product) => (
                <div
                    key={`${product.title}-${product.size}`}
                    className='flex mb-5'>
                    <Image
                        src={`/products/${product.image}`}
                        width={100}
                        height={100}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        alt={product.title}
                        className='mr-5 rounded'
                    />

                    <div>
                        <p>{product.title}</p>
                        <p>
                            ${product.price} x {product.quantity}
                        </p>
                        <p className='font-bold'>
                            Subtotal: ${product.price * product.quantity}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};
