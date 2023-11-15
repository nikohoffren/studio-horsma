import Link from "next/link";

const Footer = () => {
  return (
    <footer className="backdrop-blur w-full bg-gray-950 bg-opacity-80 text-white py-4 px-8">
      <div className="container mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <p className="mb-1 font-bold">Studio Horsma</p>
            <p className="">Liitokuja 4 C, 03100 VIHTI</p>
            <p className="">hunajaholisti@gmail.com</p>
            <p className="">puh. 044 0550575</p>
            <p className="">Y-tunnus 3163385-5</p>
          </div>

          <div className="text-center">
            <a
              href="/myyntiehdot"
              className="text-white hover:text-blue-600 py-2"
            >
              Myynti- ja toimitusehdot
            </a>

            <br />
            <a
              href="/tietosuojaseloste"
              className="text-white hover:text-blue-600 py-2"
            >
              Tietosuojaseloste
            </a>
            <br />
            <a
              href=" https://hunaja.net/hunajatietoa/hunaja/"
              className="text-white hover:text-blue-600 py-2"
              target="_blank"
              rel="noreferrer"
            >
              Tietoa
            </a>
            <br />
            <a
              href="https://www.valio.fi/reseptiryhmat/hunajareseptit/"
              className="text-white hover:text-blue-600 py-2"
              target="_blank"
              rel="noreferrer"
            >
              Jotain muuta
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-m text-gray-200">
        Tekijänoikeus &#169; 2023{" "}
        <a
          className="hover:text-red-400"
          href="https://nikohoffren.com"
          target="_blank"
          rel="noreferrer"
        >
          Niko Hoffrén
        </a>
      </div>
    </footer>
  );
};

export default Footer;
