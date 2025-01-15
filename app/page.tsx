import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Radio, Headphones, ArrowRight } from 'lucide-react'
import { AppBar } from "./components/AppBar"
import { Redirect } from "./components/Redirect"


export default function MusicStreamingLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-950 text-purple-100">
      <AppBar/>
      <Redirect/>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-purple-800">
        
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-200">
                  Let Your Fans Choose the Beat
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-300 md:text-xl">
                  FanTune: Where creators and fans unite to create the perfect stream soundtrack.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-purple-100">Get Started</Button>
                <Button variant="outline" className="text-purple-300 border-purple-300 hover:bg-purple-800 hover:text-purple-100">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-200">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Users className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-200">Fan-Driven Playlists</h3>
                <p className="text-purple-300">Let your audience curate your stream's soundtrack in real-time.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Radio className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-200">Live Streaming</h3>
                <p className="text-purple-300">Seamlessly integrate music with your live content.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Headphones className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-purple-200">Creator Tools</h3>
                <p className="text-purple-300">Powerful tools to manage your stream and engage with your audience.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-200">For Creators</h2>
                <p className="max-w-[600px] text-purple-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your streams with fan-chosen music. Boost engagement, create unique experiences, and grow your audience.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-200">For Fans</h2>
                <p className="max-w-[600px] text-purple-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Influence your favorite creator's stream. Vote for songs, discover new music, and be part of an interactive community.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-200">
                  Ready to Revolutionize Your Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join FanTune today and start creating unforgettable music experiences with your audience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-purple-900 border-purple-700 text-purple-100 placeholder-purple-400" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-purple-100">
                    Sign Up
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-purple-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-300" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-800 bg-purple-950">
        <p className="text-xs text-purple-400">© 2024 FanTune. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-purple-300 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-purple-300 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

