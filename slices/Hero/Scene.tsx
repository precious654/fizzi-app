"use client";

import React from "react";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import FloatingCan from "@/components/FloatingCan";

gsap.registerPlugin(useGSAP);

type Props = {};

export function Scene({}: Props) {
  const can1Ref = React.useRef<THREE.Group>(null);
  const can2Ref = React.useRef<THREE.Group>(null);
  const can3Ref = React.useRef<THREE.Group>(null);
  const can4Ref = React.useRef<THREE.Group>(null);
  const can5Ref = React.useRef<THREE.Group>(null);

  const can1GroupRef = React.useRef<THREE.Group>(null);
  const can2GroupRef = React.useRef<THREE.Group>(null);

  const groupRef = React.useRef<THREE.Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    gsap.set(can1Ref.current.position, { x: -2.0 });
    gsap.set(can1Ref.current.rotation, { z: -0.2 });

    gsap.set(can2Ref.current.position, { x: 2.0 });
    gsap.set(can2Ref.current.rotation, { z: 0.2 });

    gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5Ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    introTl
      .from(
        can1GroupRef.current.position,
        {
          y: -5,
          x: 1,
        },
        0,
      )
      .from(
        can1GroupRef.current.rotation,
        {
          z: 3,
        },
        0,
      )
      .from(
        can2GroupRef.current.position,
        {
          y: 5,
          x: 1,
        },
        0,
      )
      .from(
        can2GroupRef.current.rotation,
        {
          z: 3,
        },
        0,
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3Ref} flavor="grape" floatSpeed={FLOAT_SPEED} />

      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />

      <FloatingCan ref={can5Ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} groundColor="#444444" />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
