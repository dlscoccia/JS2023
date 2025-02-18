/*
  Warnings:

  - You are about to drop the column `LastName` on the `OrderAddress` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `UserAddress` table. All the data in the column will be lost.
  - Added the required column `lastName` to the `OrderAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `UserAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Country_id_key";

-- AlterTable
ALTER TABLE "OrderAddress" DROP COLUMN "LastName",
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserAddress" DROP COLUMN "LastName",
ADD COLUMN     "lastName" TEXT NOT NULL;
