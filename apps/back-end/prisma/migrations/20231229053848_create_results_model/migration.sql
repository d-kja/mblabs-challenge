-- CreateEnum
CREATE TYPE "Bimester" AS ENUM ('primeiro', 'segundo', 'terceiro', 'quarto');

-- CreateEnum
CREATE TYPE "ClassType" AS ENUM ('biologia', 'artes', 'geografia', 'sociologia');

-- CreateTable
CREATE TABLE "results" (
    "id" TEXT NOT NULL,
    "bimester" "Bimester" NOT NULL,
    "class_type" "ClassType" NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);
