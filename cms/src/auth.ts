import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    authorization: {params: { prompt: "consent", access_type: "offline", response_type: "code" }},
  })],
  pages: {
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user }) {

      if (user.email && user.email.endsWith("vitstudent.ac.in")) {
        return true;
      }
      
      return false;
    },
  },
})