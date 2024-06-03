import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="md:px-[150px] px-[30px] md:pb-[150px]">
      <div className="relative w-full md:h-[508px] h-[300px]">
        <Image
          src={"/get-started-image.png"}
          fill
          alt="get started"
          style={{ objectFit: "contain" }}
        />
        <Image
          src={"/highlighter.png"}
          width={600}
          height={300}
          alt=""
          className="absolute top-0 -translate-y-1/3 -z-10 hidden md:block"
        />
      </div>
    </section>
  );
}
