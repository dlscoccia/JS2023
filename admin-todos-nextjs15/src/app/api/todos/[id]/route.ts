import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { getUserSessionServer } from '@/auth/actions/auth-actions';

interface Segments {
    params: {
        id: string;
    };
}

const getTodo = async (id: string): Promise<Todo | null> => {
    const user = await getUserSessionServer();

    if (!user) {
        return null;
    }

    const todo = await prisma.todo.findFirst({
        where: { id: id },
    });

    if (todo?.userId !== user.id) {
        return null;
    }

    return todo;
};

const errorResponse = (error: string | Error, statusCode: number) =>
    NextResponse.json(
        {
            ok: false,
            message: error ?? 'Error creating todo',
        },
        { status: statusCode }
    );

export async function GET(request: NextRequest, { params }: Segments) {
    const id = (await params).id;
    const todo = await getTodo(id);

    if (!todo) {
        return errorResponse(`Todo with id: ${id} not found.`, 404);
    }

    return NextResponse.json({
        ok: true,
        todo,
    });
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
});

export async function PUT(request: NextRequest, { params }: Segments) {
    try {
        const id = (await params).id;
        const todo = await getTodo(id);

        if (!todo) {
            return errorResponse(`Todo with id: ${id} not found.`, 404);
        }

        const { description, complete } = await putSchema.validate(
            await request.json()
        );

        const updatedTodo = await prisma.todo.update({
            where: {
                id,
            },
            data: { description, complete },
        });

        return NextResponse.json({
            ok: true,
            updatedTodo,
        });
    } catch (error) {
        return errorResponse(error as Error, 400);
    }
}
