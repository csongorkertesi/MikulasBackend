-- DropForeignKey
ALTER TABLE `toys` DROP FOREIGN KEY `Toys_childId_fkey`;

-- DropIndex
DROP INDEX `Toys_childId_fkey` ON `toys`;

-- AddForeignKey
ALTER TABLE `Toys` ADD CONSTRAINT `Toys_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `Children`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
