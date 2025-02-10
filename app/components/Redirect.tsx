"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

// this is redirect component
// this component is used to redirect user to dashboard if user is logged in
export default function Redirect(){
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if(session?.data?.user){
      router.push("/dashboard")
    }
  },  [session])
  return null
}