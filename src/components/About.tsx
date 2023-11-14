import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="container px-5 md:px-20 pt-10 font-secondary">
      <div className="flex flex-col md:flex-row items-center justify-between text-white">
        <div className="w-full md:flex-1 mb-5 md:mb-0">
          <img
            className="w-full h-auto md:w-2/3 md:h-2/3 object-cover rounded-full mx-auto"
            src="HHheidi1.jpg"
            alt="Heidi Kääriäinen"
          />
        </div>

        <div className="w-full md:flex-1 text-left">
          <p className="text-xl">
            Studio Horsma on pikkuruinen tilaussitomo, joka toimii
            pääkaupunkiseudulla. Sidomme kukkia tilauksesta asiakkaiden
            toiveiden mukaan. Horsmassa hääräilee kukkien parissa
            ammattitaidolla puutarhuri/floristi Heidi.
          </p>
          <p className="text-xl pt-4">
            Meille tärkeintä on hyvä asiakaskokemus. Olen myös mehiläistarhaaja,
            joten kukkasten mukaan on mahdollista tilata hunajaa, tai vaikkapa
            mehiläisvahakynttilöitä.
          </p>
          <p className="text-xl pt-4">
            Tarvitsetko apukäsiä? Minut voi tilata töihin kukkakauppoihin avuksi
            sesonkeihin tai tuurailemaan freelancerinä, mitä mieleen juolahtaa.
            Ota yhteyttä niin jutellaan lisää! Kokoan pikku hiljaa{" "}
            <Link
              href="https://instagram.com/hunajaholisti"
              target="_blank"
              className="hover:underline text-blue-400"
            >
              instagram
            </Link>{" "}
            tililleni töitäni. Voit käydä siellä kurkkimassa mitä puuhailen.
          </p>
        </div>
      </div>
    </div>
  );
}
