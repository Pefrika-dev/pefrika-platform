import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      <Footer />
    </div>
  );
}
