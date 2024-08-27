import { StarIcon } from "@/assets";
import { tapeWords } from "@/data/data";

export const Tape = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 -translate-x-1/2 pr-4 animate-move-left [animation-duration:30s]">
            {[...tapeWords, ...tapeWords].map((word, index) => (
              <div key={index} className="inline-flex items-center gap-4">
                <span className="text-sm text-gray-900 font-extrabold uppercase">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
