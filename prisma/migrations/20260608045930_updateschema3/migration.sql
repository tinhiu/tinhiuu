/*
  Warnings:

  - You are about to drop the column `spotify_id` on the `Track` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[track_id]` on the table `Track` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `track_id` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Track_spotify_id_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "spotify_id",
ADD COLUMN     "track_id" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Track_track_id_key" ON "Track"("track_id");
