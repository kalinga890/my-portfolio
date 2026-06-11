import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   YOUR DATA — update links as needed
═══════════════════════════════════════════════════════════ */
const ME = {
  name: "Kalinga A",
  roles: ["MERN Stack Developer", "Full Stack Developer", "React.js Developer", "Spring Boot Developer"],
  tagline: "Building scalable, clean, and user-friendly full-stack applications.",
  about:
"Fresher Computer Science Engineer (CGPA: 8.08) from Government Engineering College, Gangavathi. Passionate about MERN Stack and Java Full-Stack Development with hands-on experience gained through academic projects and internship training. Completed an internship at Rooman Technologies, Bengaluru, where I worked on real-time chat applications, AI-powered solutions, and web & mobile applications. Strong foundation in software development, problem-solving, scalable application design, and writing clean, maintainable code. Eager to contribute and grow as a Full-Stack Developer.", email: "kalingaa69@gmail.com",
  github: "github.com/kalinga890",
  linkedin: "linkedin.com/in/Kalinga A",
  phone: "+91-6360480400",
  location: "Bengaluru, Karnataka",
  cgpa: "8.08",
  college: "Government Engineering College, Gangavathi",
};

const SKILLS = [
  { name: "React.js",           pct: 85, color: "#61DAFB" },
  { name: "JavaScript",         pct: 83, color: "#F7DF1E" },
  { name: "Node.js",            pct: 78, color: "#68A063" },
  { name: "Spring Boot (Java)", pct: 80, color: "#6DB33F" },
  { name: "MongoDB",            pct: 76, color: "#47A248" },
  { name: "MySQL",              pct: 78, color: "#4479A1" },
  { name: "HTML / CSS",         pct: 90, color: "#E34F26" },
  { name: "Git / GitHub",       pct: 82, color: "#F05032" },
];

const PROJECTS = [
  {
    title: "Employee Management System",
    emoji: "👔",
    desc: "Full-stack app with React.js frontend and Spring Boot backend. CRUD operations for employee records, responsive Bootstrap 5 UI, and RESTful APIs integrating MySQL as database.",
    stack: ["React.js", "Spring Boot", "MySQL", "Bootstrap 5", "JavaScript"],
    badge: "Full-Stack · CRUD",
    badgeColor: "#10B981",
    period: "Nov 2025",
    live: "#", repo: "https://github.com/kalinga890/empy-system"
  },
  {
    title: "E-Learning Platform",
    emoji: "🎓",
    desc: "Full-stack E-Learning web app with React frontend and Spring Boot backend. User authentication, REST APIs, Firebase integration, and secure online learning experience.",
    stack: ["React.js", "Spring Boot", "MySQL", "Firebase", "Axios"],
    badge: "Auth · Firebase",
    badgeColor: "#F59E0B",
    period: "Feb 2026",                 
    live: "https://elearning-frontend-two-psi.vercel.app/",
    repo: "https://github.com/kalinga890/-elearning-frontend"
  },
  {
    title: "Real-Time Chat App",
    emoji: "💬",
    desc: "Built during internship at Rooman Technologies. Real-time messaging with WebSocket support, scalable backend architecture, and secure user sessions.",
    stack: ["Node.js", "Socket.io", "React.js", "MongoDB"],
    badge: "Internship Project",
    badgeColor: "#8B5CF6",
    period: "2024–2025",
    live: "#", repo: "#",
  },
  
];

const EXPERIENCE = [
  {
    role: "Application Developer Intern",
    company: "Rooman Technologies",
    location: "Bengaluru, India",
    period: "Oct 2024 – Apr 2025",
    points: [
      "Certified Application Developer – Web & Mobile",
      "Built real-time chat apps and AI-powered web solutions",
      "Focused on scalability, security, and great user experience",
      "Worked across web, mobile, and backend development",
    ],
    color: "#00D4FF",
  },
];

