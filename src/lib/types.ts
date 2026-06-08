export type User = {
  id: number
  display_name: string
  email: string
  username: string
  images: [
    {
      url: string
      width: number
      height: number
    }
  ]
  external_urls: string
  followers: number
  following: number
  playlists: number
  href: string
  favTracks: Track[] | []
}
export type Track = {
  id: number
  track_id: string
  name: string
  artists: Object
  album: Object
  external_urls: string
  preview_url: string
  href: string
  duration_ms: number
  is_playable: boolean
}
