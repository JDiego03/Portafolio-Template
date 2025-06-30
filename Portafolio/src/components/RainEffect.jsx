function RainEffect() {
  return (
    <div className="rain-container pointer-events-none fixed inset-0 z-0">
      {[...Array(50)].map((_, i) => (
        <span key={i} className="raindrop" />
      ))}
      <style jsx>{`
        .rain-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .raindrop {
          position: absolute;
          bottom: 100%;
          width: 6px;
          height: 15px;
          background: rgba(59, 130, 246, 0.25);
          animation: fall linear infinite;
          border-radius: 50%;
          opacity: 0.5;
        }
        ${[...Array(50)]
          .map(
            (_, i) => `
            .raindrop:nth-child(${i + 1}) {
              left: ${Math.random() * 100}%;
              animation-duration: ${0.5 + Math.random() * 1.5}s;
              animation-delay: -${Math.random() * 2}s;
              height: ${10 + Math.random() * 10}px;
              opacity: ${0.1 + Math.random() * 0.4};
            }
          `
          )
          .join("")}
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default RainEffect;
