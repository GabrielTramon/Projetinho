/*
  Warnings:

  - You are about to drop the column `vehicle` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `vehicleYear` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "vehicle",
ADD COLUMN     "vehicleYear" INTEGER NOT NULL;
