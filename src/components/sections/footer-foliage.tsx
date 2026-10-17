"use client";

import { useState } from "react";

function LeafBranch({ 
  rotation, 
  translateX, 
  translateY 
}: { 
  rotation: number;
  translateX: number;
  translateY: number;
}) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    window.dispatchEvent(new CustomEvent("foliage-click"));
    setTimeout(() => setIsShaking(false), 400);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${isShaking ? 'animate-leaf-bounce' : ''}`}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
      }}
    >
      <img 
        src="/images/leaf-branch.png" 
        alt="" 
        loading="lazy"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
          transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`, 
          transformOrigin: '100% 0%', 
          opacity: 1, 
          display: 'block',
        }} 
      />
    </div>
  );
}

export function FooterFoliage() {
  return (
    <div 
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-10px',
        right: '-65px',
        width: '240px',
        height: '240px',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'visible',
      }}
    >
      <LeafBranch rotation={40} translateX={0} translateY={10} />
      <LeafBranch rotation={60} translateX={10} translateY={-6} />
      <LeafBranch rotation={15} translateX={5} translateY={8} />
    </div>
  );
}