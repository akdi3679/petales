"use client";

import { useEffect, useState } from "react";

export function FallingLeaves() {
  const [leaves, setLeaves] = useState<any[]>([]);
  const [burstLeaves, setBurstLeaves] = useState<any[]>([]);

  const createLeaf = (id: number, isBurst: boolean) => {
    const sizeType = Math.floor(Math.random() * 3);
    const width = sizeType === 0 ? 32 : sizeType === 1 ? 48 : 64;
    const height = width * 0.46875;
    
    return {
      id,
      width,
      height,
      left: 50 + Math.random() * 50,
      delay: isBurst ? Math.random() * 4 : Math.random() * 10,
      // Burst leaves now fall slower: 6-10s instead of 3-5s
      duration: isBurst ? 6 + Math.random() * 4 : 12 + Math.random() * 6,
    };
  };

  useEffect(() => {
    const total = 25;
    const newLeaves = Array.from({ length: total }).map((_, i) => createLeaf(i, false));
    setLeaves(newLeaves);

    const handleClick = () => {
      const burstCount = 15;
      const newBurst = Array.from({ length: burstCount }).map((_, i) => 
        createLeaf(Date.now() + i, true)
      );
      
      setBurstLeaves(prev => [...prev, ...newBurst]);
      
      setTimeout(() => {
        setBurstLeaves(prev => prev.filter(l => !newBurst.find(nb => nb.id === l.id)));
      }, 15000);
    };

    window.addEventListener("foliage-click", handleClick);
    return () => window.removeEventListener("foliage-click", handleClick);
  }, []);

  const allLeaves = [...leaves, ...burstLeaves];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {allLeaves.map((leaf) => {
        const isBurstLeaf = leaf.id >= Date.now() - 15000;
        const fallMode = isBurstLeaf ? 'forwards' : 'infinite';
        
        return (
          <div
            key={leaf.id}
            className="falling-leaf"
            style={{
              width: `${leaf.width}px`,
              height: `${leaf.height}px`,
              left: `${leaf.left}%`,
              backgroundImage: `url('https://cdn.thisjs.com/blog_images/20220121162842.png')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              animation: `
                fall ${leaf.duration}s linear ${leaf.delay}s ${fallMode},
                sway ${leaf.duration * 0.5}s ease-in-out ${leaf.delay}s infinite alternate
              `,
            }}
          />
        );
      })}
    </div>
  );
}