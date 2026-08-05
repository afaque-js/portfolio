// src/components/SciFiBackground.tsx
"use client";
import { useEffect, useRef } from "react";

interface CyberNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
}

interface MouseState {
  x: number | null;
  y: number | null;
  radius: number;
}

export default function SciFiBackground({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<MouseState>({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const colors = {
      dark: {
        bg: "#040209",
        nodeA: "rgba(0, 255, 170, 0.85)",
        nodeB: "rgba(0, 220, 255, 0.85)",
        nodeAGlow: "#00ffaa",
        nodeBGlow: "#00dcff",
        line: "0, 255, 170",
        vignette: "rgba(0, 8, 15, 0.65)"
      },
      light: {
        bg: "#f4f6fa",
        nodeA: "rgba(0, 102, 255, 0.85)",
        nodeB: "rgba(112, 0, 255, 0.85)",
        nodeAGlow: "#0066ff",
        nodeBGlow: "#7000ff",
        line: "0, 102, 255",
        vignette: "rgba(200, 210, 230, 0.4)"
      }
    };

    // FIX 1: Complete display buffer resolution reset
    const resizeCanvas = () => {
      // Get the absolute layout pixel bounding sizes instead of window sizes
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      width = rect.width;
      height = rect.height;
      
      // Update actual drawing canvas coordinates independently from CSS
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // FIX 2: Clear and override drawing transformation history 
      ctx.setTransform(1, 0, 0, 1, 0, 0); 
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const nodes: CyberNode[] = [];
    const nodeCount = 85;
    const connectionDistance = 140;

    // Use full window layout width space during startup generation
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI
      });
    }

    const animate = () => {
      const currentTheme = isDark ? colors.dark : colors.light;
      const mouse = mouseRef.current;

      // Always clear out drawing stack before printing frames
      ctx.fillStyle = currentTheme.bg;
      ctx.fillRect(0, 0, width, height);

      // Node Physics tracking loops
      nodes.forEach((node) => {
        node.pulse += 0.03;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0) { node.x = 0; node.vx *= -1; }
        if (node.x >= width) { node.x = width; node.vx *= -1; }
        if (node.y <= 0) { node.y = 0; node.vy *= -1; }
        if (node.y >= height) { node.y = height; node.vy *= -1; }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x += (dx / dist) * force * 1.5;
            node.y += (dy / dist) * force * 1.5;
          }
        }
      });

      // Pass 1: Connection Net Paths
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isDark ? 0.25 : 0.18);
            ctx.strokeStyle = `rgba(${currentTheme.line}, ${alpha})`;
            ctx.lineWidth = isDark ? 0.8 : 1.1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Pass 2: Round Core Nodes
      nodes.forEach((node) => {
        const currentRadius = node.radius + Math.sin(node.pulse) * 1.2;
        const safeRadius = Math.max(0.1, currentRadius);

        ctx.save();
        
        // FIX 3: Reset directional glow weight skewing anomalies
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = isDark ? 12 : 4;
        
        if (node.radius > 2.2) {
          ctx.fillStyle = currentTheme.nodeB;
          ctx.shadowColor = currentTheme.nodeBGlow;
        } else {
          ctx.fillStyle = currentTheme.nodeA;
          ctx.shadowColor = currentTheme.nodeAGlow;
        }

        ctx.beginPath();
        // Generates uniform circles using an equal aspect profile
        ctx.arc(node.x, node.y, safeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Pass 3: Symmetrical Shading Layout
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.25,
        width / 2,
        height / 2,
        width * 0.8
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, currentTheme.vignette);
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDark]);

  return (
    // FIX 4: Replaced Tailwind styles causing browser stretch anomalies on canvas wrappers
    <div className="fixed inset-0 -z-50 h-screen w-screen overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#64748b05_1px,transparent_1px),linear-gradient(to_bottom,#64748b05_1px,transparent_1px)] bg-[size:48px_48px]" 
        style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}
      />
    </div>
  );
}
