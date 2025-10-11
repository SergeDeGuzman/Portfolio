import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import LightRays from './LightRays';
import DarkVeil from './DarkVeil';

function Model({ url }) {
  const gltf = useGLTF(url);
  const modelRef = useRef();
  const controlsRef = useRef();
  const [zoomed, setZoomed] = useState(false);

  // Rotate model automatically
  useFrame(() => {
    if (modelRef.current && !controlsRef.current.userIsInteracting) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  // Handle double-click to toggle zoom
  const handleDoubleClick = () => {
    const camera = controlsRef.current.object;
    if (zoomed) {
      camera.position.set(0, 1.5, 3); // default zoom
    } else {
      camera.position.set(0, 1.5, 1.5); // zoomed in
    }
    setZoomed(!zoomed);
  };

  return (
    <>
      <primitive ref={modelRef} object={gltf.scene} scale={1} rotation={[0.2, 0, 0]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}          // disable scroll zoom
        enablePan={false}
        maxPolarAngle={Math.PI / 2} // lock vertical rotation
        minPolarAngle={Math.PI / 2} // lock vertical rotation
      />
      <mesh
        onDoubleClick={handleDoubleClick}
        position={[0, 0, 0]}
        visible={false} // invisible mesh to capture double-clicks
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <section className="hero" id="hero" data-aos="fade-down" >
      {/* <LightRays
    raysOrigin="top-center"
    raysColor="#fbff00ff"
    raysSpeed={0.1}
    lightSpread={0.5}
    rayLength={3}
    fadeDistance={1.0}
    followMouse={true}
    mouseInfluence={0.2}
    noiseAmount={0.2}
    distortion={0.05}
    className="custom-rays"
  /> */}
      <DarkVeil />
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Serge De Guzman</span>
        </h1>
  <div class="loader">
    <p>Aspiring</p>
    <div class="words">
      <span class="word"></span>
      <span class="word">    React </span>
      <span class="word">Software </span>
      <span class="word">Full-stack </span>
      <span class="word">Front-End</span>
    </div>
    <p className="word2">Developer</p>
  </div>
        <p className="intro">
          I'm a Software Engineer passionate about building beautiful web apps
          with React, CSS, and modern web technologies.
        </p>
      </div>

      <div className="hero-model">
        <Canvas camera={{ position: [0, 0, 11], fov: 65 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[0, 10, 5]}
  intensity={3.5}
  castShadow
  shadow-mapSize={[1024, 1024]} />
          <Model url="/models/Model5.glb" />
        </Canvas>
      </div>
    </section>
  );
}
