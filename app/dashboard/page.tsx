"use client"

import { useState } from "react"
import Image from "next/image"
import YouTube from "react-youtube"
import { ThumbsUp, ThumbsDown, Play, SkipForward } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { ShareButton } from "@/components/ui/share-button"

import { Toaster } from "@/components/ui/toaster"


interface Video {
  id: string
  title: string
  votes: number
  thumbnail: string
}

export default function SongVotingQueue() {
  const [videoUrl, setVideoUrl] = useState("")
  const [videoQueue, setVideoQueue] = useState<Video[]>([
    {
      id: "dQw4w9WgXcQ",
      title: "Rick Astley - Never Gonna Give You Up",
      votes: 5,
      thumbnail: "/placeholder.svg?height=90&width=120",
    },
    { id: "L_jWHffIx5E", title: "Smash Mouth - All Star", votes: 3, thumbnail: "/placeholder.svg?height=90&width=120" },
    {
      id: "fJ9rUzIMcZQ",
      title: "Queen - Bohemian Rhapsody",
      votes: 4,
      thumbnail: "/placeholder.svg?height=90&width=120",
    },
  ])
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = extractVideoId(videoUrl)
    if (videoId) {
      setVideoQueue([
        ...videoQueue,
        {
          id: videoId,
          title: "New Video",
          votes: 0,
          thumbnail: `/placeholder.svg?height=90&width=120&text=${videoId}`,
        },
      ])
      setVideoUrl("")
    }
  }

  const handleVote = (index: number, increment: number) => {
    const newQueue = [...videoQueue]
    newQueue[index].votes += increment
    newQueue.sort((a, b) => b.votes - a.votes)
    setVideoQueue(newQueue)
  }

  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const playNext = () => {
    if (videoQueue.length > 0) {
      setCurrentVideo(videoQueue[0].id)
      setVideoQueue(videoQueue.slice(1))
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 dark">
      <div className="container mx-auto p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-100">Song Voting Queue</h1>
          <ShareButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Now Playing</h2>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="relative w-full pb-[56.25%]">
                <YouTube
                  videoId={currentVideo}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <Button
                onClick={playNext}
                className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 flex items-center justify-center mt-4"
              >
                <SkipForward className="w-5 h-5 mr-2" />
                Play Next
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Add a Song</h2>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
              <Input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste YouTube URL here"
                className="flex-grow bg-gray-800 text-gray-100 placeholder-gray-400 border-gray-700"
              />
              <Button type="submit" className="bg-gray-700 hover:bg-gray-600 text-gray-100">
                Add
              </Button>
            </form>

            {videoUrl && extractVideoId(videoUrl) && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Preview:</h3>
                <div className="rounded-lg overflow-hidden">
                  <YouTube videoId={extractVideoId(videoUrl)!} opts={{ width: "100%", height: "200" }} />
                </div>
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Upcoming Songs</h2>
            <ul className="space-y-4">
              {videoQueue.map((video, index) => (
                <li key={video.id} className="flex items-center gap-4 bg-gray-800 p-3 rounded">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`Thumbnail for ${video.title}`}
                    width={120}
                    height={90}
                    className="rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="text-gray-100 font-semibold">{video.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-300">{video.votes} votes</span>
                      <button onClick={() => handleVote(index, 1)} className="p-1 text-gray-400 hover:text-gray-200">
                        <ThumbsUp className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleVote(index, -1)} className="p-1 text-gray-400 hover:text-gray-200">
                        <ThumbsDown className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setCurrentVideo(video.id)}
                        className="p-1 text-gray-400 hover:text-gray-200"
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

