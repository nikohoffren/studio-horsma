import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="font-header">Studio Horsma</h1>
      </main>
      <Footer />
    </>
  );
}
