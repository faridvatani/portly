import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: number;
  shouldSpin?: boolean;
  spinDuration?: number;
}

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration = 10,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit && "animate-spin")}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin && "animate-spin")}
            style={{
              animationDuration: `${spinDuration}s`,
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
      </div>
    </div>
  );
};

export default HeroOrbit;
