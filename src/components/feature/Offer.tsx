import { FC } from "react";
import Image from "next/image";

const Offer: FC = () => {
  return (
    <section>
      <div className="w-full py-12 bg-neutral-800 flex justify-center">
        <h2 className="uppercase text-white text-8xl font-bold">Oferta</h2>
      </div>
      <div className="relative w-full z-20">
        <Image
          src={"/images/offer-bg.png"}
          alt="offer-background"
          fill
          className="object-cover absolute -z-10"
        />
        <div className="flex flex-col max-w-screen-2xl mx-auto py-20 px-5 items-center">
          <div className="w-full flex flex-col max-w-3xl items-center">
            <h2 className="text-4xl font-bold tracking-widest">
              <span className="text-red">P</span>odstawowy zakres usług
            </h2>
            <p className="mt-20">
              Oferujemy pełen zakres usług, od precyzyjnej diagnostyki, przez
              ustawianie geometrii kół, aż po kompleksowe naprawy silników,
              układów zawieszenia i elektroniki samochodowej. Dzięki naszemu
              zaangażowaniu i zastosowaniu profesjonalnych metod, gwarantujemy,
              że Twój samochód jest w najlepszych rękach.
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-x-8 mt-20">
            <div
              className="flex flex-col items-center w-full min-h-[480px] bg-white py-8 px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src={"/images/diagnostic-icon.svg"}
                alt="diagnostic-icon"
                width={64}
                height={64}
              />
              <h2 className="font-bold text-2xl mt-3">
                <span className="text-red">U</span>sługi
              </h2>
              <ul className="mt-8 list-disc text-justify">
                <li>ustawianie geometrii kół</li>
                <li>komputerowa diagnostyka</li>
                <li>przygotowanie samochodów do przeglądów technicznych</li>
                <li>wulkanizacja</li>
                <li>przeglądy okresowe</li>
                <li>serwis ogumienia</li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center w-full min-h-[480px] bg-white py-8 px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src={"/images/tool-icon.svg"}
                alt="tool-icon"
                width={64}
                height={64}
              />
              <h2 className="font-bold text-2xl mt-3">
                <span className="text-red">N</span>aprawy
              </h2>
              <ul className="mt-8 list-disc text-justify">
                <li>silników</li>
                <li>układu zawieszenia</li>
                <li>układu kierowniczego i sprawdzenie jego stanu</li>
                <li>układu hamulcowego</li>
                <li>elektryki oraz elektroniki samochodowej</li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center w-full min-h-[480px] bg-white py-8 px-20"
              style={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src={"/images/gears-icon.svg"}
                alt="gears-icon"
                width={64}
                height={64}
              />
              <h2 className="font-bold text-2xl mt-3">
                <span className="text-red">W</span>ymiany
              </h2>
              <ul className="mt-8 list-disc text-justify">
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
