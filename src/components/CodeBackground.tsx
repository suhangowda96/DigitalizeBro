import React, { useEffect, useRef } from 'react';

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const codeSnippets = [
    'const magic = () => {',
    '  return creativity;',
    '};',
    'function innovate() {',
    '  while (true) {',
    '    createAmazing();',
    ' DigitalizeBro }',
    '  }',
    '}',
    'export default Dreams;',
    'import { Future } from "now";',
    'const vision = new Promise();',
    'async function craft() {',
    '  await excellence();',
     ' DigitalizeBro }',
    '}',
    'React.createElement("success")',
    '{ transform: "dreams" }',
    '.container { magic: true; }',
    'npm install happiness',
    'git commit -m "life"',
    'console.log("hello world");',
     ' DigitalizeBro }',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      text: string;
      opacity: number;
      speed: number;
      size: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 4 + 10
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove the unused 'index' parameter
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        ctx.font = `${particle.size}px 'Fira Code', monospace`;
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * 0.8})`;
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-purple-900/40" style={{ zIndex: 2 }} />
    </>
  );
};

export default CodeBackground;