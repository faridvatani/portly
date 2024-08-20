import React, { FC } from "react";

interface HeroRingProps {
  size: number;
}

const HeroRing: FC<HeroRingProps> = ({ size }) => {
  return <div className={`hero-ring size-[${size}px]`}></div>;
};

export default HeroRing;
