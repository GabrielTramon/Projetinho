/*
  Warnings:

  - You are about to drop the column `Vehicle` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `modelID` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `modelId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "Vehicle",
DROP COLUMN "modelID",
ADD COLUMN     "modelId" TEXT NOT NULL,
ADD COLUMN     "vehicle" INTEGER NOT NULL;
