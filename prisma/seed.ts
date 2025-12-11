/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Children, PrismaClient } from "generated/prisma/client";
import { faker } from '@faker-js/faker'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    let lastChild: Children;
    for (let i = 0; i < 5; i++) {
      lastChild = await prisma.children.create({
        data: {
          name: faker.person.fullName(),
          address: faker.location.streetAddress() + `, ${faker.location.country()}`,
          good: faker.datatype.boolean()
        }
      });
    }

    for (let i = 0; i < 5; i++) {
      await prisma.toys.create({
        data: {
          name: faker.commerce.productName(),
          material: faker.helpers.arrayElement(["wood", "metal", "plastic", "other"]),
          weight: faker.number.int({ min: 1, max: 200 }),
          childId: lastChild!.id
        }
      });
    }
  });
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
