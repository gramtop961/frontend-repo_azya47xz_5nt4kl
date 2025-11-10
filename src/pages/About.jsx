import Navbar from '../components/Navbar'

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main className="pt-20 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black tracking-tight mb-4">About</h1>
        <p className="text-gray-700 leading-7">I'm a fitness coach helping busy professionals build strong, resilient bodies through smart training, sustainable nutrition, and daily habits. My approach blends science, simplicity, and accountability to create results that last.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-black/10">
            <h3 className="font-semibold">Credentials</h3>
            <ul className="mt-2 text-gray-700 list-disc ml-5 space-y-1">
              <li>Certified Strength & Conditioning Specialist (CSCS)</li>
              <li>Precision Nutrition Level 1</li>
              <li>5+ years coaching experience</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-black/10">
            <h3 className="font-semibold">Philosophy</h3>
            <p className="mt-2 text-gray-700">Train for life. Build habits, track progress, and stay consistent. No gimmicks. No extremes. Just practical steps that fit your world.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
