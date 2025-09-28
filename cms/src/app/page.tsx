import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-white font-black text-sm">IEEE</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">IEEE RAS</h1>
            <p className="text-sm text-slate-400 font-medium">VIT Chennai</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/auth/signin" className="px-6 py-3 text-cyan-400 font-semibold hover:text-cyan-300 transition-all duration-300 hover:scale-105 relative group">
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link href="/auth/signup" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 relative overflow-hidden group">
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold text-sm">🤖 Next-Gen Club Management</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              IEEE RAS Club
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Management System
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Revolutionary club management platform powered by cutting-edge technology. 
            <br />
            <span className="text-cyan-400 font-semibold">Connect • Collaborate • Innovate</span> with the IEEE RAS community.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link href="/auth/signin" className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            
            <button className="group px-10 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Floating Cards Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
              <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">Smart Member Management</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">AI-powered member analytics with automated engagement tracking and personalized recommendations.</p>
              </div>

              <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transform rotate-1 hover:rotate-0">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4l-4 8-4-8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Dynamic Event Hub</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Revolutionary event orchestration with real-time collaboration and immersive virtual experiences.</p>
              </div>

              <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transform -rotate-1 hover:rotate-0">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Intelligent Analytics</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Advanced predictive analytics with machine learning insights for strategic decision making.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-20 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">Active Members</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">Events Hosted</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">Active Projects</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">AI Support</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Revolutionize</span> Your Club?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join thousands of innovators already transforming their communities with IEEE RAS CMS.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/auth/signin" className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Free Trial
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <button className="group px-10 py-4 border-2 border-purple-400/50 text-purple-400 font-bold text-lg rounded-2xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <span className="text-white font-black text-sm">IEEE</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-30"></div>
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">IEEE RAS VIT Chennai</span>
                </div>
              </div>
              <p className="text-slate-400 text-lg mb-6 max-w-md">Pioneering the future of robotics and automation through innovative technology and collaborative community building.</p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'discord'].map((social) => (
                  <a key={social} href="#" className="group w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/25">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-3">
                {['Dashboard', 'Events', 'Projects', 'Analytics', 'Members', 'Settings'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {['Documentation', 'API Reference', 'Help Center', 'Community', 'Contact Us', 'Bug Reports'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 IEEE RAS VIT Chennai. Crafted with ❤️ for innovation.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
