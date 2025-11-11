"use client";

import React from "react";
import * as THREE from "three";
import { Environment, Clouds, Cloud } from "@react-three/drei";
import { Content } from "@prismicio/client";

import FloatingCan from "@/components/FloatingCan";

type SkyDiveProps = {
	sentence: string | null;
	flavor: Content.SkyDiveSliceDefaultPrimary["flavor"]
};

export function Scene({sentence, flavor}: SkyDiveProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const canRef = React.useRef<THREE.Group>(null);
  const cloud1Ref = React.useRef<THREE.Group>(null);
  const cloud2Ref = React.useRef<THREE.Group>(null);
  const cloudsRef = React.useRef<THREE.Group>(null);
  const wordsRef = React.useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <group rotation={[0,0,0.5]}>
        <FloatingCan ref={canRef} flavor={flavor}></FloatingCan>
      </group>

	  <Clouds ref={cloudsRef}>
		<Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
		<Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
	  </Clouds>

      <ambientLight intensity={0.5} color="#9DDEFA" />
      <hemisphereLight intensity={0.5} groundColor="#444444" />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}
