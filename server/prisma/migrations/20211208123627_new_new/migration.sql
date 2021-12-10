/*
  Warnings:

  - Changed the type of `public_gists` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "public_gists",
ADD COLUMN     "public_gists" INTEGER NOT NULL;
