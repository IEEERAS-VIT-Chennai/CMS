"use client"
import { signIn } from "next-auth/react"

interface GoogleSignInButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function GoogleSignInButton({ children, className }: GoogleSignInButtonProps) {
  const handleGoogleSignIn = () => {
    signIn("google", { 
      redirectTo: "/admin/dashboard",
      // This will skip the sign-in page and go directly to Google
      callbackUrl: "/admin/dashboard" 
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className={className}>
      {children}
    </button>
  );
}