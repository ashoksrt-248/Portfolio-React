// src/components/Background3D.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  // Rotate the sphere for animation
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x += 0.003;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, -2]}>
      <MeshDistortMaterial color="#61dafb" distort={0.3} speed={2} />
    </Sphere>
  );
};

const Background3D = () => (
  <Canvas
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      backgroundColor: '#282c34',
    }}
    camera={{ position: [0, 0, 5], fov: 50 }}
  >
    <ambientLight intensity={0.3} />
    <pointLight position={[10, 10, 10]} intensity={0.5} />
    <AnimatedSphere />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default Background3D;
