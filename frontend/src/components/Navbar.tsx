import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Pefrika
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <Link href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </Link>
          <Link href="#services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
