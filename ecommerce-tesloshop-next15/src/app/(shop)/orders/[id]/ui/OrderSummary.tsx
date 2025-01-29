import { Address } from '@/interfaces';

interface Props {
    address: Address;
}

export const OrderSummary = ({ address }: Props) => {
    return (
        <>
            <div className='mb-10'>
                <p className='text-xl'>Fernando Herrera</p>
                <p>Av. Siempre viva 123</p>
                <p>Col. Centro</p>
                <p>Alcaldía Cuauhtémoc</p>
                <p>Ciudad de México</p>
                <p>CP 123123</p>
                <p>123.123.123</p>
            </div>

            <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

            <h2 className='text-2xl mb-2'>Resumen de orden</h2>

            <div className='grid grid-cols-2'>
                <span>No. Productos</span>
                <span className='text-right'>3 artículos</span>

                <span>Subtotal</span>
                <span className='text-right'>$ 100</span>

                <span>Impuestos (15%)</span>
                <span className='text-right'>$ 100</span>

                <span className='mt-5 text-2xl'>Total:</span>
                <span className='mt-5 text-2xl text-right'>$ 100</span>
            </div>
        </>
    );
};
