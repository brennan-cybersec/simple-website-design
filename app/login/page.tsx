'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Simple logo component - I'm still learning React!
const LogoIcon = () => (
  <div className="w-12 h-12 bg-white flex items-center justify-center">
    <span className="text-black font-bold text-lg">S</span>
  </div>
)

// Main login component - this is my first time building forms!
export default function LoginPage() {
  const router = useRouter()
  
  // State management - learning about React hooks!
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Form submission handler - still figuring out async/await
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      // TODO: Add real authentication later
      // For now, just simulate the process
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (isSignUp) {
        setMessage('Account created! Check your email.')
        // TODO: Actually create account
      } else {
        setMessage('Signing in...')
        // TODO: Actually sign in
        // For demo, redirect to dashboard
        setTimeout(() => router.push('/dashboard'), 1000)
      }
    } catch (error) {
      setMessage('Something went wrong. Try again!')
      console.log('Error:', error) // Debugging
    } finally {
      setIsLoading(false)
    }
  }

  // Toggle between sign in and sign up
  const toggleMode = () => {
    setIsSignUp(!isSignUp)
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-4">
      {/* Background decorations - trying to make it look cool */}
      <div className="hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main form container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white mb-4">
            <LogoIcon />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {isSignUp ? 'Join Scraper' : 'Welcome back'}
          </h1>
          <p className="text-slate-300 text-lg">
            {isSignUp 
              ? 'Create your account to get started' 
              : 'Sign in to continue to Scraper'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-black border-2 border-white text-white placeholder-gray-400 focus:outline-none font-mono"
                placeholder="Enter your email"
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 bg-black border-2 border-white text-white placeholder-gray-400 focus:outline-none font-mono"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Message display */}
          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              message.includes('error') || message.includes('Error') || message.includes('wrong')
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-green-500/20 text-green-300 border border-green-500/30'
            }`}>
              {message}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-white text-black border-2 border-black font-bold uppercase tracking-wide hover:bg-gray-200 transition disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {isSignUp ? 'Creating account...' : 'Signing in...'}
              </div>
            ) : (
              isSignUp ? 'Create account' : 'Sign in'
            )}
          </button>

          {/* Toggle mode button */}
          <div className="text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-slate-300 hover:text-white text-sm transition-colors duration-200"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : 'Don\'t have an account? Sign up'
              }
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
                                <p className="text-slate-400 text-sm">
                        sample text
                      </p>
        </div>
      </div>
    </div>
  )
}
