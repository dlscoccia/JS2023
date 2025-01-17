import prisma from '@/lib/prisma'
import * as yup from 'yup'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const take = Number(searchParams.get('take') ?? '10')
  const skip = Number(searchParams.get('skip') ?? '0')

  if (isNaN(take)) {
    return NextResponse.json(
      { ok: false, message: 'Take must a number' },
      { status: 400 }
    )
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { ok: false, message: 'Skip must a number' },
      { status: 400 }
    )
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  })

  return NextResponse.json({
    ok: true,
    todos,
  })
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
})

export async function POST(request: NextRequest) {
  try {
    const { description, complete } = await postSchema.validate(
      await request.json()
    )

    const todo = await prisma.todo.create({ data: { description, complete } })

    return NextResponse.json({
      ok: true,
      todo,
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error ?? 'Error creating todo',
      },
      { status: 400 }
    )
  }
}


export async function DELETE(request: NextRequest) {
  try {
    const deletedTodos = await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    })

    return NextResponse.json({
      ok: true,
      message: deletedTodos,
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error,
      },
      { status: 400 }
    )
  }
}