import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="font-header">Studio Horsma</h1>
        <div className="bg-cover bg-center w-full" style={{ backgroundImage: "url('/horsma.jpg')" }}>
          <div className="flex flex-col items-center justify-center p-24 text-center text-white">

            <p className="font-primary text-3xl mx-20 mb-4">Olemme verkkokauppa vailla vertaa!</p>
            <p className="font-primary text-3xl mx-20 mb-10">Liirum laarum pimpelipomps.</p>
            <a
              href="#"
              className="text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-5 px-10 rounded-full transition duration-300 ease-in-out"
            >
              VERKKOKAUPPAAN
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
