/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

type SidebarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: SidebarProps) => {
  return (
    <nav className="bg-gray-900 text-2xl text-white p-7 font-primary lg:backdrop-blur bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <img
          className="w-10 object-cover rounded-full"
          src="studio-horsma.jpg"
          alt="Studio Horsma logo"
        />
        <button
          onClick={toggleSidebar}
          className="lg:hidden px-3 py-2 rounded text-gray-200 hover:text-white hover:bg-gray-700"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Meistä
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Verkkokauppa
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