const ACHIEVEMENTS = [
  { icon: "🏏", title: "Cricket Team Captain",       sub: "GEC Gangavathi, Nov–Dec 2024" },
  { icon: "🧠", title: "TCS TechBytes IT Quiz",       sub: "Statewide — represented college, 2025" },
  { icon: "📜", title: "App Developer Certificate",   sub: "Web & Mobile — Rooman Technologies" },
  { icon: "☕", title: "Java Full Stack Certificate", sub: "Certified full-stack Java developer" },
  { icon: "🎓", title: "8.08 CGPA",                  sub: "B.E. CSE — GEC Gangavathi (2025)" },
  { icon: "💡", title: "Science PUC — 88%",          sub: "Pupil Tree PU College, Ballari (2021)" },
];

/* ═══════════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

function useTypewriter(texts, speed = 80) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = texts[idx];
    const t = setTimeout(() => {
      if (!del) {
        if (ci < cur.length) { setDisplay(cur.slice(0, ci + 1)); setCi(c => c + 1); }
        else setTimeout(() => setDel(true), 1800);
      } else {
        if (ci > 0) { setDisplay(cur.slice(0, ci - 1)); setCi(c => c - 1); }
        else { setDel(false); setIdx(i => (i + 1) % texts.length); }
      }
    }, del ? 40 : speed);
    return () => clearTimeout(t);
  }, [ci, del, idx, texts, speed]);
  return display;
}

/* ═══════════════════════════════════════════════════════════
   3D HERO CANVAS
═══════════════════════════════════════════════════════════ */
function ThreeCanvas() {
  const mountRef = useRef(null);
  useEffect(() => {
    if (!window.THREE) return;
    const T = window.THREE;
    const el = mountRef.current;
    const W = el.clientWidth || 800, H = el.clientHeight || 600;
    const scene = new T.Scene();
    const cam = new T.PerspectiveCamera(60, W / H, 0.1, 200);
    cam.position.set(0, 0, 28);
    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    // floating icosahedra
    const geo = new T.IcosahedronGeometry(0.5, 0);
    const mats = [
      new T.MeshStandardMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.5 }),
      new T.MeshStandardMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.42 }),
      new T.MeshStandardMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.38 }),
    ];
    const meshes = [];
    for (let i = 0; i < 55; i++) {
      const m = new T.Mesh(geo, mats[i % 3]);
      const r = 17 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      m.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
      m.userData = { sp: 0.004 + Math.random() * 0.006, ph: Math.random() * Math.PI * 2, rx: (Math.random() - .5) * 0.018, ry: (Math.random() - .5) * 0.018 };
      scene.add(m); meshes.push(m);
    }

    // torus knot
    const tk = new T.Mesh(
      new T.TorusKnotGeometry(3.6, 0.25, 180, 16),
      new T.MeshStandardMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.15 })
    );
    scene.add(tk);

    // particles
    const pos = new Float32Array(1200 * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - .5) * 70;
    const pg = new T.BufferGeometry();
    pg.setAttribute("position", new T.BufferAttribute(pos, 3));
    scene.add(new T.Points(pg, new T.PointsMaterial({ color: 0x334155, size: 0.11, transparent: true, opacity: 0.65 })));

    scene.add(new T.AmbientLight(0xffffff, 0.4));
    const dl = new T.DirectionalLight(0x00d4ff, 1.2); dl.position.set(10, 10, 10); scene.add(dl);
    const pl = new T.PointLight(0x7c3aed, 1.5, 60); pl.position.set(-12, -8, 5); scene.add(pl);

    let mouse = { x: 0, y: 0 };
    const onMouse = (e) => { mouse = { x: (e.clientX / window.innerWidth - .5) * 2, y: -(e.clientY / window.innerHeight - .5) * 2 }; };
    window.addEventListener("mousemove", onMouse);
    const onResize = () => { const W2 = el.clientWidth, H2 = el.clientHeight; renderer.setSize(W2, H2); cam.aspect = W2 / H2; cam.updateProjectionMatrix(); };
    window.addEventListener("resize", onResize);

    let t = 0, raf;
    const animate = () => {
      raf = requestAnimationFrame(animate); t += 0.005;
      tk.rotation.x += 0.003; tk.rotation.y += 0.005;
      meshes.forEach(m => { m.rotation.x += m.userData.rx; m.rotation.y += m.userData.ry; m.position.y += Math.sin(t * m.userData.sp + m.userData.ph) * 0.009; });
      cam.position.x += (mouse.x * 2.5 - cam.position.x) * 0.025;
      cam.position.y += (mouse.y * 1.5 - cam.position.y) * 0.025;
      cam.lookAt(0, 0, 0);
      renderer.render(scene, cam);
    };
    animate();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMouse); window.removeEventListener("resize", onResize); renderer.dispose(); if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />;
}

