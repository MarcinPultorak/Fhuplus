import { FC } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const Offer: FC = () => {
  const isMobile = useIsMobile(640);
  return (
    <section>
      <div className="w-full py-12 bg-neutral-800 flex justify-center">
        <h2 className="uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Oferta</h2>
      </div>
      <div className="relative w-full z-20">
        <Image src={"/images/offer-bg.png"} alt="offer-background" fill className="object-cover absolute -z-10" />
        <div className="flex flex-col max-w-screen-2xl mx-auto py-10 lg:py-20 px-5 items-center">
          <div className="w-full flex flex-col max-w-3xl items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">
              <span className="text-red-500">P</span>odstawowy zakres usług
            </h2>
            <p className="mt-10 lg:mt-20 text-xs sm:text-sm lg:text-base text-justify">
              Oferujemy pełen zakres usług, od precyzyjnej diagnostyki, przez ustawianie geometrii kół, aż po kompleksowe naprawy silników, układów zawieszenia
              i elektroniki samochodowej. Dzięki naszemu zaangażowaniu i zastosowaniu profesjonalnych metod, gwarantujemy, że Twój samochód jest w najlepszych
              rękach.
            </p>
          </div>
          <div className="w-full grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-8 mt-10 lg:mt-20">
            <div
              className="flex flex-col items-center w-full lg:min-h-[480px] bg-white py-8 px-10 xl:px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              {isMobile ? (
                <Image src={"/images/diagnostic-icon.svg"} alt="diagnostic-icon" width={36} height={36} />
              ) : (
                <Image src={"/images/diagnostic-icon.svg"} alt="diagnostic-icon" width={64} height={64} />
              )}

              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mt-3">
                <span className="text-red-500">U</span>sługi
              </h2>
              <ul className="mt-8 list-disc text-xs sm:text-sm lg:text-base">
                <li>ustawianie geometrii kół</li>
                <li>komputerowa diagnostyka</li>
                <li>przygotowanie samochodów do przeglądów technicznych</li>
                <li>wulkanizacja</li>
                <li>przeglądy okresowe</li>
                <li>serwis ogumienia</li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center w-full lg:min-h-[480px] bg-white py-8 px-10 xl:px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              {isMobile ? (
                <Image src={"/images/tool-icon.svg"} alt="tool-icon" width={36} height={36} />
              ) : (
                <Image src={"/images/tool-icon.svg"} alt="tool-icon" width={64} height={64} />
              )}
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mt-3">
                <span className="text-red-500">N</span>aprawy
              </h2>
              <ul className="mt-8 list-disc text-xs sm:text-sm lg:text-base">
                <li>silników</li>
                <li>układu zawieszenia</li>
                <li>układu kierowniczego i sprawdzenie jego stanu</li>
                <li>układu hamulcowego</li>
                <li>elektryki oraz elektroniki samochodowej</li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center w-full lg:min-h-[480px] bg-white py-8 px-10 xl:px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              {isMobile ? (
                <Image src={"/images/gears-icon.svg"} alt="gears-icon" width={36} height={36} />
              ) : (
                <Image src={"/images/gears-icon.svg"} alt="gears-icon" width={64} height={64} />
              )}
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mt-3">
                <span className="text-red-500">W</span>ymiany
              </h2>
              <ul className="mt-8 list-disc text-xs sm:text-sm lg:text-base ">
                <li>sprzęgła</li>
                <li>rozrządów (przy zastosowaniu profesjonalnych blokad)</li>
                <li>pomp wody i termostatów</li>
                <li>łożysk</li>
                <li>przegubów</li>
                <li>olejów</li>
                <li>płynów eksploatacyjnych</li>
                <li>filtrów</li>
                <li>świec (żarowych i zapłonowych)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;
