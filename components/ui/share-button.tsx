"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

import { toast } from "@/components/ui/toaster"

export function ShareButton() {
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    setIsSharing(true)
    const shareData = {
      title: "Song Voting Queue",
      text: "Vote for the next song to be played on the stream!",
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        toast({
          title: "Shared successfully!",
          description: "The link has been shared.",
          variant: ""
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
          variant: ""
        })
      }
    } catch (error) {
      console.error("Error sharing:", error)
      toast({
        title: "Sharing failed",
        description: "There was an error while trying to share.",
        variant: "destructive",
      })
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <Button onClick={handleShare} disabled={isSharing} className="bg-gray-700 hover:bg-gray-600 text-gray-100">
      <Share2 className="w-5 h-5 mr-2" />
      {isSharing ? "Sharing..." : "Share"}
    </Button>
  )
}

