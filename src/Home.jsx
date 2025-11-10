import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Highlights, FeaturedPosts } from './components/Sections'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/blogs?limit=3`).then(r=>r.json()).then(setPosts).catch(()=>setPosts([]))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="pt-16">
        <Hero/>
        <Highlights/>
        <FeaturedPosts posts={posts}/>
        <section id="programs" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl p-8 bg-black text-white">
              <h3 className="text-2xl md:text-3xl font-black">Online Coaching</h3>
              <p className="mt-2 text-white/80 max-w-2xl">Personalized training and nutrition guidance with weekly check-ins, habit systems, and accountability built for real life.</p>
              <a href="/contact" className="mt-6 inline-block px-5 py-3 rounded-full bg-white text-black font-semibold">Apply now</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
