import { ArrowUpRightIcon, GrainImage } from "@/assets";
import Button from "@/components/Button";

export const CallToAction = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative py-8 px-10 text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss now I can help you achieve your goals.
              </p>
            </div>
            <div>
              <Button className="text-white bg-gray-900 gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contect Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
