-- CreateTable
CREATE TABLE `Jatek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `megnevezes` VARCHAR(191) NOT NULL,
    `anyag` ENUM('wood', 'metal', 'plastic', 'other') NOT NULL,
    `suly` INTEGER NOT NULL,
    `gyerekId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gyerek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `cim` VARCHAR(191) NOT NULL,
    `jo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Gyerek_nev_key`(`nev`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jatek` ADD CONSTRAINT `Jatek_gyerekId_fkey` FOREIGN KEY (`gyerekId`) REFERENCES `Gyerek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
