/* eslint-disable @next/next/no-img-element */

"use client";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import About from "@/components/About";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-between text-white my-20">
          <div className="w-20 md:flex-1 mb-5 md:mb-0 mr-10">
            <img
              className="w-full object-cover rounded-full"
              src="studio-horsma.jpg"
              alt="Studio Horsma logo"
            />
          </div>

          <div className="mx-auto">
            <h1 className="font-header">Studio Horsma</h1>
          </div>
        </div>

        <div
          className="bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/horsma.jpg')" }}
        >
          <div className="flex flex-col items-center justify-center p-24 text-center text-white">
            <p className="font-primary text-3xl mx-20 mb-4">
              Olemme verkkokauppa vailla vertaa!
            </p>
            <p className="font-primary text-3xl mx-20 mb-10">
              Liirum laarum pimpelipomps.
            </p>
            <a
              href="#"
              className="text-lg bg-slate-600 hover:bg-slate-700 text-white font-bold py-5 px-10 rounded-full transition duration-300 ease-in-out"
            >
              TÄSTÄ VERKKOKAUPPAAN
            </a>
          </div>
        </div>
        <div className="my-10">
          {" "}
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
