'use client';
import { getStockBySlug } from '@/actions';
import { titleFont } from '@/config/fonts';
import { useEffect, useState } from 'react';

interface Props {
    slug: string;
}

export const StockLabel = ({ slug }: Props) => {
    const [stock, setStock] = useState<number | string>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStock();
    }, [slug]);

    const getStock = async () => {
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setIsLoading(false);
    };

    return (
        <>
            <h1
                className={` ${titleFont.className} antialiased font-semibold text-md`}>
                Stock:{' '}
                {isLoading ? (
                    <span className={`w-10 animate-pulse `}>Cargando...</span>
                ) : (
                    stock
                )}
            </h1>
        </>
    );
};
