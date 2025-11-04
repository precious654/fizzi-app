"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import FloatingCan from "@/components/FloatingCan";

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}
    >
      <FloatingCan />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} groundColor="#444444" />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </Canvas>
  );
}
