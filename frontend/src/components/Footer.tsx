export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-bold text-white">Pefrika Digital Solutions</span>
          <p className="text-sm mt-1 text-slate-500">
            &copy; {new Date().getFullYear()} Pefrika Digital Solutions Limited. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
