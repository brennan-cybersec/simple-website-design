'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Simple logo component - learning React components!
const LogoIcon = () => (
  <div className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center">
    <span className="text-white font-bold text-xs">S</span>
  </div>
)

// Feature card component - trying to make reusable components
const FeatureCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-2 border-black p-6 bg-white h-full">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm">{children}</p>
  </div>
)

// Step component - learning about props
const StepCard = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 border-2 border-black flex items-center justify-center font-bold text-2xl">
      {num}
    </div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
)

// Main scraper form component - this is my first form!
const ScraperForm = ({ onSubmit, isLoading }: { onSubmit: (url: string, query: string) => void; isLoading: boolean }) => {
  const [url, setUrl] = useState('')
  const [query, setQuery] = useState('')

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-3xl font-bold text-black mb-3">What could we do together?</h2>
      <p className="text-gray-600 text-lg max-w-md mb-8">
        sample text
      </p>
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          if (url.trim() && query.trim()) {
            onSubmit(url, query)
          }
        }}
        className="w-full max-w-xl"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="url" className="sr-only">URL</label>
            <input
              id="url"
              name="url"
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="enter the void"
              className="w-full px-4 py-3 bg-white text-black border-2 border-black focus:outline-none font-mono"
            />
          </div>
          <div>
            <label htmlFor="query" className="sr-only">Query</label>
            <textarea
              id="query"
              name="query"
              rows={4}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., &apos;lets figure it out'"
              className="w-full px-4 py-3 bg-white text-black border-2 border-black focus:outline-none resize-none font-mono"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading || !url.trim() || !query.trim()}
          className="mt-6 w-full px-6 py-3 bg-black text-white font-bold rounded-md shadow-lg hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto" />
          ) : (
            "lets live life"
          )}
        </button>
      </form>
    </div>
  )
}

// Dashboard component - learning about state management
export default function Dashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Handle form submission - still learning async functions
  const handleScraperSubmit = async (url: string, query: string) => {
    setIsLoading(true)
    try {
      // TODO: Add real API call later
      // For now, just simulate the process
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert(`Scraper created for: ${url}\nQuery: ${query}`)
    } catch (error) {
      console.error('Error creating scraper:', error)
      alert('Error creating scraper')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen bg-white text-black font-mono relative overflow-hidden">
      {/* Status Banner - learning about conditional rendering */}
      <div className="sticky top-0 z-20 bg-yellow-200 text-black text-center text-xs sm:text-sm py-2 px-4 border-b-2 border-black">
        lets take over the world.
      </div>
      <div className="sticky top-0 z-20 bg-yellow-200 text-black text-center text-xs sm:text-sm py-2 px-4 border-b-2 border-black">
        oh and announcements will be made on x.
      </div>

      {/* Sidebar - learning about layout */}
      <aside className="absolute left-0 top-0 w-80 h-full border-r-2 border-black bg-gray-50 flex flex-col z-10 pt-10">
        <div className="p-4 border-b-2 border-black flex-shrink-0">
          <div className="flex items-center">
            <LogoIcon />
            <h1 className="text-xl font-bold ml-3">untitled.base</h1>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col overflow-hidden">
          <h2 className="text-lg font-bold mb-4 flex-shrink-0">heading of something hopefully cool</h2>
          <div className="flex-1 overflow-y-auto">
            <p className="text-gray-600 text-sm">this could be a conversation!</p>
          </div>
        </div>

        <div className="p-4 border-t-2 border-black flex-shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs">
              <p className="font-semibold truncate max-w-[7rem]">demo</p>
              <p className="text-gray-600 truncate max-w-[7rem]">user@example.com</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border-2 border-black rounded hover:bg-black hover:text-white">
                Profile
              </button>
              <button 
                onClick={() => router.push('/')}
                className="px-3 py-1 text-xs border-2 border-black rounded hover:bg-black hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-80 h-full flex items-center justify-center p-8 pt-10">
        <ScraperForm onSubmit={handleScraperSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}
