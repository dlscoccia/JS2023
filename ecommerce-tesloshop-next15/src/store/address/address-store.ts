import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    address: {
        firstName: string;
        LastName: string;
        address: string;
        address2?: string;
        postalCode: string;
        city: string;
        country: string;
        phone: string;
    };

    setAddress: (address: State['address']) => void;
}

export const useAddressStore = create<State>()(
    persist(
        (set, get) => ({
            address: {
                firstName: '',
                LastName: '',
                address: '',
                address2: '',
                postalCode: '',
                city: '',
                country: '',
                phone: '',
            },
            setAddress: (address) => {
                set({ address });
            },
        }),
        {
            name: 'address-storage',
        }
    )
);
