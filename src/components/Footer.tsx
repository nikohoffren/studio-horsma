const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Studio Horsma</p>
          <p>© {new Date().getFullYear()} Niko Hoffrén</p>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6">
          <p>Osoite: Kukkakuja 69, 00100 HORSMA</p>
          <p>Puhelin: +358 40 123 4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
