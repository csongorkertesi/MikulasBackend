/*
  Warnings:

  - You are about to drop the `gyerek` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jatek` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `jatek` DROP FOREIGN KEY `Jatek_gyerekId_fkey`;

-- DropTable
DROP TABLE `gyerek`;

-- DropTable
DROP TABLE `jatek`;

-- CreateTable
CREATE TABLE `Toys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `material` ENUM('wood', 'metal', 'plastic', 'other') NOT NULL,
    `weight` INTEGER NOT NULL,
    `childId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Children` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `good` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Children_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Toys` ADD CONSTRAINT `Toys_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `Children`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
