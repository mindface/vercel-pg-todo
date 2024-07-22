import prisma from "../src/lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.$executeRawUnsafe(`TRUNCATE TABLE todo CASCADE;`),
    prisma.todo.createMany({
      data: [
        {
          title: "test001",
          body: "test001",
          completed: true,
        },
        {
          title: "test002",
          body: "test002",
        },
        {
          title: "test003",
          body: "test003",
          completed: true,
        },
        {
          title: "test004",
          body: "test004",
        },
      ],
    }),
  ])
  console.log(response)
}

main()
  .then( async () => {
    await prisma.$disconnect();
  })
  .catch( async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
