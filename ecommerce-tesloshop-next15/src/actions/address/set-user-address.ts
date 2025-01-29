'use server';

import { Address } from '@/interfaces';
import prisma from '@/lib/prisma';

export const setUserAddress = async (address: Address, userId: string) => {
    try {
        const newAddress = await createOrReplaceAddress(address, userId);

        return {
            ok: true,
            address: newAddress,
        };
    } catch (error) {
        console.log(error);
        return 'No se pudo grabar la dirección';
    }
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
    try {
        const storedAddress = await prisma.userAddress.findUnique({
            where: {
                userId,
            },
        });

        const addresToSave = {
            userId: userId,
            address: address.address,
            address2: address.address2,
            firstName: address.firstName,
            lastName: address.lastName,
            city: address.city,
            postalCode: address.postalCode,
            phone: address.phone,
            countryId: address.country,
        };

        if (!storedAddress) {
            const newAddress = await prisma.userAddress.create({
                data: addresToSave,
            });

            return newAddress;
        }

        const updatedAddres = await prisma.userAddress.update({
            where: {
                userId,
            },
            data: addresToSave,
        });

        return updatedAddres;
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo grabar la dirección');
    }
};
