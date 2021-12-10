/*
  Warnings:

  - Changed the type of `followers` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `following` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `public_repos` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `site_admin` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" DROP DEFAULT,
DROP COLUMN "followers",
ADD COLUMN     "followers" INTEGER NOT NULL,
DROP COLUMN "following",
ADD COLUMN     "following" INTEGER NOT NULL,
DROP COLUMN "public_repos",
ADD COLUMN     "public_repos" INTEGER NOT NULL,
DROP COLUMN "site_admin",
ADD COLUMN     "site_admin" BOOLEAN NOT NULL;
DROP SEQUENCE "User_id_seq";
