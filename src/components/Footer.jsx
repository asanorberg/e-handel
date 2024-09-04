import React from "react";

const Footer = () => {
  return (
    <section class="bg-black text-center lg:text-left">
      <div class="container px-4 py-8 md:py-12 mx-auto ">
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-1/3 mb-10 lg:mb-0 px-4">
            <p class="leading-6 mb-6 text-white opacity-70">
              Vi är din butik online för exklusiva kläder, smycken och skor som
              kommer att lyfta din stil till nästa nivå. Vårt sortiment består
              av noggrant utvalda plagg och accessoarer, var och en med en unik
              design och karaktär. Oavsett om du är en modeentusiast eller bara
              letar efter något nytt, så är vårt mål att erbjuda dig produkter
              av högsta kvalitet. Vi tror på att skapa en garderob som
              reflekterar din personlighet och förhöjer din vardag. Utforska
              vårt sortiment och låt dig inspireras av den fantastiska världen
              av mode och accessoarer som vi har att erbjuda!
            </p>
          </div>
          <div class="w-full lg:w-1/3 lg:pl-24 px-4 mb-10 lg:mb-0">
            <h5 class="text-lg font-bold mb-5 text-white">Läs mer</h5>
            <ul class="opacity-70">
              <li class="mb-2">
                <a href="#" class="inline-block text-white hover:text-gray-200">
                  Köpvillkor
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="inline-block text-white hover:text-gray-200">
                  Kontakt
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="inline-block text-white hover:text-gray-200">
                  Om oss
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="inline-block text-white hover:text-gray-200">
                  Omdömen från våra kunder
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="inline-block text-white hover:text-gray-200">
                  Kundtjänst
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/3 px-4">
            <h5 class="text-lg font-bold mb-5 text-white">
              Prenumerera på vårt nyhetsbrev och få 15% rabatt
            </h5>
            <form action="">
              <div class="flex items-center pl-3 pr-2 py-2 bg-white rounded-sm">
                <input
                  type="text"
                  class="w-full px-2 inline-block bg-transparent border-none text-base outline-none text-black"
                  placeholder="Ange din e-post"
                />
                <button class="ml-auto inline-block px-3 py-2 bg-black hover:opacity-90 text-white font-bold transition duration-200 button-rounding">
                  Prenumerera
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
