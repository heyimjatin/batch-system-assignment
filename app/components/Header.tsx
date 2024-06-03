import Image from "next/image";
import ButtonPrimary from "./UI/ButtonPrimary";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[30px] md:px-[150px] py-8 mb-8 md:mb-0">
      <div className="flex gap-10 items-center">
        <div className="cursor-pointer w-[106px] h-[35px] relative">
          <Image
            src={"/Logo.png"}
            fill
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </div>
        <nav className="md:block hidden">
          <ul className="flex gap-4 text-xl">
            <li className="font-extrabold text-[#FF5555]">Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </nav>
      </div>
      <div>
        <ButtonPrimary label="Download" />
      </div>
    </header>
  );
}
