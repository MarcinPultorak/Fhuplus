import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

const Footer: FC = () => {
  const isMobile = useIsMobile(640);
  return (
    <footer className="bg-neutral-800 py-5">
      <div className="max-w-screen-2xl w-full mx-auto flex items-center px-5 text-white ">
        <div className="flex-1">
          {isMobile ? (
            <Image src={"/images/logo-header.png"} alt="logo" width={40} height={40} />
          ) : (
            <Image src={"/images/logo-header.png"} alt="logo" width={80} height={60} />
          )}
        </div>
        <div className="hidden md:block">
          <p className="m-auto text-xs sm:text-sm lg:text-base">Copyright © 2023 FHU PLUS</p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 justify-end text-xs sm:text-sm lg:text-base items-end">
          <div className="md:hidden">
            <p className="m-auto text-xs sm:text-sm lg:text-base">Copyright © 2023 FHU PLUS</p>
          </div>
          <Link href={"https://www.letbefound.pl/"} target="_blank" className="hover:text-red-500 ">
            Wykonawca: letbefound.pl
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
