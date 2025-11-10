import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch(`${API}/api/blogs/${slug}`).then(async r=>{
      if(!r.ok) throw new Error('Not found')
      return r.json()
    }).then(setPost).catch(e=>setError(e.message))
  }, [slug])

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="pt-20 max-w-3xl mx-auto px-4">
        {!post && !error && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {post && (
          <article>
            {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full h-64 object-cover rounded-2xl"/>}
            <h1 className="mt-6 text-3xl font-black tracking-tight">{post.title}</h1>
            <div className="prose prose-zinc max-w-none mt-4" dangerouslySetInnerHTML={{__html: post.content}} />
          </article>
        )}
      </main>
    </div>
  )
}
