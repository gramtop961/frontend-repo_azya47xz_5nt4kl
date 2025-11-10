import { Dumbbell, Award, HeartPulse, Sparkles } from 'lucide-react'

export function Highlights() {
  const items = [
    { icon: <Dumbbell/>, title: 'Strength-first coaching', desc: 'Evidence-based training tailored to your schedule.' },
    { icon: <HeartPulse/>, title: 'Sustainable nutrition', desc: 'Simple, high-impact nutrition strategies without restriction.' },
    { icon: <Award/>, title: 'Proven results', desc: 'Transformations built on habits, not hacks.' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i)=> (
            <div key={i} className="p-6 rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-3">{it.icon}</div>
              <h3 className="font-bold text-lg">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedPosts({ posts = [] }) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Latest articles</h2>
          <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">View all <Sparkles size={16}/></a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p)=> (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-black/10 bg-white overflow-hidden">
              {p.cover_image && <img src={p.cover_image} alt={p.title} className="h-40 w-full object-cover group-hover:opacity-90 transition"/>}
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:underline">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{p.excerpt}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {(p.tags || []).slice(0,3).map(t=> (
                    <span key={t} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
