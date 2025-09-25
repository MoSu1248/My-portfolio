// particleData.js
export const particles = Array.from({ length: 20 }).map(() => ({
  x: Math.random() * 100,       // start % viewport width
  y: Math.random() * 100,       // start % viewport height
  size: 1 + Math.random() * 3,  // 1px to 4px
  baseOpacity: 0.05 + Math.random() * 0.1, // subtle transparency
  duration: 20 + Math.random() * 20       // drift duration in seconds
}));
