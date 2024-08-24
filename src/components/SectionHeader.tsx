import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  description,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="md:text-lg lg:text-xl text-center text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
