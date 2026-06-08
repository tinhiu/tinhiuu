import prisma from '@/lib/prisma'
import { TrackComponent } from './track'
import { Track } from '@/lib/types'

export default async function about () {
  const posts = await prisma.post.findMany()
  console.log('posts: ', posts)
  const tracks = (await prisma.track.findMany()) as unknown as Track[]
  console.log('tracks: ', tracks)
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main>
        <div>
          <h1>About page</h1>
          <TrackComponent tracks={tracks} />
        </div>
      </main>
    </div>
  )
}
