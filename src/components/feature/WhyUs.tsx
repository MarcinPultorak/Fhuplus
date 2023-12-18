import { FC } from "react";
import Image from "next/image";

const WhyUs: FC = () => {
  return (
    <section className="pb-20 relative">
      <div className="" style={{ marginLeft: "max(0px, (100% - 1536px)/2)" }}>
        <div className="flex">
          <div className="hidden sm:block -mr-28">
            <Image src={"/images/tire.png"} alt="tire" width={500} height={500} />
          </div>
          <div
            className="relative w-full z-10 flex flex-col justify-center"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image src={"/images/whyus-bg.png"} alt="whyus-bg" fill className="object-cover absolute -z-10" />
            <div className="relative max-w-[calc(1536px-308px)] w-full h-full flex flex-col justify-center items-center px-5 py-8 sm:py-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">
                <span className="text-red-500">D</span>laczego my?
              </h2>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base max-w-xl mt-5 sm:mt-10 lg:mt-20 text-justify">
                Jesteśmy pasjonatami motoryzacji, gotowymi zaoferować kompleksowe usługi naprawcze oraz sprzedaży części do samochodów włoskich. Nasza firma
                wyróżnia się profesjonalizmem, doświadczeniem i troską o każdy detal, co sprawia, że jesteśmy idealnym wyborem dla Twojego samochodu.
              </p>
              <div
                className="flex flex-col text-white bg-red-500 items-center px-2 py-4 text-sm sm:text-base absolute bottom-0 right-0 sm:right-10 translate-y-full sm:translate-y-1/2"
                style={{
                  boxShadow: "0px 4px 20px 0px rgba(239, 68, 68, 0.75)",
                }}
              >
                <span>Ponad</span>
                <span className="font-bold">25 LAT</span>
                <span>doświadczenia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-2xl mx-auto w-full grid lg:grid-cols-3 lg:gap-10 xl:gap-20 mt-24 px-5 z-20">
        <div className="flex">
          <Image src={"/images/team-icon.svg"} alt="team-icon" width={40} height={40} className="self-center" />

          <div className="flex flex-col items-center p-4 sm:p-8">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase">
              <span className="text-red-500">D</span>oświadczony Zespół
            </h3>
            <p className="text-justify mt-4 text-xs sm:text-sm md:text-sm lg:text-base">
              Nasz zespół składa się z doświadczonych specjalistów, którzy nie tylko posiadają głęboką wiedzę z zakresu napraw samochodów, ale również angażują
              się w każde zadanie z pełnym zaangażowaniem.
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={"/images/gears-icon.svg"} alt="team-icon" width={40} height={40} />
          <div className="flex flex-col items-center p-4 sm:p-8">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase">
              <span className="text-red-500">B</span>ogaty Asortyment Części
            </h3>
            <p className="text-justify mt-4 text-xs sm:text-sm md:text-sm lg:text-base">
              Dysponujemy szerokim asortymentem części zamiennych od renomowanych producentów, co pozwala nam zapewnić naszym klientom dostęp do wysokiej
              jakości materiałów przy jednoczesnym zachowaniu konkurencyjnych cen.
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={"/images/service-icon.svg"} alt="team-icon" width={40} height={40} />
          <div className="flex flex-col items-center p-4 sm:p-8">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase">
              <span className="text-red-500">I</span>ndywidualne Podejście
            </h3>
            <p className="text-justify mt-4 text-xs sm:text-sm md:text-sm lg:text-base">
              Jesteśmy przekonani, że każdy samochód i jego właściciel są wyjątkowi. Dlatego oferujemy indywidualne podejście do każdego klienta, starając się
              zrozumieć unikalne potrzeby i oczekiwania, by zapewnić kompleksową satysfakcję z naszych usług.
            </p>
          </div>
        </div>
      </div>
      <h2 className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-9 right-0 uppercase text-7xl sm:text-9xl lg:text-[256px] font-bold text-neutral-800 opacity-10 z-10 leading-none select-none">
        FHU Plus
      </h2>
    </section>
  );
};

export default WhyUs;
