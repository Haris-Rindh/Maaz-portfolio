"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "framer-motion";

// Elegant, performant data sphere
const NeuralSphere = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { scrollYProgress } = useScroll();

  const count = 1200; // Reduced for stable 60FPS
  const { positions, randoms, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Golden ratio spiral for even sphere distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 3; // Radius
      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);

      randoms[i] = Math.random();

      // Cyber/Luxury colors: Indigo, cyan, and deep blue
      color.setHSL(0.55 + Math.random() * 0.15, 0.9, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, randoms, colors };
  }, [count]);

  const dummy = new THREE.Object3D();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const scroll = scrollYProgress.get(); 
    
    // Smooth, controlled rotation
    meshRef.current.rotation.y = time * 0.05 + scroll * Math.PI;
    meshRef.current.rotation.x = time * 0.02 + scroll * 0.5;

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];
      
      // Gentle wave animation (breathing effect), NOT chaotic explosion
      const wave = Math.sin(time * 1.5 + randoms[i] * Math.PI * 2) * 0.1;
      
      dummy.position.set(
        x * (1 + wave),
        y * (1 + wave),
        z * (1 + wave)
      );
      
      // Look at center
      dummy.lookAt(0,0,0);
      
      // Scale down slightly on scroll for depth effect
      const scale = 0.02 * (1 - scroll * 0.3);
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <circleGeometry args={[1, 8]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </circleGeometry>
      <meshBasicMaterial 
        vertexColors 
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export const Scene = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#020202"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#4fc3f7" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <NeuralSphere />
        </Float>

        <Preload all />
      </Canvas>
      
      {/* Soft gradient overlay to ensure text legibility at the top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] pointer-events-none opacity-80" />
    </div>
  );
};

export default Scene;
