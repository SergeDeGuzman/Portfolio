import React, { useEffect, useRef } from "react";

const ParticleOrb = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const total = 300;
    const orbSize = 100; // px
    const time = 14; // seconds
    const baseHue = 0; // try 180 for blue tones
    const wrap = wrapRef.current;

    // Get or create a <style> tag to inject keyframes
    let styleSheet = document.getElementById("particle-orb-styles");
    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.id = "particle-orb-styles";
      document.head.appendChild(styleSheet);
    }

    // Generate particles
    for (let i = 1; i <= total; i++) {
      const div = document.createElement("div");
      div.classList.add("c");

      const z = Math.random() * 360;
      const y = Math.random() * 360;
      const hue = ((40 / total) * i) + baseHue;

      div.style.backgroundColor = `hsla(${hue}, 100%, 50%, 1)`;
      div.style.animation = `orbit${i} ${time}s infinite`;
      div.style.animationDelay = `${i * 0.01}s`;

      // Create unique keyframes for each particle
      const keyframes = `
        @keyframes orbit${i} {
          20% { opacity: 1; }
          30% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${orbSize}px) rotateZ(${z}deg);
          }
          80% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${orbSize}px) rotateZ(${z}deg);
            opacity: 1;
          }
          100% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${orbSize * 3}px) rotateZ(${z}deg);
          }
        }`;
      styleSheet.sheet.insertRule(keyframes, styleSheet.sheet.cssRules.length);

      wrap.appendChild(div);
    }

    return () => {
      // Cleanup — remove all child divs and custom rules
      wrap.innerHTML = "";
    };
  }, []);

  return <div className="wrap" ref={wrapRef}></div>;
};

export default ParticleOrb;
