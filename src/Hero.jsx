import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import DarkVeil from "./Backgrounds/DarkVeil";
import RotatingText from "./Components/RotatingText";

/* CameraController: updates the live three.js camera when fov changes */
function CameraController({ fov, position = [0, 0, 11] }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix(); // required after changing fov
  }, [fov, camera]);

  useEffect(() => {
    // ensure camera position set once (optional)
    camera.position.set(position[0], position[1], position[2]);
  }, [camera, position]);

  return null;
}

function Model({ url }) {
  const gltf = useGLTF(url);
  const modelRef = useRef();
  const controlsRef = useRef();
  const [zoomed, setZoomed] = useState(false);

  // Rotate model automatically
  useFrame(() => {
    if (modelRef.current && !(controlsRef.current?.userIsInteracting)) {
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
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2} // lock vertical rotation
        minPolarAngle={Math.PI / 2}
      />
      <mesh onDoubleClick={handleDoubleClick} position={[0, 0, 0]} visible={false} />
    </>
  );
}

export default function Hero() {
  const [fov, setFov] = useState(70); // default FOV

  useEffect(() => {
    const updateFov = () => {
      if (window.innerWidth < 480) setFov(50); // phones
      else if (window.innerWidth < 768) setFov(40); // tablets
      else if (window.innerWidth < 1024) setFov(40); // small desktops
      else if (window.innerWidth < 1448) setFov(75); // small desktops
      else setFov(75); // large screens
    };

    updateFov(); // initial run
    window.addEventListener("resize", updateFov);
    return () => window.removeEventListener("resize", updateFov);
  }, []);

  return (
    <section className="hero" id="hero" data-aos="fade-down">
      <DarkVeil />
      <div className="hero-container">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Serge De Guzman</span>
        </h1>

        <div className="loader">
          <p>Aspiring</p>
          <RotatingText
            texts={['React', 'Front-End', 'Back-End', 'Software', 'Full-stack']}
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
          Developing responsive, and aesthetically pleasing web applications is my passion. My goal is to create experiences that meet and beyond the objectives of clients.
        </p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/serge-de-guzman-516b7429b/" className="social-icon linkedin"><FaLinkedin /></a>
          <a href="https://github.com/SergeDeGuzman" className="social-icon github"><FaGithub /></a>
          <a href="https://www.facebook.com/serge.deguzman.crispy" className="social-icon facebook"><FaFacebook /></a>
        </div>
      </div>

      <div className="hero-model">
        {/* CameraController is a child of Canvas so it can access the live camera */}
        <Canvas>
          <CameraController fov={fov} position={[0, 0, 11]} />
          <ambientLight intensity={2} />
          <directionalLight
            position={[0, 10, 5]}
            intensity={3.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Model url="/models/Model5.glb" />
        </Canvas>
      </div>
      </div>
    </section>
  );
}
