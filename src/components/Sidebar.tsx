import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div
      className={`absolute top-0 left-0 w-64 bg-gray-800 h-full z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button onClick={toggleSidebar} className="px-4 py-2 text-white">
        Sulje
      </button>
      <div className="flex flex-col text-white p-4">
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
