import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 w-fit pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">Fitness. Mindset. Lifestyle.</h1>
            <p className="mt-4 text-gray-700 max-w-2xl">I help busy people build strong, confident bodies through smart training, sustainable nutrition, and daily habits that stick.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#programs" className="px-5 py-3 rounded-full bg-black text-white font-semibold">Explore Programs</a>
              <a href="/contact" className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold border border-black/10">Work with me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"/>
    </section>
  )
}
