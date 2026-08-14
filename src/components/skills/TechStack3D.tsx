import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TECH_STACK } from '../../data/portfolioData';
import type { TechItem } from '../../data/types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechStack3DProps {
  isDark?: boolean;
}

export const TechStack3D: React.FC<TechStack3DProps> = ({ isDark = true }) => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(TECH_STACK[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categories = ['All', 'Frontend', 'Backend', 'AI / Data', 'Database / Tools'];
  const filteredTech = activeCategory === 'All' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === activeCategory);

  // 3D Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const width = canvas.parentElement?.clientWidth || 600;
    const height = 480;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 8.5;

    // Center Sun/Core
    const coreGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x2997FF : 0x0071E3,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 1.5,
      transparent: true,
      opacity: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Orbiting rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const orbitRadii = [3.2, 4.4, 5.6];
    const ringMeshes: THREE.Mesh[] = [];

    orbitRadii.forEach(r => {
      const ringGeo = new THREE.TorusGeometry(r, 0.015, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isDark ? 0x48484A : 0xD1D1D6,
        transparent: true,
        opacity: 0.35,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.2;
      ringGroup.add(ring);
      ringMeshes.push(ring);
    });

    // Tech Nodes on Orbits
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    const nodeMeshes: { mesh: THREE.Mesh; tech: TechItem; orbitIndex: number; baseAngle: number; speed: number }[] = [];

    TECH_STACK.forEach((tech, index) => {
      const orbitIndex = index % orbitRadii.length;
      const baseAngle = (index / TECH_STACK.length) * Math.PI * 2;
      const speed = 0.18 + (orbitIndex * 0.04);

      // Color mapping
      let hexColor = 0x2997FF;
      if (tech.category === 'Frontend') hexColor = 0x61DAFB;
      if (tech.category === 'Backend') hexColor = 0x6DB33F;
      if (tech.category === 'AI / Data') hexColor = 0xA855F7;
      if (tech.category === 'Database / Tools') hexColor = 0xF59E0B;

      const nodeGeo = new THREE.SphereGeometry(0.28, 24, 24);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: hexColor,
        roughness: 0.2,
        metalness: 0.4,
        clearcoat: 1.0,
        emissive: hexColor,
        emissiveIntensity: 0.15,
      });

      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      techGroup.add(mesh);

      nodeMeshes.push({ mesh, tech, orbitIndex, baseAngle, speed });
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.5 : 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(6, 10, 8);
    scene.add(dirLight);

    // Mouse Interaction / Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
      if (intersects.length > 0) {
        const found = nodeMeshes.find(n => n.mesh === intersects[0].object);
        if (found) {
          setSelectedTech(found.tech);
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    // Resize
    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', handleResize);

    // Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Slow rotation of rings
      ringGroup.rotation.y = time * 0.05;
      ringGroup.rotation.z = Math.sin(time * 0.1) * 0.05;
      core.rotation.y = time * 0.15;

      // Update tech nodes positions
      nodeMeshes.forEach(node => {
        const r = orbitRadii[node.orbitIndex];
        const angle = node.baseAngle + time * (isHovered ? node.speed * 0.3 : node.speed);
        
        // Tilt orbit coordinate calculation
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r * Math.cos(Math.PI / 2.2);
        const y = Math.sin(angle) * r * Math.sin(Math.PI / 2.2) * 0.3 + Math.sin(time + node.orbitIndex) * 0.15;

        node.mesh.position.set(x, y, z);

        // Highlight selected
        if (selectedTech?.name === node.tech.name) {
          node.mesh.scale.set(1.4, 1.4, 1.4);
        } else {
          node.mesh.scale.set(1.0, 1.0, 1.0);
        }
      });

      // Hover Raycast check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
      if (intersects.length > 0) {
        canvas.style.cursor = 'pointer';
        const hovered = nodeMeshes.find(n => n.mesh === intersects[0].object);
        if (hovered && hovered.tech.name !== selectedTech?.name) {
          setSelectedTech(hovered.tech);
        }
      } else {
        canvas.style.cursor = 'default';
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isDark, isHovered, selectedTech?.name]);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#1D1D1F] text-white dark:bg-white dark:text-black shadow-sm scale-105'
                : 'bg-black/5 dark:bg-white/5 text-[#86868B] dark:text-[#A1A1A6] hover:bg-black/10 dark:hover:bg-white/10 hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop 3D Interactive Cosmos Container */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
        {/* 3D Orbit Canvas Viewport */}
        <div 
          className="lg:col-span-7 relative flex items-center justify-center apple-glass rounded-3xl p-4 overflow-hidden min-h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute top-4 left-6 z-10 flex items-center gap-2 text-xs font-mono text-[#86868B] dark:text-[#A1A1A6]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            INTERACTIVE 3D TECH UNIVERSE
          </div>
          
          <canvas ref={canvasRef} className="w-full h-full block" />

          <div className="absolute bottom-4 right-6 text-xs text-[#86868B] dark:text-[#A1A1A6] pointer-events-none">
            Hover or tap any planetary node to inspect
          </div>
        </div>

        {/* Dynamic Glass Tooltip / Inspector Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {selectedTech ? (
              <motion.div
                key={selectedTech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-8 border border-black/10 dark:border-white/15 backdrop-blur-apple-thick shadow-apple-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wide border"
                      style={{ 
                        color: selectedTech.color, 
                        borderColor: `${selectedTech.color}40`,
                        backgroundColor: `${selectedTech.color}15`
                      }}
                    >
                      {selectedTech.category}
                    </span>
                    <Badge variant="outline">{selectedTech.proficiency}</Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-3">
                    {selectedTech.name}
                  </h3>

                  <p className="text-[#86868B] dark:text-[#A1A1A6] text-base leading-relaxed mb-6 font-normal">
                    {selectedTech.description}
                  </p>

                  <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-[#86868B] dark:text-[#A1A1A6]">
                    <span>Architecture Role</span>
                    <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Production Ready
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Responsive 2D Grid for Tablet / Mobile Devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
        {filteredTech.map((tech) => (
          <GlassCard
            key={tech.name}
            hoverEffect
            onClick={() => setSelectedTech(tech)}
            className={`p-6 text-left transition-all ${
              selectedTech?.name === tech.name ? 'ring-2 ring-apple-accent/60' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-apple-accent">
                {tech.category}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#86868B] dark:text-[#A1A1A6]">
                {tech.proficiency}
              </span>
            </div>
            <h4 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-2">
              {tech.name}
            </h4>
            <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
              {tech.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
