import { Link, NavLink } from 'react-router-dom'
import { Menu, Dumbbell, Mail, BookOpen, Info } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <NavLink to="/" className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium ${isActive? 'text-black' : 'text-gray-600 hover:text-black'}`}>Home</NavLink>
      <NavLink to="/blog" className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium ${isActive? 'text-black' : 'text-gray-600 hover:text-black'}`}><div className="inline-flex items-center gap-2"><BookOpen size={16}/>Blog</div></NavLink>
      <NavLink to="/about" className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium ${isActive? 'text-black' : 'text-gray-600 hover:text-black'}`}><div className="inline-flex items-center gap-2"><Info size={16}/>About</div></NavLink>
      <NavLink to="/contact" className={({isActive})=>`px-3 py-2 rounded-md text-sm font-medium ${isActive? 'text-black' : 'text-gray-600 hover:text-black'}`}><div className="inline-flex items-center gap-2"><Mail size={16}/>Contact</div></NavLink>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 font-extrabold tracking-tight text-lg">
            <Dumbbell className="text-black"/> FIT by <span className="px-2 py-1 rounded-full bg-black text-white">You</span>
          </Link>
          <nav className="hidden md:block">{navItem}</nav>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-md border border-black/10">
            <Menu/>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-black/5">{navItem}</div>
        )}
      </div>
    </header>
  )
}
