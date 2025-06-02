import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const bigBall = useRef(null);
  const smallBall = useRef(null);

  useEffect(() => {
    const hoverables = document.querySelectorAll(".hoverable");

    function onMouseMove(e) {
      gsap.to(bigBall.current, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
        ease: "power3.out",
      });
      gsap.to(smallBall.current, {
        duration: 0.1,
        x: e.pageX - 5,
        y: e.pageY - 7,
        ease: "power3.out",
      });
    }

    function onMouseHover() {
      gsap.to(bigBall.current, {
        duration: 0.3,
        scale: 4,
        boxShadow: "0 0 15px 8px rgba(255,255,255,0.9)",
        ease: "power3.out",
      });
    }

    function onMouseHoverOut() {
      gsap.to(bigBall.current, {
        duration: 0.3,
        scale: 1,
        boxShadow: "0 0 8px 4px rgba(255,255,255,0.8)",
        ease: "power3.out",
      });
    }

    if (bigBall.current) {
      bigBall.current.style.backgroundColor = "#fff";
      bigBall.current.style.mixBlendMode = "difference";
      bigBall.current.style.boxShadow = "0 0 8px 4px rgba(255,255,255,0.8)";
    }
    if (smallBall.current) {
      smallBall.current.style.backgroundColor = "#000";
    }

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", onMouseMove);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHover);
        el.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={bigBall}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        style={{ transformOrigin: "center" }}
      />
      <div
        ref={smallBall}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 bg-black"
      />
    </>
  );
}
