/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blog` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gists_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gravatar_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hireable` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizations_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_gists` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_repos` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received_events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repos_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site_admin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starred_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptions_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitter_username` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "blog" TEXT NOT NULL,
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "events_url" TEXT NOT NULL,
ADD COLUMN     "followers" TEXT NOT NULL,
ADD COLUMN     "followers_url" TEXT NOT NULL,
ADD COLUMN     "following" TEXT NOT NULL,
ADD COLUMN     "following_url" TEXT NOT NULL,
ADD COLUMN     "gists_url" TEXT NOT NULL,
ADD COLUMN     "gravatar_id" TEXT NOT NULL,
ADD COLUMN     "hireable" TEXT NOT NULL,
ADD COLUMN     "html_url" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "node_id" TEXT NOT NULL,
ADD COLUMN     "organizations_url" TEXT NOT NULL,
ADD COLUMN     "public_gists" TEXT NOT NULL,
ADD COLUMN     "public_repos" TEXT NOT NULL,
ADD COLUMN     "received_events_url" TEXT NOT NULL,
ADD COLUMN     "repos_url" TEXT NOT NULL,
ADD COLUMN     "site_admin" TEXT NOT NULL,
ADD COLUMN     "starred_url" TEXT NOT NULL,
ADD COLUMN     "subscriptions_url" TEXT NOT NULL,
ADD COLUMN     "twitter_username" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_url_key" ON "User"("url");
