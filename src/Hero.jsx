import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import DarkVeil from "./Backgrounds/DarkVeil";
import RotatingText from "./Components/RotatingText";

function CameraController({ fov, position = [0, 0, 11] }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
    camera.position.set(...position);
  }, [fov, camera, position]);
  return null;
}

function Model({ url }) {
  const gltf = useGLTF(url);
  const modelRef = useRef();
  const controlsRef = useRef();

  // smooth auto rotation
  useFrame(() => {
    if (modelRef.current && !(controlsRef.current?.userIsInteracting)) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <primitive ref={modelRef} object={gltf.scene} scale={1} rotation={[0.2, 0, 0]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function Hero() {
  const [fov, setFov] = useState(70);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateFov = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      if (w < 480) setFov(50);
      else if (w < 768) setFov(40);
      else if (w < 1024) setFov(40);
      else setFov(75);
    };
    updateFov();
    window.addEventListener("resize", updateFov);
    return () => window.removeEventListener("resize", updateFov);
  }, []);

  return (
    <section className="hero" id="hero">
      <DarkVeil />
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Serge De Guzman</span>
          </h1>

          <div className="loader">
            <p>Aspiring</p>
            <RotatingText
              texts={["React", "Front-End", "Back-End", "Software", "Full-stack"]}
              mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden justify-center rotatingText"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <p className="word2">Developer</p>
          </div>

          <p className="intro">
            Developing responsive and aesthetically pleasing web applications is my passion. My goal is to create experiences that meet and exceed the objectives of clients.
          </p>

          <div className="socials">
            <a href="https://www.linkedin.com/in/serge-de-guzman-516b7429b/" className="social-icon linkedin"><FaLinkedin /></a>
            <a href="https://github.com/SergeDeGuzman" className="social-icon github"><FaGithub /></a>
            <a href="https://www.facebook.com/serge.deguzman.crispy" className="social-icon facebook"><FaFacebook /></a>
          </div>
        </div>

        <div className="hero-model">
          <Canvas
            dpr={[1, isMobile ? 1.5 : 2]} 
            camera={{ position: [0, 0, 11], fov }}
            gl={{ antialias: false, powerPreference: "low-power" }} 
          >
            <CameraController fov={fov} position={[0, 0, 11]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 10, 5]} intensity={2.5} />
            <Suspense fallback={null}>
              <Model url="/models/Model5.glb" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
