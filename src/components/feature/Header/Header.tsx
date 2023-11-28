import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useScroll } from "framer-motion";
import cx from "classnames";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const ids = ["Home", "Oferta", "O nas", "Kontakt"];

  const { scrollY } = useScroll();
  const activeId = useScrollSpy(ids, 81);

  useEffect(() => {
    const updateHeader = () => {
      scrollY.get() > 0 ? setIsFollowing(true) : setIsFollowing(false);
    };

    const unsubscribeY = scrollY.on("change", updateHeader);

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <header className={cx("fixed text-white w-full z-50 px-5 md:px-10 py-5", isFollowing ? "bg-neutral-900 h-20" : "h-24")}>
      <div className="flex max-w-screen-2xl mx-auto">
        {isOpened && <HeaderMobile closeMenu={() => setIsOpened(false)} />}

        <Link href="#">
          <Image src={"/images/logo-header.png"} alt="logo" width={isFollowing ? 60 : 80} height={60} />
        </Link>

        <div className={cx("hidden lg:flex w-full justify-between ml-52", isFollowing ? "text-base" : "text-lg")}>
          <ul className="flex gap-x-12 items-center uppercase ">
            {ids.map((item) => (
              <li key={item} className={cx("hover:text-red-500", item == activeId && "underline underline-offset-8 text-red-500")}>
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <Image src={"/images/phone-icon.svg"} alt="phone icon" width={18} height={18} />
            <span className="flex items-center">602 773 870</span>
          </div>
        </div>
        <button onClick={() => setIsOpened(!isOpened)} title="hamburger-menu" className="lg:hidden ml-auto">
          <Bars3Icon className="w-10 h-10" />
        </button>
      </div>
    </header>
  );
};

export default Header;
