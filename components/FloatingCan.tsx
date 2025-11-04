"use client";

import React from "react";
import { Float } from "@react-three/drei";
import * as THREE from "three";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  floatingRange?: [number, number];
  children?: React.ReactNode;
};

const FloatingCan = React.forwardRef<THREE.Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      floatIntensity = 1,
      rotationIntensity = 2,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    }: FloatingCanProps,
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          floatingRange={floatingRange}
          floatIntensity={floatIntensity}
          rotationIntensity={rotationIntensity}
          speed={floatSpeed}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
