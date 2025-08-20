'use client'

import { useState } from 'react'
import Image from 'next/image'

// Placeholder logo component
const LogoIcon = () => (
  <div className="w-7 h-7 bg-black border-2 border-black flex items-center justify-center">
    <span className="text-white font-bold text-xs">P</span>
  </div>
)

// Feature card component
const FeatureCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-2 border-black p-6 bg-white h-full">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm">{children}</p>
  </div>
)

// Step component
const StepCard = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 border-2 border-black flex items-center justify-center font-bold text-2xl">
      {num}
    </div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
)



// Landing page component (for non-authenticated users)
const LandingPage = () => {
  return (
    <div className="bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <h1 className="text-lg sm:text-xl font-bold">untitled.base</h1>
          </div>
          <button 
            onClick={() => window.location.href = '/login'}
            className="px-3 sm:px-4 py-2 border-2 border-black text-xs sm:text-sm font-bold hover:bg-black hover:text-white"
          >
            Sign In
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-16 sm:py-20 px-4 sm:px-6 border-b-2 border-black">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">sample text</h2>
                      <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg text-gray-800">
              generational wealth on the way... stay tuned
            </p>
          
          {/* Demo Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-center gap-6 sm:gap-8 mb-12">
            {/* Request Example */}
            <div className="border-2 border-black p-4 text-left h-full">
              <p className="font-bold mb-2 text-center">1. Sample Text</p>
              <div className="bg-gray-100 p-3 border-2 border-black">
                <p className="font-bold">URL:</p>
                <p className="break-all text-sm mb-2">https://sample-website.com/products</p>
                <p className="font-bold">QUERY:</p>
                <p className="text-sm">&quot;Sample Text&quot;</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-3xl sm:text-4xl font-bold text-center lg:hidden">↓</div>
            <div className="text-4xl sm:text-5xl font-bold text-center hidden lg:block">→</div>

            {/* Response Example */}
            <div className="border-2 border-black p-4 text-left h-full">
              <p className="font-bold mb-2 text-center">2. Sample Text</p>
              <div className="bg-gray-100 p-3 border-2 border-black text-sm">
                <p className="font-bold">Sample Text</p>
                <pre className="text-xs overflow-x-auto bg-white p-2 my-1 border-2 border-black">
                  <code>Sample Text -d &apos;&apos;</code>
                </pre>
                <p className="font-bold mt-3"> Sample Text</p>
                <pre className="text-xs overflow-x-auto bg-white p-2 mt-1 border-2 border-black">
                  <code>{`[
  {
            Sample Text,
    (Place Something Cool Here)
  },
  {
               Sample Text,
    (Place Something REALLY Cool Here)
  }
]`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-b-2 border-black bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
              Simple Workflow... Something Cool Here
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
              <StepCard num="1" title="Sample">
                Sample Text
              </StepCard>
              <StepCard num="2" title="Sample"> 
                Sample Text
              </StepCard>
              <StepCard num="3" title="Sample">
                Sample Text
              </StepCard>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b-2 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              boxes on boxes on...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
              <FeatureCard title="Sample Text">
                Do something cool here
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 border-b-2 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              built for real people
            </h2>
            <div className="bg-white border-2 border-black">
              <div className="border-b-2 border-black p-3">
                <p className="font-bold">header of this super cool box</p>
              </div>
              <pre className="p-4 sm:p-6 overflow-x-auto">
                <code>{`###

some more sample text cause why not

maybe put some code here

###

`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} kozy studios coz fuk it</p>
        </div>
      </footer>
    </div>
  )
}



// Main landing page component
export default function Home() {
  return <LandingPage />
}
