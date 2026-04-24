import { ArrowRight, BadgePercent } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="max-lg:bg-[url(/hero.jpg)] bg-no-repeat bg-cover bg-center md:bg-[#cebdb5] h-screen md:h-136 overflow-hidden flex items-center justify-between md:px-6 w-full">
        <div className="w-full lg:backdrop-blur-none backdrop-blur-sm h-screen flex items-start justify-center text-left flex-col lg:w-1/2 px-6 lg:pl-10 text-white lg:text-black">
          {/* sale  */}
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 md:text-xl">
            <div className="flex items-center justify-center gap-x-2">
              <BadgePercent fill="#7f5539" className="text-white w-8 h-8" />
              <span className="font-semibold">50% OFF </span> Summer Super Sale
            </div>
          </div>

          {/* title */}
          <h1 className="md:text-3xl xl:text-5xl text-2xl font-medium xl:leading-relaxed leading-normal text-nowrap">
            Step into Style : Your
            <br />
            Ultimate Fashion Destination
          </h1>

          {/* description */}
          <p className="text-lg md:text-xl font-noraml leading-normal text-black/60">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab  <br /> vel nihil quaerat illum qui? Natus.
          </p>

          {/* button */}
          <button className="bg-[#583101] flex items-center justify-center text-white px-6 py-3 my-4 gap-x-4 active:scale-95  active:rounded-md">
            Show Now <ArrowRight />
          </button>
        </div>

        <img
          src="/hero.jpg"
          alt="hero-img"
          className="hidden lg:block md:w-1/2 h-screen object-cover xl:-mt-5 xl:scale-85 rotate-y-180"
        />
      </section>
    </>
  );
};

export default Hero;
