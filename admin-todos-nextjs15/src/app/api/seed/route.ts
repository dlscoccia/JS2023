import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            email: 'test1@gmail.com',
            password: bcryptjs.hashSync('123456', 10),
            roles: ['ADMIN', 'CLIENT'],
            todos: {
                create: [
                    {
                        description: 'Piedra del alma',
                        complete: true,
                    },
                    {
                        description: 'Piedra del poder',
                    },
                    {
                        description: 'Piedra del tiempo',
                    },
                    {
                        description: 'Piedra del espacio',
                    },
                    {
                        description: 'Piedra del realidad',
                    },
                ],
            },
        },
    });

    return NextResponse.json({
        message: 'Seed created',
        user,
    });
}
