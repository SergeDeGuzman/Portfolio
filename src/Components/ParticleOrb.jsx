import React, { useEffect, useRef } from "react";

const ParticleOrb = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const total = 300;
    const orbSize = window.innerWidth < 768 ? 60 : 100; // smaller orb on mobile
    const time = window.innerWidth < 768 ? 18 : 14; // slightly slower animation on mobile
    const baseHue = 0;
    const wrap = wrapRef.current;

    let styleSheet = document.getElementById("particle-orb-styles");
    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.id = "particle-orb-styles";
      document.head.appendChild(styleSheet);
    }

    const rules = [];

    for (let i = 1; i <= total; i++) {
      const div = document.createElement("div");
      div.classList.add("c");

      const z = Math.random() * 360;
      const y = Math.random() * 360;
      const hue = ((40 / total) * i) + baseHue;

      div.style.backgroundColor = `hsla(${hue}, 100%, 50%, 1)`;
      div.style.animation = `orbit${i} ${time}s linear infinite`;
      div.style.animationDelay = `${i * 0.01}s`;
      div.style.willChange = "transform, opacity"; 

      rules.push(`
        @keyframes orbit${i} {
          20% { opacity: 1; }
          30% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg)
                       translateX(${orbSize}px) rotateZ(${z}deg);
          }
          80% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg)
                       translateX(${orbSize}px) rotateZ(${z}deg);
            opacity: 1;
          }
          100% {
            transform: rotateZ(-${z}deg) rotateY(${y}deg)
                       translateX(${orbSize * 3}px) rotateZ(${z}deg);
          }
        }
      `);

      wrap.appendChild(div);
    }

    const sheet = styleSheet.sheet;
    rules.forEach((r) => sheet.insertRule(r, sheet.cssRules.length));

    return () => {
      wrap.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="wrap"
      ref={wrapRef}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        margin: "auto",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    ></div>
  );
};

export default ParticleOrb;
