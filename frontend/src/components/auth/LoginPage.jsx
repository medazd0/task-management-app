import { useState } from "react"
import { Check, Code2, Briefcase, GraduationCap, MapPin } from "lucide-react"
import ErrorMessage from "../common/ErrorMessage"
import { authService } from "../../services/authService"

const LoginPage = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
    
      await authService.login(formData)
      onLoginSuccess()
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fillTestCredentials = (email, password) => {
    setFormData({ email, password })
  }

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Panel - Brand Information */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-400 p-8 flex-col justify-between relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />

        {/* Logo and Brand */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-white/30">
              <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Hahn Software</h1>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-white/80" />
                <p className="text-xs text-white/90 font-medium">Morocco</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white">End of Studies Internship 2026</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Task Management
              <br />
              <span className="text-white/95 drop-shadow-lg">
                Technical Test
              </span>
            </h2>

            <p className="text-white/90 text-base leading-relaxed max-w-lg">
              Welcome to your technical evaluation. Demonstrate your full-stack development skills.
            </p>
          </div>
        </div>

        {/* Features Cards */}
        <div className="relative z-10 space-y-3">
          {[
            { 
              icon: Briefcase, 
              title: "Real-World Project", 
              desc: "Build a production-ready application" 
            },
            { 
              icon: Code2, 
              title: "Full-Stack Development", 
              desc: "Backend, Frontend & Database integration" 
            },
            { 
              icon: Check, 
              title: "Best Practices", 
              desc: "Clean code, security & documentation" 
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-400/30">
                <item.icon className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-white text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Deadline: Dec 24th, 2025</span>
          </div>
          
          {/* Portfolio Link */}
          <a 
            href="https://azoud-mohamed.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 group"
          >
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/70 font-medium">Developed by</p>
              <p className="text-sm font-bold text-white">Mohamed Azoud</p>
            </div>
            <svg className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-full mb-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Candidate Portal
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-600">
              Sign in to access your task management system
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 transition-all duration-300
                           ${focused === "email" ? "border-teal-500 bg-white shadow-lg shadow-teal-100" : "border-gray-200"}
                           focus:outline-none placeholder-transparent peer`}
                placeholder="Email"
              />
              <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none
                                ${
                                  formData.email || focused === "email"
                                    ? "-top-2.5 text-xs bg-white px-2 text-teal-600 font-semibold"
                                    : "top-4 text-gray-500"
                                }`}
              >
                email@example.com
              </label>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                required
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-900 transition-all duration-300
                           ${focused === "password" ? "border-teal-500 bg-white shadow-lg shadow-teal-100" : "border-gray-200"}
                           focus:outline-none placeholder-transparent peer`}
                placeholder="Password"
              />
              <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none
                                ${
                                  formData.password || focused === "password"
                                    ? "-top-2.5 text-xs bg-white px-2 text-teal-600 font-semibold"
                                    : "top-4 text-gray-500"
                                }`}
              >
                ••••••••
              </label>
            </div>

            {/* Error Message */}
            <ErrorMessage message={error} />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl
                         hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5
                         transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                         flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>

          {/* Test Credentials */}
          <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-cyan-50/50 rounded-xl border border-teal-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-teal-100 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Test Credentials</p>
                <p className="text-xs text-gray-500">Click to auto-fill</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { email: "admin@example.com", password: "admin123", role: "Admin" },
                { email: "user@example.com", password: "user123", role: "user" },
              ].map((cred, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => fillTestCredentials(cred.email, cred.password)}
                  className="w-full flex items-center justify-between p-2.5 bg-white rounded-lg border border-teal-100 
                             hover:border-teal-300 hover:shadow-md hover:scale-[1.02] transition-all duration-200 text-left group"
                >
                  <div className="flex-1">
                    <p className="font-mono text-xs text-gray-700 group-hover:text-teal-600 font-medium">
                      {cred.email}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{cred.role} Account</p>
                  </div>
                  <div className="px-2 py-1 bg-teal-50 text-teal-600 text-xs font-semibold rounded group-hover:bg-teal-100 transition-colors">
                    Use
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Technical evaluation for{" "}
              <span className="font-semibold text-gray-700">Hahn Software Morocco</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage