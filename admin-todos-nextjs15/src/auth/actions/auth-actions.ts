import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export const signInEmailPassword = async (email: string, password: string) => {
    if (!email || !password) return null;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        const dbUser = await createUser(email, password);
        return dbUser;
    }

    const passwordMatch = bcryptjs.compareSync(password, user.password ?? '');

    if (!passwordMatch) return null;

    return user;
};

const createUser = async (email: string, password: string) => {
    const user = await prisma.user.create({
        data: {
            email,
            password: bcryptjs.hashSync(password, 10),
            name: email.split('@')[0],
        },
    });

    return user;
};
