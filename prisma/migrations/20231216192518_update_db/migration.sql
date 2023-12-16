-- CreateTable
CREATE TABLE `Prediction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accuraty` VARCHAR(191) NULL,
    `food_name` VARCHAR(191) NULL,
    `calcium` VARCHAR(191) NULL,
    `carbohydrate` VARCHAR(191) NULL,
    `fat` VARCHAR(191) NULL,
    `protein` VARCHAR(191) NULL,
    `vitamin` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
