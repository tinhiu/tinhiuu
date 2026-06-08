import { PrismaClient, Prisma } from './generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({
  adapter
})

const userData: Prisma.UserCreateInput[] = [
  {
    spotify_id: '31lhz6y3u5ootzbuxbnkndz4x2ea',
    display_name: 'tinhf',
    email: 'tinh@prisma.io',
    username: 'tinhiu',
    images: [
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab6775700000ee85e89b9da6c8ff8000cfc2d610',
        width: 300
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67757000003b8216e30c6b9e6fdfe7a3866581',
        width: 64
      }
    ],
    external_urls: 'https://open.spotify.com/user/31lhz6y3u5ootzbuxbnkndz4x2ea',
    followers: 1,
    following: 1,
    playlists: 1,
    href: 'https://api.spotify.com/v1/users/31lhz6y3u5ootzbuxbnkndz4x2ea',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube'
        }
      ]
    },
    favTracks: {
      create: [
        {
          track_id: '4dAW5RVBgrrDV0p8uZO3Hz',
          name: 'PSYCHO',
          artists: {
            external_urls: {},
            href: 'https://api.spotify.com/v1/artists/2NMLIfATxdqFuhx2jHcir8',
            id: '2NMLIfATxdqFuhx2jHcir8',
            name: 'COOING',
            type: 'artist',
            uri: 'spotify:artist:2NMLIfATxdqFuhx2jHcir8'
          },
          album: {
            album_type: 'album',
            artists: [],
            available_markets: [],
            external_urls: {},
            href: 'https://api.spotify.com/v1/albums/3n8Pvb9QWeznWn3lBPgHSC',
            id: '3n8Pvb9QWeznWn3lBPgHSC',
            images: [],
            is_playable: true,
            name: 'DREAMER',
            release_date: '2025-06-10',
            release_date_precision: 'day',
            total_tracks: 7,
            type: 'album',
            uri: 'spotify:album:3n8Pvb9QWeznWn3lBPgHSC'
          },
          external_urls:
            'https://open.spotify.com/track/4dAW5RVBgrrDV0p8uZO3Hz',
          preview_url: '',
          href: 'https://api.spotify.com/v1/tracks/4dAW5RVBgrrDV0p8uZO3Hz',
          duration_ms: 203120,
          is_playable: true
        },
        {
          track_id: '4dA2ewW5RVBgrrDV0p8uZO3Hz',
          name: 'PSYCHO',
          artists: {
            external_urls: {},
            href: 'https://api.spotify.com/v1/artists/2NMLIfATxdqFuhx2jHcir8',
            id: '2NMLIfATxdqFuhx2jHcir8',
            name: 'COOING',
            type: 'artist',
            uri: 'spotify:artist:2NMLIfATxdqFuhx2jHcir8'
          },
          album: {
            album_type: 'album',
            artists: [],
            available_markets: [],
            external_urls: {},
            href: 'https://api.spotify.com/v1/albums/3n8Pvb9QWeznWn3lBPgHSC',
            id: '3n8Pvb9QWeznWn3lBPgHSC',
            images: [],
            is_playable: true,
            name: 'DREAMER',
            release_date: '2025-06-10',
            release_date_precision: 'day',
            total_tracks: 7,
            type: 'album',
            uri: 'spotify:album:3n8Pvb9QWeznWn3lBPgHSC'
          },
          external_urls:
            'https://open.spotify.com/track/4dAW5RVBgrrDV0p8uZO3Hz',
          preview_url: '',
          href: 'https://api.spotify.com/v1/tracks/4dAW5RVBgrrDV0p8uZO3Hz',
          duration_ms: 203120,
          is_playable: true
        }
      ]
    }
  }
]

export async function main () {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
