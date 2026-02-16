"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.$transaction(async (tx) => {
        let lastChild;
        for (let i = 0; i < 5; i++) {
            lastChild = await prisma.children.create({
                data: {
                    name: faker_1.faker.person.fullName(),
                    address: faker_1.faker.location.streetAddress() + `, ${faker_1.faker.location.country()}`,
                    good: faker_1.faker.datatype.boolean()
                }
            });
        }
        for (let i = 0; i < 5; i++) {
            await prisma.toys.create({
                data: {
                    name: faker_1.faker.commerce.productName(),
                    material: faker_1.faker.helpers.arrayElement(["wood", "metal", "plastic", "other"]),
                    weight: faker_1.faker.number.int({ min: 1, max: 200 }),
                    childId: lastChild.id
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
//# sourceMappingURL=seed.js.map