'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { QuantitySelector } from '@/components';
import { useCartStore } from '@/store';
import Link from 'next/link';

export const ProductsInCart = () => {
    const updateProductQuantity = useCartStore(
        (state) => state.updateProductQuantity
    );
    const removeProductFromCart = useCartStore(
        (state) => state.removeProductFromCart
    );
    const productsInCart = useCartStore((state) => state.cart);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            {loaded &&
                productsInCart.map((product) => (
                    <div
                        key={`${product.slug}-${product.size}`}
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
                            <Link
                                href={`/product/${product.slug}`}
                                className='hover:underline cursor-pointer'>
                                {product.title} - {product.size}
                            </Link>
                            <p>${product.price}</p>
                            <QuantitySelector
                                quantity={product.quantity}
                                onQuantityChanged={(quantity) =>
                                    updateProductQuantity(product, quantity)
                                }
                            />

                            <button
                                onClick={() => removeProductFromCart(product)}
                                className='underline mt-3'>
                                Remover
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
};
