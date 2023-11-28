import { FC } from "react";
import Image from "next/image";

const Contact: FC = () => {
  return (
    <section className="w-full relative z-20">
      <Image src={"/images/contact-bg.png"} alt="contact-background" fill className="object-cover absolute -z-10" />
      <div className="max-w-screen-2xl w-full mx-auto px-5 py-10 sm:pt-10 lg:pt-20 sm:pb-32 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">
          <span className="text-red-500">G</span>dzie nas znaleźć
        </h2>
        <div className="w-full h-full mt-10 lg:mt-20 flex flex-col sm:flex-row justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2086.9998715969277!2d14.459629325499499!3d53.43058802771469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0efb664de297%3A0xb07c9f1742d277c!2sFHU%20PLUS%20Krzysztof%20Koz%C5%82owski%20serwis%20samochodowy!5e0!3m2!1spl!2spl!4v1701189095664!5m2!1spl!2spl"
            width="fill"
            height="400"
            loading="lazy"
            className="z-20 border border-neutral-800 w-full max-w-[720px]"
          ></iframe>

          <div className="bg-gray-800 max-w-xl flex flex-col text-white space-y-8 sm:space-y-0 sm:justify-between p-8 sm:pr-8 sm:py-8 sm:pl-44 sm:-ml-32 sm:translate-y-12 text-xs sm:text-sm lg:text-base">
            <div className="flex flex-col">
              <p className="text-red-500">FHU PLUS</p>
              <p>
                ul. Welecka 23D
                <br /> 72-006 Mierzyn
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Image src={"/images/phone2-icon.svg"} alt="phone-icon" width={16} height={16} />
                <p>602 773 870</p>
              </div>
              <div className="flex space-x-2">
                <Image src={"/images/mail-icon.svg"} alt="mail-icon" width={16} height={16} />
                <p>pluskk26@gmail.com</p>
              </div>
            </div>
            <div>
              <p>
                Zachęcamy do odwiedzenia naszego warsztatu! Oferujemy profesjonalną obsługę, doświadczony zespół i przyjazne podejście. Zawsze gotowi, by zadbać
                o Twój samochód!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