/* ═══════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════ */
const NAVS = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(5,8,20,0.92)" : "transparent", backdropFilter: scrolled ? "blur(18px)" : "none", borderBottom: scrolled ? "1px solid rgba(0,212,255,0.07)" : "none", transition: "all 0.4s" }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 900, color: "#00D4FF", background: "none", border: "none", cursor: "pointer", letterSpacing: "-1px" }}>
        KA<span style={{ color: "#fff" }}>.</span>
      </button>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {NAVS.map(n => (
          <button key={n} onClick={() => go(n)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(148,163,184,0.8)", fontSize: 13, letterSpacing: "0.03em", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#00D4FF"}
            onMouseLeave={e => e.target.style.color = "rgba(148,163,184,0.8)"}>
            {n}
          </button>
        ))}
        <a href={`mailto:${ME.email}`}
          style={{ fontSize: 13, padding: "7px 18px", borderRadius: 8, border: "1px solid rgba(0,212,255,0.35)", color: "#00D4FF", textDecoration: "none", transition: "background 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(0,212,255,0.08)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL PROGRESS
═══════════════════════════════════════════════════════════ */
function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => { const d = document.documentElement; setP(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 200, background: `linear-gradient(90deg,#00D4FF ${p}%,transparent ${p}%)` }} />;
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function Hero({ threeReady }) {
  const typed = useTypewriter(ME.roles);
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {threeReady && <ThreeCanvas />}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(5,8,20,0.35) 0%,rgba(5,8,20,0.72) 100%)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto", padding: "0 32px 32px", paddingTop: 110 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, border: "1px solid rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)", marginBottom: 26 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#00D4FF", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>Open to opportunities · Bengaluru & Remote</span>
        </div>

        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(46px,7vw,86px)", fontWeight: 900, color: "#E8F4FD", lineHeight: 1.0, margin: "0 0 16px", letterSpacing: "-2px" }}>
          {ME.name}
        </h1>

        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(20px,3vw,38px)", fontWeight: 700, color: "#00D4FF", minHeight: 50, marginBottom: 20 }}>
          {typed}<span style={{ borderLeft: "3px solid #00D4FF", marginLeft: 2, animation: "blink 1s infinite" }} />
        </div>

        <p style={{ color: "rgba(148,163,184,0.88)", fontSize: 17, maxWidth: 520, lineHeight: 1.75, marginBottom: 34 }}>{ME.tagline}</p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "13px 30px", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 14, cursor: "pointer", background: "linear-gradient(135deg,#00D4FF,#7C3AED)", color: "#fff", transition: "transform 0.2s,box-shadow 0.2s" }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 0 32px rgba(0,212,255,0.35)"; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}>
            View My Projects
          </button>
          <a href={`mailto:${ME.email}`}
            style={{ padding: "13px 30px", borderRadius: 10, border: "1px solid rgba(148,163,184,0.22)", color: "#CBD5E1", fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "border-color 0.2s,color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.color = "#00D4FF"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.22)"; e.currentTarget.style.color = "#CBD5E1"; }}>
            Get In Touch
          </a>
        </div>

        <div style={{ display: "flex", gap: 36, borderTop: "1px solid rgba(100,116,139,0.14)", paddingTop: 26 }}>
          {[["8.08","CGPA"], ["2","Projects"], ["6 mo","Internship"], ["2","Certificates"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 900, color: "#fff" }}>{n}</div>
              <div style={{ fontSize: 12, color: "rgba(100,116,139,0.75)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
function About() {
  const [ref, vis] = useInView();
  return (
    <section id="about" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", opacity: vis ? 1 : 0, transition: "opacity 0.8s, transform 0.8s", transform: vis ? "none" : "translateY(36px)" }}>
          <div>
            <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Who I Am</p>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD", lineHeight: 1.1, marginBottom: 18 }}>
              Fresher with<br /><span style={{ color: "#00D4FF" }}>real-world</span> experience.
            </h2>
            <p style={{ color: "rgba(148,163,184,0.82)", lineHeight: 1.82, fontSize: 15.5, marginBottom: 26 }}>{ME.about}</p>

            {/* education */}
            <div style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)", borderRadius: 12, padding: "14px 18px", marginBottom: 20 }}>
              <p style={{ fontSize: 12, color: "#00D4FF", fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Education</p>
              <p style={{ fontSize: 14, color: "#E2E8F0", fontWeight: 600 }}>B.E. Computer Science — {ME.cgpa} CGPA</p>
              <p style={{ fontSize: 13, color: "rgba(148,163,184,0.7)", marginTop: 3 }}>{ME.college} · 2021–2025</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[["📍", ME.location], ["📧", ME.email], ["📞", ME.phone]].map(([icon, val]) => (
                <span key={val} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(100,116,139,0.18)", borderRadius: 8, padding: "5px 12px", fontSize: 12, color: "#94A3B8", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {icon} {val}
                </span>
              ))}
            </div>
          </div>

          {/* terminal */}
          <div style={{ background: "rgba(5,8,20,0.8)", backdropFilter: "blur(14px)", borderRadius: 16, border: "1px solid rgba(100,116,139,0.14)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 16px", borderBottom: "1px solid rgba(100,116,139,0.1)" }}>
              {["#EF4444", "#F59E0B", "#10B981"].map(c => <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.75 }} />)}
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(100,116,139,0.55)", marginLeft: 8 }}>kalinga@portfolio ~</span>
            </div>
            <div style={{ padding: "20px 22px", fontFamily: "monospace", fontSize: 13.5, lineHeight: 2.1 }}>
              {[
                ["$", "whoami", "kalinga-a · MERN Stack Developer"],
                ["$", "cat education.txt", "B.E. CSE · GEC Gangavathi · 8.08 CGPA"],
                ["$", "cat internship.txt", "Rooman Technologies · 6 months"],
                ["$", "cat stack.json", '["React","Node","SpringBoot","MongoDB"]'],
                ["$", "cat status.txt", "fresher · open-to-work ✅"],
                ["$", "git log --oneline -1", "feat: shipped E-Learning Platform 🚀"],
              ].map(([p, c, o], i) => (
                <div key={i}>
                  <span style={{ color: "#00D4FF" }}>{p} </span><span style={{ color: "#E2E8F0" }}>{c}</span>
                  {o && <div style={{ color: "#10B981", paddingLeft: 14 }}>{o}</div>}
                </div>
              ))}
              <span style={{ color: "#00D4FF", animation: "blink 1s infinite" }}>█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════ */
function SkillBar({ s, vis, delay }) {
  return (
    <div style={{ transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-18px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#CBD5E1" }}>{s.name}</span>
        <span style={{ fontSize: 12, color: "rgba(100,116,139,0.65)", fontFamily: "monospace" }}>{s.pct}%</span>
      </div>
      <div style={{ height: 5, background: "rgba(30,41,59,0.85)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 99, width: vis ? `${s.pct}%` : "0%", background: `linear-gradient(90deg,${s.color},${s.color}88)`, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay + 100}ms` }} />
      </div>
    </div>
  );
}

function Skills() {
  const [ref, vis] = useInView(0.1);
  return (
    <section id="skills" style={{ padding: "120px 32px", background: "rgba(5,8,20,0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Technical Stack</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD" }}>What I Build With</h2>
        </div>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 48px" }}>
          {SKILLS.map((s, i) => <SkillBar key={s.name} s={s} vis={vis} delay={i * 90} />)}
        </div>
        {/* tools row */}
        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {["VS Code", "Eclipse", "IntelliJ IDEA", "Git", "GitHub", "Postman", "Firebase"].map(t => (
            <span key={t} style={{ fontSize: 12, padding: "6px 16px", borderRadius: 99, background: "rgba(15,23,42,0.7)", border: "1px solid rgba(100,116,139,0.18)", color: "#94A3B8" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════ */
function ProjectCard({ p, i }) {
  const [ref, vis] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "rgba(5,8,20,0.65)", backdropFilter: "blur(14px)", border: `1px solid ${hov ? "rgba(0,212,255,0.28)" : "rgba(100,116,139,0.12)"}`, borderRadius: 18, padding: 26, position: "relative", overflow: "hidden", transition: `all 0.45s ease ${i * 100}ms`, opacity: vis ? 1 : 0, transform: vis ? (hov ? "translateY(-5px)" : "none") : "translateY(28px)", boxShadow: hov ? "0 20px 60px rgba(0,212,255,0.07)" : "none" }}>
      {hov && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,255,0.6),transparent)" }} />}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>{p.emoji}</span>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 800, color: hov ? "#00D4FF" : "#E2E8F0", transition: "color 0.3s" }}>{p.title}</span>
        </div>
        <span style={{ fontSize: 11, color: "rgba(100,116,139,0.55)" }}>{p.period}</span>
      </div>
      <p style={{ fontSize: 13.5, color: "rgba(148,163,184,0.78)", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, padding: "3px 10px", borderRadius: 99, background: `${p.badgeColor}13`, border: `1px solid ${p.badgeColor}2a`, color: p.badgeColor, marginBottom: 14 }}>
        ⚡ {p.badge}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 14 }}>
        {p.stack.map(t => <span key={t} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 6, background: "rgba(30,41,59,0.85)", border: "1px solid rgba(100,116,139,0.18)", color: "#94A3B8" }}>{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        <a href={p.live} style={{ fontSize: 12, color: "rgba(100,116,139,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#00D4FF"} onMouseLeave={e => e.target.style.color = "rgba(100,116,139,0.6)"}>Live ↗</a>
        <a href={p.repo} style={{ fontSize: 12, color: "rgba(100,116,139,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#00D4FF"} onMouseLeave={e => e.target.style.color = "rgba(100,116,139,0.6)"}>GitHub ↗</a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Portfolio</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD" }}>Things I've Built</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════════ */
function Experience() {
  const [ref, vis] = useInView();
  return (
    <section id="experience" style={{ padding: "120px 32px", background: "rgba(5,8,20,0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Work</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD" }}>Experience</h2>
        </div>
        <div ref={ref} style={{ maxWidth: 760, margin: "0 auto" }}>
          {EXPERIENCE.map((e, i) => (
            <div key={e.company}
              style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(28px)", transition: `all 0.7s ease ${i * 120}ms`, display: "flex", gap: 24 }}>
              {/* timeline dot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: e.color, border: `3px solid rgba(0,212,255,0.15)`, marginTop: 4, flexShrink: 0 }} />
                <div style={{ width: 1, flex: 1, background: "rgba(0,212,255,0.1)", marginTop: 8 }} />
              </div>
              <div style={{ background: "rgba(5,8,20,0.65)", backdropFilter: "blur(12px)", border: "1px solid rgba(100,116,139,0.13)", borderRadius: 16, padding: 26, flex: 1, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 800, color: "#E2E8F0" }}>{e.role}</p>
                    <p style={{ fontSize: 14, color: "#00D4FF", fontWeight: 600, marginTop: 2 }}>{e.company}</p>
                    <p style={{ fontSize: 12, color: "rgba(100,116,139,0.65)", marginTop: 2 }}>{e.location}</p>
                  </div>
                  <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 99, background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.18)", color: "#00D4FF", whiteSpace: "nowrap" }}>{e.period}</span>
                </div>
                <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: "none" }}>
                  {e.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: 13.5, color: "rgba(148,163,184,0.78)", lineHeight: 1.7, marginBottom: 6, display: "flex", gap: 8 }}>
                      <span style={{ color: "#00D4FF", marginTop: 2 }}>›</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACHIEVEMENTS
═══════════════════════════════════════════════════════════ */
function Achievements() {
  const [ref, vis] = useInView();
  return (
    <section id="achievements" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Recognition</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD" }}>Achievements & Certs</h2>
        </div>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={a.title}
              style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 20px", background: "rgba(5,8,20,0.6)", border: "1px solid rgba(100,116,139,0.11)", borderRadius: 14, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: `all 0.5s ease ${i * 80}ms` }}>
              <span style={{ fontSize: 26, lineHeight: 1 }}>{a.icon}</span>
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: "#E2E8F0", marginBottom: 3 }}>{a.title}</p>
                <p style={{ fontSize: 11.5, color: "rgba(100,116,139,0.65)" }}>{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════ */
function Contact() {
  const [ref, vis] = useInView();
  return (
    <section id="contact" style={{ padding: "120px 32px" }}>
      <div ref={ref} style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(36px)", transition: "all 0.8s" }}>
        <p style={{ color: "#00D4FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Let's Connect</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, fontWeight: 900, color: "#E8F4FD", marginBottom: 14 }}>
          Ready to join a<br /><span style={{ color: "#00D4FF" }}>great team.</span>
        </h2>
        <p style={{ color: "rgba(148,163,184,0.78)", fontSize: 16, lineHeight: 1.75, marginBottom: 34, maxWidth: 460, margin: "0 auto 34px" }}>
          Fresher with internship experience, passionate about building real products. Let's build something together.
        </p>
        <a href={`mailto:${ME.email}`}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 34px", borderRadius: 12, background: "linear-gradient(135deg,#00D4FF,#7C3AED)", color: "#fff", fontWeight: 800, fontSize: 15, textDecoration: "none", transition: "transform 0.2s,box-shadow 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(0,212,255,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
          ✉ {ME.email}
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 28 }}>
          {[[`https://${ME.github}`, "GitHub"], [`https://${ME.linkedin}`, "LinkedIn"], [`tel:${ME.phone}`, ME.phone]].map(([url, label]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: "rgba(100,116,139,0.65)", textDecoration: "none", borderBottom: "1px solid transparent", paddingBottom: 2, transition: "color 0.2s,border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#00D4FF"; e.currentTarget.style.borderColor = "#00D4FF"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(100,116,139,0.65)"; e.currentTarget.style.borderColor = "transparent"; }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [threeReady, setThreeReady] = useState(false);
  useEffect(() => {
    if (window.THREE) { setThreeReady(true); return; }
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = () => setThreeReady(true);
    document.head.appendChild(s);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#050814;color:#E8F4FD;font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#050814}
        ::-webkit-scrollbar-thumb{background:#1E293B;border-radius:2px}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.35}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
      <ScrollBar />
      <Nav />
      <Hero threeReady={threeReady} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <footer style={{ borderTop: "1px solid rgba(100,116,139,0.09)", padding: "24px 32px", textAlign: "center", color: "rgba(100,116,139,0.4)", fontSize: 12 }}>
        Built with React + Three.js · {ME.name} · {new Date().getFullYear()}
      </footer>
    </>
  );
}