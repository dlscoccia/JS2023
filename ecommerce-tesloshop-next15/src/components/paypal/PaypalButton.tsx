'use client';

import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import {
    CreateOrderData,
    CreateOrderActions,
    OnApproveData,
    OnApproveActions,
} from '@paypal/paypal-js';
import { paypalCheckPayment, setTransactionId } from '@/actions';

interface Props {
    orderId: string;
    amount: number;
}

export const PaypalButton = ({ orderId, amount }: Props) => {
    const [{ isPending }] = usePayPalScriptReducer();

    const roundedAmount = Math.round(amount * 100) / 100;

    if (isPending) {
        return (
            <div className='animate-pulse mb-16'>
                <div className='h-10 bg-gray-300 rounded' />
                <div className='h-10 bg-gray-300 rounded mt-3' />
            </div>
        );
    }

    const createOrder = async (
        data: CreateOrderData,
        actions: CreateOrderActions
    ): Promise<string> => {
        const transanctionId = await actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    invoice_id: orderId,
                    amount: {
                        currency_code: 'USD',
                        value: roundedAmount.toString(),
                    },
                },
            ],
        });

        const { ok } = await setTransactionId(transanctionId, orderId);

        if (!ok) {
            throw new Error('No se pudo actualizar la orden');
        }

        return transanctionId;
    };

    const onApprove = async (
        data: OnApproveData,
        actions: OnApproveActions
    ) => {
        const details = await actions.order?.capture();

        console.log({ details });

        if (!details?.id) return;

        await paypalCheckPayment(details.id);
    };

    return (
        <>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </>
    );
};
