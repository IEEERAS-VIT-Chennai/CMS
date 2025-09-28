"use client"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* Back Button */}
      <Link href="/" className="absolute top-6 left-6 z-20 group">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
          <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">Back to Home</span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Sign In Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            {/* IEEE Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-white font-black text-lg">IEEE</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-30"></div>
              </div>
            </div>
            
            <h1 className="text-3xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-400 text-lg mb-3">
              Sign in to <span className="text-cyan-400 font-semibold">IEEE RAS VIT Chennai</span>
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-4">
              <p className="text-amber-300 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Only VIT Chennai student emails (@vitstudent.ac.in) are allowed
              </p>
            </div>
          </div>

          {/* Google Sign In Button */}
          <div className="space-y-6">
            <button 
              onClick={() => signIn("google", { redirectTo: "/admin/dashboard" })}
              className="group w-full relative overflow-hidden"
            >
              <div className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center gap-4">
                {/* Google Icon */}
                <Image src="/google.svg" alt="Google Icon" width={24} height={24} />
                <span className="text-lg">Continue with Google</span>

              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-800/50 text-slate-400 font-medium">Why IEEE RAS?</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Secure OAuth Authentication</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">Lightning Fast Access</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-medium">Advanced Privacy Protection</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-slate-700/50">
              <p className="text-slate-500 text-sm">
                By signing in, you agree to our{" "}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-2">New to IEEE RAS?</h3>
            <p className="text-slate-400 mb-4">
              Join our community of robotics and automation enthusiasts at VIT Chennai
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>1000+ Members</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>150+ Events</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>50+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}