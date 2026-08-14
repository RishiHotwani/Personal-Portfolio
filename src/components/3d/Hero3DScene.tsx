import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  isDark?: boolean;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ isDark = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- Object 1: Core Neural AI Node (Center Icosahedron with Wireframe) ---
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x2997FF : 0x0071E3,
      emissive: isDark ? 0x0a2540 : 0x001a33,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Outer Wireframe Cage for AI Synapse
    const wireGeo = new THREE.IcosahedronGeometry(1.35, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x64B5F6 : 0x2196F3,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // --- Object 2: React Orbital Rings (Torus rings around core) ---
    const ringGeo = new THREE.TorusGeometry(2.0, 0.022, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x61DAFB : 0x0288D1,
      roughness: 0.3,
      metalness: 0.8,
      emissive: isDark ? 0x103040 : 0x002030,
    });

    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    const ring3 = new THREE.Mesh(ringGeo, ringMat);
    ring3.rotation.z = Math.PI / 2;
    ring3.rotation.x = Math.PI / 5;
    mainGroup.add(ring3);

    // --- Object 3: Floating Satellite Nodes (Spring / Java / Architecture) ---
    const satelliteNodes: THREE.Mesh[] = [];
    const nodeCount = 6;
    const nodeGeo = new THREE.SphereGeometry(0.16, 24, 24);
    const nodeColors = [
      0x6DB33F, // Spring Green
      0xEA2D2E, // Java Red
      0x2997FF, // Apple Blue
      0xF59E0B, // Amber
      0xA855F7, // Purple
      0x10B981  // Emerald
    ];

    for (let i = 0; i < nodeCount; i++) {
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: nodeColors[i % nodeColors.length],
        metalness: 0.2,
        roughness: 0.2,
        clearcoat: 1.0,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4;
      node.position.set(Math.cos(angle) * radius, (Math.sin(i * 1.5) * 0.8), Math.sin(angle) * radius);
      mainGroup.add(node);
      satelliteNodes.push(node);
    }

    // --- Object 4: Connecting Synaptic Lines ---
    const lineMat = new THREE.LineBasicMaterial({
      color: isDark ? 0x86868B : 0x9E9E9E,
      transparent: true,
      opacity: 0.25,
    });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(nodeCount * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    mainGroup.add(lineMesh);

    // --- Object 5: Subtle Floating Ambient Dust Particles ---
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: isDark ? 0xE5E5EA : 0x1D1D1F,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.4 : 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 2.5 : 2.0);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(isDark ? 0x2997FF : 0x0071E3, 1.8);
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    // Mouse Parallax Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      mainGroup.rotation.x = mouseY + Math.sin(elapsedTime * 0.2) * 0.08;

      // Slow object rotations
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.z = elapsedTime * 0.15;
      wireMesh.rotation.y = -elapsedTime * 0.18;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.25;
      ring3.rotation.x = elapsedTime * 0.2;

      // Orbit satellites & update connecting lines
      const positions = lineGeo.attributes.position.array as Float32Array;
      satelliteNodes.forEach((node, i) => {
        const offset = (i / nodeCount) * Math.PI * 2;
        const currentRadius = 2.4 + Math.sin(elapsedTime * 1.5 + i) * 0.15;
        const currentAngle = offset + elapsedTime * 0.3;
        
        node.position.x = Math.cos(currentAngle) * currentRadius;
        node.position.y = Math.sin(elapsedTime * 0.8 + i) * 0.7;
        node.position.z = Math.sin(currentAngle) * currentRadius;

        // Line from core (0,0,0) to node
        const idx = i * 6;
        positions[idx] = 0;
        positions[idx + 1] = 0;
        positions[idx + 2] = 0;
        positions[idx + 3] = node.position.x;
        positions[idx + 4] = node.position.y;
        positions[idx + 5] = node.position.z;
      });
      lineGeo.attributes.position.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center p-8">
        <div className="relative w-64 h-64 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent backdrop-blur-xl animate-pulse-subtle">
          <div className="w-36 h-36 rounded-full border border-blue-500/30 flex items-center justify-center">
            <span className="text-sm font-semibold tracking-wider text-apple-accent">FULL-STACK AI</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      aria-label="3D Interactive Engineering Scene"
    />
  );
};
