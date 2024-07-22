import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ status: 200, message: "successfully todos", todos: todos }); 
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ status: 200, message: "settings code" }); 
}

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const todo = await prisma.todo.create({
      data: { 
        title: req.title,
        body: req.body,
       }
    });
    return NextResponse.json({ status: 200, message: "successfully item", todo: todo }); 
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ status: 200, message: "settings code" }); 
}
