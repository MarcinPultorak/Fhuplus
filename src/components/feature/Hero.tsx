import { FC } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Hero: FC = () => {
  return (
    <section className="h-screen w-full relative z-10">
      <Image
        src={"/images/hero.png"}
        alt="hero-image"
        fill
        className="object-cover absolute -z-10"
      />
      <div className="max-w-screen-2xl h-full mx-auto flex items-center px-10">
        <div className="w-1/2 flex flex-col ">
          <h2 className="uppercase text-red text-xl">FHU Plus</h2>
          <h1 className="uppercase text-white text-7xl font-bold">
            Serwis samochodowy mierzyn
          </h1>
          <h3 className="text-white text-xl mt-5">
            Profesjonalna obsługa na wysokim poziomie
          </h3>
          <div className="w-56">
            <Button className="mt-5">Sprawdź ofertę</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
