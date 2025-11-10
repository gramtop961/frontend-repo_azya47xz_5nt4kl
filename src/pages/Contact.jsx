import Navbar from '../components/Navbar'
import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({name: '', email: '', subject: '', message: ''})
  const [status, setStatus] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Sending...')
    try {
      const r = await fetch(`${API}/api/contact`, {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form)
      })
      if(!r.ok) throw new Error('Failed to send')
      setStatus('Thanks! Your message has been sent.')
      setForm({name:'', email:'', subject:'', message:''})
    } catch(err){
      setStatus('There was an issue. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="pt-20 max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-black tracking-tight mb-4">Contact</h1>
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full border border-black/10 rounded-lg p-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required/>
          <input className="w-full border border-black/10 rounded-lg p-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required/>
          <input className="w-full border border-black/10 rounded-lg p-3" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})}/>
          <textarea className="w-full border border-black/10 rounded-lg p-3" rows="6" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required/>
          <button className="px-5 py-3 rounded-full bg-black text-white font-semibold">Send</button>
        </form>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </main>
    </div>
  )
}
