import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {
  closeMenu: () => void;
};

const HeaderMobile: FC<Props> = ({ closeMenu }) => {
  const ids = ["Home", "Oferta", "O Nas", "Kontakt"];
  return (
    <div className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50 bg-neutral-800">
      <div className="absolute top-7 right-0  px-5">
        <button onClick={() => closeMenu()} title="close-mobile-menu">
          <XMarkIcon className="w-10 h-10 text-white" />
        </button>
      </div>
      <div className="mx-auto">
        <Link href={"/"} onClick={() => closeMenu()}>
          <div className="flex justify-center">
            <Image
              src={"/images/logo-header.png"}
              alt="logo-fhuplus"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <div className="flex justify-center"></div>
        <ul className="flex flex-col space-y-10 items-center font-sans text-lg uppercase mt-12 text-white">
          {ids.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red hover:underline hover:underline-offset-4"
            >
              <Link href={"#"} onClick={() => closeMenu()}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
