export const particles = Array.from({ length: 25 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 3,
  baseOpacity: 0.05 + Math.random() * 0.1,
  duration: 20 + Math.random() * 20,
}));
