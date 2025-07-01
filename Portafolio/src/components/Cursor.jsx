import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const trailLength = 8; // número de puntos en la estela
  const dotsRef = useRef([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const positions = Array(trailLength).fill({ x: 0, y: 0 });
    const speed = 0.2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      positions[0] = {
        x: positions[0].x + (mouseX - positions[0].x) * speed,
        y: positions[0].y + (mouseY - positions[0].y) * speed,
      };

      for (let i = 1; i < trailLength; i++) {
        positions[i] = {
          x: positions[i].x + (positions[i - 1].x - positions[i].x) * speed,
          y: positions[i].y + (positions[i - 1].y - positions[i].y) * speed,
        };
      }

      dotsRef.current.forEach((dot, idx) => {
        if (dot) {
          const size = 5 - idx * 0.5; // puntos más pequeños hacia el final
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.transform = `translate3d(${positions[idx].x}px, ${positions[idx].y}px, 0)`;
          dot.style.opacity = `${1 - idx / trailLength}`; // transparencia gradual
        }
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [trailLength]);

  return (
    <>
      {[...Array(trailLength)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="fixed top-0 left-0 bg-blue-500 rounded-full pointer-events-none z-50"
          style={{ width: 5, height: 5, position: "fixed" }}
        />
      ))}
    </>
  );
}
