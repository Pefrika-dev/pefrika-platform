import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-8">
        <span>?? Welcome to Pefrika Platform</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight max-w-4xl leading-tight">
        Next-Generation Digital Solutions for Growing Businesses
      </h1>

      <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl">
        Empowering enterprise innovation with high-performance digital services, custom software architectures, and scalable technology infrastructure.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/register"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl shadow-blue-600/25 transition-all text-center"
        >
          Get Started Free
        </Link>
        <Link
          href="#features"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-8 py-3.5 rounded-xl font-semibold transition-all text-center"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
