/* eslint-disable @next/next/no-img-element */
import { XIcon } from "@heroicons/react/outline";
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div
      className={`absolute top-0 left-0 w-64 bg-gray-800 h-full z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button onClick={toggleSidebar} className="px-4 py-2 text-white">
        <XIcon className="h-6 w-6" />
      </button>
      <div className="flex flex-col text-white p-4">
      <img
          className="w-10 object-cover rounded-full mt-6 mb-4"
          src="studio-horsma.jpg"
          alt="Studio Horsma logo"
        />
        <a href="#" className="hover:text-gray-300 py-2">
          Meistä
        </a>
        <a href="#" className="hover:text-gray-300 py-2">
          Verkkokauppa
        </a>
        <a href="#" className="hover:text-gray-300 py-2">
          Yhteystiedot
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
