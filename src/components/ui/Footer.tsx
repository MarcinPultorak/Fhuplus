import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-800 py-5">
      <div className="max-w-screen-2xl w-full mx-auto flex items-center px-5 text-white ">
        <div className="flex-1">
          <Image
            src={"/images/logo-header.png"}
            alt="logo"
            width={80}
            height={60}
          />
        </div>
        <div>
          <p className="m-auto">Copyright © 2023 FHU PLUS</p>
        </div>

        <div className="flex flex-1 justify-end">
          <Link
            href={"https://www.letbefound.pl/"}
            target="_blank"
            className="hover:text-red "
          >
            Wykonawca: www.letbefound.pl
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
