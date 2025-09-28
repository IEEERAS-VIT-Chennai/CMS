"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AuthError() {
  const searchParams = useSearchParams()
  searchParams.get("error") // Error parameter available if needed

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Error Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 shadow-2xl">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-red-400 mb-3">
              Access Restricted
            </h1>
            <p className="text-slate-300 text-lg mb-4">
              Only VIT Chennai students can access this platform
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
              <p className="text-red-300 text-sm">
                <strong>Required:</strong> You must use your VIT Chennai student email address ending with{" "}
                <code className="bg-red-500/20 px-2 py-1 rounded font-mono text-red-200">@vitstudent.ac.in</code>
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="text-cyan-400 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Use Your VIT Email</h3>
                <p className="text-slate-400 text-sm">Sign in with your official VIT Chennai student email account.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="text-purple-400 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Contact Support</h3>
                <p className="text-slate-400 text-sm">If you&apos;re a VIT student without access, contact IEEE RAS VIT Chennai.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link 
              href="/auth/signin"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Try Again
            </Link>
            
            <Link 
              href="/"
              className="w-full border border-slate-600 text-slate-300 font-semibold py-3 px-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center pt-6 border-t border-slate-700/50 mt-6">
            <p className="text-slate-500 text-sm mb-2">Need help?</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="mailto:ieee.ras@vitstudent.ac.in" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}