import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <section className="w-full">
      <div
        className="w-full h-[650px] relative"
        style={{
          backgroundImage: "url(/images/about-us-bg.png)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full bg-neutral-800 flex flex-col py-20 relative">
        <h2 className="absolute -top-8 -left-3 uppercase text-[256px] font-bold text-gray-300 opacity-10 z-10 leading-none select-none">
          FHU Plus
        </h2>
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center px-5 z-20">
          <h2 className="text-white text-4xl font-bold tracking-widest">
            <span className="text-red">K</span>ilka słów o nas
          </h2>
          <p className="text-white max-w-7xl mt-20 text-justify">
            Nasza firma, z korzeniami sięgającymi 1996 roku, od 2001 roku
            specjalizuje się w obszarze serwisu samochodów osobowych oraz
            sprzedaży nowych części do pojazdów marek FIAT, LANCIA i ALFA ROMEO.
            <br />
            <br />Z ponad kilkunastoletnim doświadczeniem w dziedzinie
            samochodów włoskich, z dumą prezentujemy się jako profesjonalny
            partner oferujący szeroką gamę wysokiej jakości części zamiennych.
            Nasza oferta obejmuje zarówno produkty renomowanych producentów, jak
            i oryginalne części dostępne dla większości modeli marek ALFA ROMEO,
            LANCIA oraz FIAT.
            <br />
            <br /> Dążymy do tego, aby być dla Ciebie nie tylko dostawcą, ale
            również kompetentnym i wiarygodnym partnerem w obszarze
            motoryzacyjnym. Nasza firma zdobyła zaufanie klientów poprzez lata
            solidnej pracy i pasji do samochodów włoskich.
            <br />
            <br /> Zapraszamy do skorzystania z naszych usług, opartych na
            wiedzy, doświadczeniu i zobowiązaniu do doskonałości. Celem naszej
            firmy jest nie tylko zaspokojenie Twoich potrzeb związanych z
            samochodami, ale również budowanie trwałych relacji biznesowych
            opartych na wzajemnym zaufaniu.
            <br />
            <br /> Wierzymy, że nasza oferta spełni Twoje oczekiwania, a nasza
            firma stanie się Twoim zaufanym partnerem w dziedzinie motoryzacji.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
