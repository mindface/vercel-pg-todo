import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const req = await request.json();
  try {
    const todo = await prisma.todo.update({
      where: { id: Number(params.id) },
      data: { 
        title: req.title,
        body: req.body
       }
    });
    return NextResponse.json({ status: 200, message: 'Todo update successfully', todo: todo});
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const todo = await prisma.todo.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ status: 200, message: 'Todo deleted successfully', todo: todo});
  } catch (error) {
    console.error(error);
  }
}
