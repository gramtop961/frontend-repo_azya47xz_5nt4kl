import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/blogs?limit=12`).then(r=>r.json()).then(setPosts).catch(()=>setPosts([]))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-black tracking-tight mb-6">Blog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-black/10 bg-white overflow-hidden">
              {p.cover_image && <img src={p.cover_image} className="h-40 w-full object-cover" alt={p.title}/>} 
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:underline">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
