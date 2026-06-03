import Image from 'next/image'
import prisma from '@/lib/prisma'

export default async function Home () {
  const user = await prisma.user.findUnique({
    where: { username: 'tinhiu' }
  })
  const image = await prisma.image.findMany({
    where: { userId: user?.id }
  })

  console.log('users: ', user)
  console.log('images: ', image)
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <h1>Hello {user?.name}</h1>
      <Image src={image[0].url} alt='User Image' width={300} height={300} />
    </div>
  )
}
