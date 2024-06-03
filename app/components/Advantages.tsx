import Image from "next/image";
import BellIcon from "../icons/BellIcon";
import RoundStarIcon from "../icons/RoundStarIcon";

export default function Advantages() {
  return (
    <section className="md:mt-0 mt-10">
      <div className="flex items-center md:mb-0 mb-8">
        <div className="flex-1 md:pl-[150px] pl-[30px]">
          <h3 className="text-[#FF5555] text-lg mb-2 uppercase font-semibold">
            Advantages
          </h3>
          <h1 className="font-extrabold md:text-5xl text-4xl mb-8">
            Why Choose Uifry?
          </h1>
          <div className="flex gap-4 items-center mb-6">
            <BellIcon />
            <h2 className="font-bold md:text-2xl text-xl">
              Clever Notifications
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo
            quod neque culpa iusto facilis magni incidunt reiciendis tenetur
            ratione expedita alias praesentium dolor temporibus, corrupti
            distinctio nobis debitis aut quisquam numquam! Architecto, natus
            quasi? Eos ex quas molestias quaerat delectus, inventore esse soluta
            maiores fugit sed! Quis, similique fugit.
          </p>
        </div>
        <div className="flex-1 relative md:block hidden">
          <Image
            src={"/advantages-image1.png"}
            width={720}
            height={720}
            alt="advantages"
          />
          <Image
            src={"/highlighter.png"}
            width={600}
            height={300}
            alt=""
            className="absolute top-1/3 -z-10"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 relative hidden md:block">
          <Image
            src={"/advantages-image2.png"}
            width={720}
            height={720}
            alt="advantages"
          />
          <Image
            src={"/highlighter.png"}
            width={600}
            height={300}
            alt=""
            className="absolute top-1/3 left-16 -z-10"
          />
        </div>
        <div className="flex-1 md:pr-[150px] pl-[30px]">
          <div className="flex gap-4 items-center mb-6">
            <RoundStarIcon />
            <h2 className="font-bold md:text-2xl text-xl">
              Fully Customizable
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo
            quod neque culpa iusto facilis magni incidunt reiciendis tenetur
            ratione expedita alias praesentium dolor temporibus, corrupti
            distinctio nobis debitis aut quisquam numquam! Architecto, natus
            quasi? Eos ex quas molestias quaerat delectus, inventore esse soluta
            maiores fugit sed! Quis, similique fugit.
          </p>
        </div>
      </div>
    </section>
  );
}
