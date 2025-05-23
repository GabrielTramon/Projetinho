-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "fipeCode" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "fuelTypeId" TEXT NOT NULL,
    "referenceMonth" INTEGER NOT NULL,
    "referenceYear" INTEGER NOT NULL,
    "Vehicle" INTEGER NOT NULL,
    "modelID" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
