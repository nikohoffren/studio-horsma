const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-2xl text-white p-7 font-primary lg:backdrop-blur bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-semibold">Studio Horsma</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">Meistä</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Verkkokauppa</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Yhteystiedot</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
