/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[spotify_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[display_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `display_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `external_urls` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `href` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playlists` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spotify_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `images` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "display_name" TEXT NOT NULL,
ADD COLUMN     "external_urls" TEXT NOT NULL,
ADD COLUMN     "followers" INTEGER NOT NULL,
ADD COLUMN     "following" INTEGER NOT NULL,
ADD COLUMN     "href" TEXT NOT NULL,
ADD COLUMN     "playlists" INTEGER NOT NULL,
ADD COLUMN     "spotify_id" VARCHAR(255) NOT NULL,
ALTER COLUMN "images" SET NOT NULL;

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "spotify_id" VARCHAR(255) NOT NULL,
    "name" TEXT NOT NULL,
    "artists" JSONB NOT NULL,
    "album" JSONB NOT NULL,
    "external_urls" TEXT NOT NULL,
    "preview_url" TEXT,
    "href" TEXT NOT NULL,
    "duration_ms" INTEGER NOT NULL,
    "is_playable" BOOLEAN NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Track_spotify_id_key" ON "Track"("spotify_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_spotify_id_key" ON "User"("spotify_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_display_name_key" ON "User"("display_name");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
