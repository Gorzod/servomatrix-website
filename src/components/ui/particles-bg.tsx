// No "use client" needed — this is a Vite/React project, not Next.js

import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback(() => {
    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    const colors = {
      particles: "#00d4b4",
      lines: "#00a88e",
      accent: "#00ffe5",
    };

    // @ts-ignore
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 140, density: { enable: true, value_area: 800 } },
        color: { value: colors.particles },
        shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: colors.lines,
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "window",  // "window" so interactions work through overlaid React elements
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initParticles();
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [initParticles]);

  // Fade canvas out as user scrolls past the hero zone so it doesn't
  // cover content sections. position:fixed keeps client coords = canvas
  // coords at all scroll positions, fixing the cursor-offset bug.
  useEffect(() => {
    const canvas = document.getElementById("particles-js");
    if (!canvas) return;

    const update = () => {
      const zone = document.querySelector(".hero-zone");
      if (!zone) return;
      const bottom = zone.getBoundingClientRect().bottom;
      (canvas as HTMLElement).style.opacity = bottom > 120 ? "1" : "0";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 pointer-events-none"
      style={{ background: "#030609", zIndex: 0, transition: "opacity 0.45s ease" }}
    />
  );
}
