import React, { FC } from "react";

interface HeroRingProps {
  size: number;
}

const HeroRing: FC<HeroRingProps> = ({ size }) => {
  return (
    <div
      className="hero-ring"
      style={{ width: `${size}px`, height: `${size}px` }}
    ></div>
  );
};

export default HeroRing;
