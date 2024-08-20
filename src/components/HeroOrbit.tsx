import { PropsWithChildren } from "react";

interface HeroOrbitProps {
  size: number;
  rotation: number;
}

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
