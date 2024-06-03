import Image from "next/image";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ButtonPrimary from "./UI/ButtonPrimary";

export default function Footer() {
  return (
    <footer className="md:px-[150px] px-[30px]">
      <div className="flex flex-col md:flex-row items-start justify-between border-b-slate-200 border-b pb-12 mb-4">
        <div className="flex flex-col gap-4 text-sm md:mb-0 mb-4">
          <Image
            src={"/Logo.png"}
            width={106}
            height={35}
            alt="logo"
            className="cursor-pointer"
          />
          <div className="flex items-center gap-2">
            <MailIcon />
            <p>Help@Frybix.com</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <p>+1234 456 678 89S</p>
          </div>
        </div>
        <div className="text-sm md:mb-0 mb-4">
          <h4 className="font-semibold text-3xl mb-3">Links</h4>
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>About us</li>
            <li>Bookings</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="text-sm md:mb-0 mb-4">
          <h4 className="font-semibold text-3xl mb-3">Legal</h4>
          <ul className="flex flex-col gap-4">
            <li>Terms Of Use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="text-sm md:mb-0 mb-4">
          <h4 className="font-semibold text-3xl mb-3">Product</h4>
          <ul className="flex flex-col gap-4">
            <li>Take tour</li>
            <li>Live chats</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-3xl mb-3">Newsletter</h4>
          <p className="mb-4">Stay up to Date</p>
          <div className="bg-white p-3 rounded">
            <input
              type="text"
              placeholder="Your email"
              className="outline-none border-none pr-4"
            />
            <ButtonPrimary label="Subscribe" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center p-12">Made with ❤️ by Jatin</h5>
      </div>
    </footer>
  );
}
