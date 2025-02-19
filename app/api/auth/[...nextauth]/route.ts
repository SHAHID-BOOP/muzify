import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import { log } from "console";
import { prismaClient } from "@/app/lib/db";

// added nextauth
const handler = NextAuth({
  providers:  [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn(params){
      if(!params.user.email) {
        return false;
      }
      try {
        await prismaClient.user.create({
          data: {
            email: params.user.email,
            provider: "GOOGLE"
          }
        })
      } catch (e) {

      }
      
      return true;
    }
  }
})

export { handler as GET, handler as POST }