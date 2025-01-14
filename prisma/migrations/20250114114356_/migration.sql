/*
  Warnings:

  - You are about to drop the column `tilte` on the `Stream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "tilte",
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '';
