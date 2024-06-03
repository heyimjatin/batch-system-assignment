import Image from "next/image";
import StarIcon from "../icons/StarIcon";
import HexagonIcon from "../icons/HexagonIcon";
import CubeIcon from "../icons/CubeIcon";

export default function Features() {
  return (
    <section className="flex items-center overflow-hidden">
      <div className="relative flex-1 hidden md:block">
        <Image
          src={"/features-image.png"}
          width={720}
          height={720}
          alt="features"
        />
        <Image
          src={"/highlighter.png"}
          width={600}
          height={300}
          alt=""
          className="absolute top-16 -z-10"
        />
      </div>
      <div className="flex-1 relative md:pr-[150px] pl-[30px]">
        <h3 className="text-[#FF5555] text-lg mb-2 uppercase font-semibold">
          Features
        </h3>
        <h1 className="font-extrabold md:text-5xl text-4xl mb-8">
          Uifry Premium
        </h1>
        <dl>
          <dt className="mb-2 flex gap-2 font-bold text-lg">
            <StarIcon />
            Budgeting Intervals
          </dt>
          <dd className="text-base md:text-xl text-gray-500 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            nisi facere velit! Laborum molestias similique quos quasi veniam
            neque porro?
          </dd>
          <dt className="mb-2 flex gap-2 font-bold text-lg">
            <HexagonIcon />
            Budgeting Intervals
          </dt>
          <dd className="text-base md:text-xl text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            earum?
          </dd>
          <dt className="mb-2 flex gap-2 font-bold text-lg">
            <CubeIcon />
            Budgeting Intervals
          </dt>
          <dd className="text-base md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            earum?
          </dd>
        </dl>
        <Image
          src={"/highlighter.png"}
          width={400}
          height={300}
          alt=""
          className="absolute -z-10 top-0 right-0 translate-x-1/2"
        />
      </div>
    </section>
  );
}
