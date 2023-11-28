import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const ids = ["Home", "Oferta", "O Nas", "Kontakt"];
  return (
    <header className="absolute text-white h-24 w-full z-20 max-w-screen-2xl self-center p-5 flex">
      {isOpened && <HeaderMobile closeMenu={() => setIsOpened(false)} />}

      <Image
        src={"/images/logo-header.png"}
        alt="logo"
        width={80}
        height={60}
      />

      <div className="hidden lg:flex w-full justify-between ml-52 text-lg">
        <ul className="flex gap-x-12 items-center uppercase ">
          {ids.map((item) => (
            <li key={item} className="hover:text-red">
              <Link href={"#"}>{item}</Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <Image
            src={"/images/phone-icon.svg"}
            alt="phone icon"
            width={18}
            height={18}
          />
          <span className="flex items-center">602 773 870</span>
        </div>
      </div>
      <button
        onClick={() => setIsOpened(!isOpened)}
        title="hamburger-menu"
        className="lg:hidden ml-auto"
      >
        <Bars3Icon className="w-10 h-10" />
      </button>
    </header>
  );
};

export default Header;
