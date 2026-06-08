import Image from 'next/image'
import prisma from '@/lib/prisma'
import { User } from '@/lib/types'
import background from '~/public/background'
import Link from 'next/link'
export default async function Home () {
  let user = (await prisma.user.findUnique({
    where: { display_name: 'tinhf' }
  })) as unknown as User

  console.log('user: ', user)
  const tracks = await prisma.track.findMany({
    where: { userId: user.id }
  })

  if (!user) {
    return (
      <div className='flex flex-col flex-1 text-cyan-50 items-center justify-center bg-zinc-50/85 font-sans dark:bg-black'>
        <h1>User not found</h1>
      </div>
    )
  }
  return (
    <div className='flex flex-col flex-1 text-cyan-50 items-center justify-center bg-zinc-50/5 font-sans dark:bg-black'>
      <>
        <h1>Hello {user.username}</h1>
        <br />
        <p>
          <Link href='/about' about='about' >View about</Link>
        </p>
        <Image
          src={
            user.images && Array.isArray(user.images) && user.images.length > 0
              ? (user.images[0].url as string)
              : '/default-avatar.png'
          }
          priority
          alt='User Image'
          width={300}
          height={300}
          className='w-96 h-96 rounded-lg shadow-md object-cover'
        />
      </>
    </div>
  )
}
