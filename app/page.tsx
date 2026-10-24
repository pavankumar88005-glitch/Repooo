
  "use client";
  import React, { Suspense, useRef, useState } from 'react';
  import { Canvas, useFrame } from '@react-three/fiber';
  import { Points, PointMaterial } from '@react-three/drei';
  import { motion } from 'framer-motion';
  import { Cpu, Code, Zap, Database, Globe, FileText } from 'lucide-react';

  // --- 3D BACKGROUND: STAR FIELD ---
  function StarBackground() {
    const ref = useRef<any>();

    const [sphere] = useState(() => {
      const positions = new Float32Array(5000 * 3);
      for (let i = 0; i < 5000 * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      return positions;
    });

    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    });

    return (
      <group rotation={[0, 0, 0]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#60a5fa"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
      {children}
    </h2>
  );

  const SkillBadge = ({ name }: { name: string }) => (
    <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-blue-300 text-xs rounded-full border border-blue-500/30 hover:border-blue-400 transition-all cursor-default">
      {name}
    </span>
  );

  export default function Home() {
    return (
      <div className="bg-slate-950 text-slate-200 min-h-screen font-sans relative overflow-x-hidden">

        {/* --- 3D BACKGROUND LAYER --- */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <StarBackground />
            </Suspense>
          </Canvas>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10">

          {/* HERO SECTION */}
          <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <span className="px-4 py-1 text-sm font-medium tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full mb-6 inline-block border border-blue-400/20 backdrop-blur-md">
                AI Engineer & Automation Expert
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
                VENKATA SAI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                  PAVAN KUMAR
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Specializing in <span className="text-white font-semibold">MCP Servers, AI Agents, and Scalable Backend Systems</span>.
                Turning complex AI research into production-ready software.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/40">
                  Explore My Work
                </a>
                <a href="https://www.linkedin.com/in/venkata-sai-pavan-kumar-thalluri-btech/" target="_blank" className="px-8 py-4 bg-slate-800/50 backdrop-blur-md hover:bg-slate-700 text-white rounded-full
  font-bold transition-all border border-slate-700">
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </section>

          {/* SKILLS SECTION */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <SectionTitle>Technical Arsenal</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 p-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-blue-500/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <Zap size={28} /> <h3 className="text-2xl font-bold text-white">AI & Automation</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI Agents", "MCP Servers", "n8n", "Prompt Engineering", "Workflow Automation", "API Orchestration", "LLMs"].map(s => <SkillBadge key={s} name={s} />)}
                </div>
              </div>
              <div className="p-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6 text-emerald-400">
                  <Database size={28} /> <h3 className="text-xl font-bold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Express.js", "REST APIs", "MySQL", "SQLite", "MongoDB", "Python"].map(s => <SkillBadge key={s} name={s} />)}
                </div>
              </div>
              <div className="p-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6 text-purple-400">
                  <Code size={28} /> <h3 className="text-xl font-bold text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript", "Kotlin", "C"].map(s => <SkillBadge key={s} name={s} />)}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <SectionTitle>Engineering Works</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "AI Agent Development", desc: "Architected intelligent AI agents for high-scale workflow automation.", tech: ["Python", "n8n", "LLMs"], icon: <Zap className="text-blue-400" /> },
                  { title: "MCP Server Ecosystem", desc: "Developed Model Context Protocol servers containerized with Docker.", tech: ["Docker", "MCP", "Python"], icon: <Cpu className="text-emerald-400" /> },
                  { title: "WhatsApp AI Automation", desc: "End-to-end pipeline integrating WhatsApp via REST APIs.", tech: ["n8n", "Docker", "REST API"], icon: <Globe className="text-purple-400" /> },
                  { title: "Coding Resource Platform", desc: "Curated programming roadmaps and resources for developers.", tech: ["JS", "HTML/CSS", "Backend"], icon: <FileText className="text-orange-400" />
  },
                ].map((proj, i) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    key={i} className="p-8 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="mb-6 p-3 bg-slate-800 w-fit rounded-2xl">{proj.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(t => <span key={t} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">{t}</span>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <footer className="py-12 text-center border-t border-slate-900 bg-slate-950/50 backdrop-blur-md">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} VENKATA SAI PAVAN KUMAR. Built with Next.js & Three.js.
            </p>
          </footer>
        </div>
      </div>
    );
  }