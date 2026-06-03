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
    name: 'tinh',
    email: 'tinh@prisma.io',
    username: 'tinhiu',
    images: {
      create: [
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
      ]
    },
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
    }
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
    username: 'bob',
    images: {
      create: [
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
      ]
    },
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true
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
