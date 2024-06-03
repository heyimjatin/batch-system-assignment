import Image from "next/image";
import ButtonPrimary from "./UI/ButtonPrimary";

export default function Hero() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-8 flex-1 px-[30px] md:px-[150px] relative">
        <h1 className="font-extrabold text-4xl md:text-6xl">
          Make The Best Financial Decisions
        </h1>
        <p className="text-base md:text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero
          veritatis, facere asperiores eveniet architecto impedit ea voluptatem
          praesentium. Ea.
        </p>
        <div className="flex gap-4">
          <ButtonPrimary label="Get started" />
          <button className="flex gap-4 items-center px-8 rounded hover:bg-slate-200 transition-colors">
            <Image
              src={"/play-icon.png"}
              width={29}
              height={29}
              alt="play-icon"
            />
            Watch video
          </button>
        </div>
        <div>
          <Image
            src={"/hero-sec-image.png"}
            width={550}
            height={350}
            alt="hero-secondary"
          />
        </div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <Image src={"/highlighter.png"} width={500} height={300} alt="" />
        </div>
      </div>
      <div className="md:flex flex-1 justify-end hidden">
        <Image
          src={"/hero-primary-image.png"}
          width={800}
          height={700}
          alt="hero"
        />
      </div>
    </section>
  );
}
