'use client'

import { Track } from '@/lib/types'

export const TrackComponent = ({ tracks }: { tracks: Track[] }) => {
  console.log('tracks: ', tracks)
  return <div>Tracks: {tracks.length}</div>
}
