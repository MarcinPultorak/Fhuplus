import { FC } from "react";
import Image from "next/image";

const Contact: FC = () => {
  return (
    <section className="w-full relative z-20">
      <Image
        src={"/images/contact-bg.png"}
        alt="contact-background"
        fill
        className="object-cover absolute -z-10"
      />
      <div className="max-w-screen-2xl w-full mx-auto px-5 pt-20 pb-32 flex flex-col items-center">
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="text-red">G</span>dzie nas znaleźć
        </h2>
        <div className="w-full h-full mt-20 flex justify-center">
          <Image
            src={"/images/mapa.png"}
            alt="mapa"
            width={720}
            height={400}
            className=" border border-neutral-800 z-20"
          />
          <div className="bg-gray-800 max-w-xl flex flex-col text-white justify-between py-8 pr-8 pl-44 -ml-32 translate-y-12">
            <div className="flex flex-col">
              <p className="text-red">FHU PLUS</p>
              <p>
                ul. Welecka 23D
                <br /> 72-006 Mierzyn
              </p>
            </div>
            <div>
              <div className="flex space-x-2">
                <Image
                  src={"/images/phone2-icon.svg"}
                  alt="phone-icon"
                  width={16}
                  height={16}
                />
                <p>602 773 870</p>
              </div>
              <div className="flex space-x-2">
                <Image
                  src={"/images/mail-icon.svg"}
                  alt="mail-icon"
                  width={16}
                  height={16}
                />
                <p>pluskk26@gmail.com</p>
              </div>
            </div>
            <div>
              <p>
                Zachęcamy do odwiedzenia naszego warsztatu! Oferujemy
                profesjonalną obsługę, doświadczony zespół i przyjazne
                podejście. Zawsze gotowi, by zadbać o Twój samochód!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
