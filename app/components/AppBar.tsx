"use client"

import {signIn,signOut,useSession} from 'next-auth/react'
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AppBar(){
  const session = useSession();

  return <div className='flex justify-between pl-10 pr-11 pt-4'>
    <div className='text-lg font-bold flex flex-col justify-center text-white'>
        Muzify
    </div>
    <div>
          {session.data?.user && <Button className="bg-purple-600 hover:bg-purple-700 text-purple-100" onClick={() => signOut()}>Logout</Button>}
          {!session.data?.user && <Button className="bg-purple-600 hover:bg-purple-700 text-purple-100" onClick={() => signIn()}>SignIn</Button>}
    </div>    
                 
  </div>  
}