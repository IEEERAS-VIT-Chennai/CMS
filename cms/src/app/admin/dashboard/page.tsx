import { auth } from "@/auth"
import Image from "next/image"
import { signOut } from "@/auth"
import { redirect } from "next/navigation"


export default async function UserAvatar() {
  const session = await auth()

  if (!session?.user) return (redirect("/auth/signin"))
  return (
    <>
      <div>
        welcome {session.user.name}
        <Image src={session.user.image || ""} alt="User Avatar" width={40} height={40} className="rounded-full" />
      </div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  )
}