import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const books = await prisma.book.createMany({
    data: [
      { title: "Hello World", author: "Haidar" },
      { title: "Welcome World", author: "Jonathan" },
    ],
  });
  console.log({ books });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
