import Contact from '@/app/component/Contact'
import Hero from '@/app/component/Hero'
import Projects from '@/app/component/Projects'
import Resume from '@/app/component/Resume'
import Services from '@/app/component/Services'
import Script from 'next/script'
import React from 'react'
import Header from './component/Header'

export default function Home() {
  return (
    <div>
      {/* <Script src="/script.js" /> */}
      {/* <Header /> */}
      <main>
      <Hero />
      {/* <Services /> */}
      {/*<Resume />
      <Projects />
      <Contact />*/}
      </main>
    </div>
  )
}



