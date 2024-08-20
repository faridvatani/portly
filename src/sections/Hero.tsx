import Image from "next/image";
import {
  EmojiComputerImage,
  ArrowDownIcon,
  GrainImage,
  StarIcon,
  SprakleIcon,
} from "@/assets";
import Button from "@/components/Button";
import HeroOrbit from "@/components/HeroOrbit";
import HeroRing from "@/components/HeroRing";

export const Hero = () => {
  return (
    <section className="relative py-32 md:py-48 lg:py-60 z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        <HeroRing size={620} />
        <HeroRing size={820} />
        <HeroRing size={1020} />
        <HeroRing size={1220} />
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={0}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SprakleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SprakleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SprakleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SprakleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
      </div>

      <div className="relative container">
        <div className="flex flex-col items-center">
          <Image
            src={EmojiComputerImage}
            alt="Emoji Computer"
            className="size-[100px]"
          />
          <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-gray-950 border border-gray-800 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <span className="text-sm font-medium">
              Available for new projects
            </span>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif text-center tracking-wide mt-8">
            Building Exceptional User Experiences
          </h1>
          <p className="md:text-lg text-center text-white/60 mt-4">
            I specialize in transforming designs into functional,
            high-performing performing web applications. Let&apos;s discuss your
            next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <Button variant="primary">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDownIcon className="size-4" />
          </Button>
          <Button variant="secondary">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
