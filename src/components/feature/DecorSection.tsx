import { FC } from "react";

const DecorSection: FC = () => {
  return (
    <div
      className="w-full h-96 md:h-[650px] relative"
      style={{
        backgroundImage: "url(/images/about-us-bg.png)",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default DecorSection;
