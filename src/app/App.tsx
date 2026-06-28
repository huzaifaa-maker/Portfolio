import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Moon,
  Palette,
  Send,
  Smartphone,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";


const CONTACT = {
  email: "huzaifaaltaf15@gmail.com",
  github: "https://github.com/huzaifaa-maker",
  linkedin: "https://www.linkedin.com/in/huzaifa-altaf-45227527b",
  whatsapp: "https://wa.me/923195639447?text=Hi%20Huzaifa%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
  resume: "/assets/Huzaifa-Altaf-Professional-CV.pdf",
  resumeDownload: "/assets/Huzaifa-Altaf-Professional-CV-Download.pdf",
};

const NAV_ITEMS = ["home", "about", "projects", "skills", "services", "education", "contact"];

const NAV_LABELS: Record<string, string> = {
  home: "Home",
  about: "About",
  projects: "Work",
  skills: "Skills",
  services: "Services",
  education: "Education",
  contact: "Contact",
};

const PROJECTS = [
  {
    title: "Rental Management System",
    description:
      "A full-stack Flutter app for property owners and tenants with role-based dashboards, JWT authentication, financial charts, complete rental CRUD, and an IoT smart meter that streams live usage and breaker state through Socket.io.",
    image: "/assets/rms-poster-new.jpeg",
    tech: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Firebase Auth", "JWT", "fl_chart"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/RMS-Rental-Management-System-App-",
    featured: true,
    fit: "contain",
  },
  {
    title: "Campus Helper — Student Services Platform",
    description:
      "A cross-platform Flutter app with 10+ campus services, custom InheritedNotifier state, shared Android/iOS/web transport, and dual Dart-demo and Node.js/MongoDB backends.",
    image: "/assets/campus-helper-poster.jpeg",
    tech: ["Flutter", "Node.js", "MongoDB", "InheritedNotifier", "Dart Backend"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Campus-Helper-App-CH-",
    featured: false,
    fit: "contain",
  },
  {
    title: "ProCompiler — AI-Powered Web Compiler",
    description:
      "A Flask web compiler with lexer, parser, semantic analysis, TAC generation, optimisation, pseudo-assembly, CodeMirror editing, and Claude-powered error explanations and fix suggestions.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=700&fit=crop&auto=format",
    tech: ["Python", "Flask", "Claude API", "Compiler Design", "CodeMirror"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Pro-Compiler-In-Python-Compiler-Construction",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio built to present projects and technical skills clearly, with performance-focused implementation and production deployment on Vercel.",
    image: "/assets/portfolio-preview.png",
    tech: ["React", "Vite", "Tailwind CSS"],
    demo: "https://huzaifa-altaf-portfolio.vercel.app/",
    github: null,
    featured: false,
  },
  {
    title: "Restaurant Website — Client Project",
    description:
      "A responsive mobile-first restaurant website delivered for a real client, featuring an interactive menu, food categories, smooth transitions, and a production Vercel deployment.",
    image: "/assets/restaurant-preview.png",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    demo: "https://food-psi-amber.vercel.app",
    github: null,
    featured: false,
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: CONTACT.github, icon: Github },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: Linkedin },
];

const TECH_STACK = [
  { name: "Flutter", icon: Smartphone },
  { name: "Dart", icon: Code2 },
  { name: "Node.js", icon: Terminal },
  { name: "Express.js", icon: Globe },
  { name: "Flask / Python", icon: Terminal },
  { name: "MongoDB / Mongoose", icon: Layers },
  { name: "Firebase", icon: Database },
  { name: "React / Vite", icon: Code2 },
  { name: "Tailwind CSS", icon: Zap },
  { name: "Git / GitHub", icon: Github },
];

const SERVICES = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform Flutter apps for Android and iOS with clean UI, auth flows, APIs, and Firebase.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive websites and dashboards built for speed, clarity, mobile users, and SEO visibility.",
  },
  {
    icon: Database,
    title: "Backend and APIs",
    description: "Node.js APIs, database design, authentication, admin workflows, and third-party integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clear mobile and web interfaces with thoughtful user flows, responsive layouts, and consistent interaction patterns.",
  },
];

const RESUME_POINTS = [
  "Cross-platform Flutter applications for Android, iOS, and web with practical state management.",
  "Real-time IoT dashboards using Socket.io, WebSocket events, and bidirectional device control.",
  "Node.js, Express, Flask, MongoDB, Firebase, JWT authentication, and role-based access.",
  "Available for Flutter internships and full-stack mobile product collaborations.",
  "Languages: Urdu (native) and English (professional working proficiency).",
];

const EDUCATION = [
  {
    years: "2023 — Present",
    title: "BS Computer Science",
    institute: "NFC Institute of Engineering and Technology, Multan",
    detail: "Pursuing Computer Science with hands-on project work across cross-platform mobile development, responsive interfaces, REST APIs, and scalable backend systems.",
  },
  {
    years: "26 Feb — 25 May 2024",
    title: "Advanced Python Programming and Applications",
    institute: "NAVTTC — Prime Minister's Youth Skills Development Programme",
    detail: "Completed an applied Python program with an A+ grade, covering programming fundamentals, automation, data handling, and practical application development.",
  },
];

const CERTIFICATES = [
  {
    title: "Advanced Python Programming and Applications",
    issuer: "NAVTTC - Prime Minister's Youth Skills Development Program",
    detail: "Completed at NFC Institute of Engineering and Technology Multan with A+ grade. Duration: 26 Feb 2024 to 25 May 2024.",
    image: "/assets/navttc-python-certificate.jpeg",
  },
  {
    title: "TechXhibit 2026 Certificate of Appreciation",
    issuer: "Air University Multan Campus",
    detail: "Awarded for participating in the Final Year Project Competition at TechXhibit 2026 and showcasing commendable effort, innovation, and technical skills. Dated: May 20, 2026.",
    image: "/assets/techxhibit-2026-certificate.jpeg",
  },
  {
    title: "International Conference Certificate of Appreciation",
    issuer: "University Gillani Law College, BZU Multan",
    detail: "Awarded for participation in the 3rd International Conference on Women's Empowerment, Law, and Justice in Pakistan: Advancing Transformative Leadership and Inclusive Legal Futures.",
    image: "/assets/women-empowerment-conference-certificate.jpeg",
  },
  {
    title: "Class Representative Award Certificate",
    issuer: "NFC Institute of Engineering and Technology Multan",
    detail: "Awarded for exceptional service as class representative from Sept 2024 to June 2025.",
    image: "/assets/class-representative-certificate.jpeg",
  },
];


async function downloadCvFile() {
  try {
    const response = await fetch(CONTACT.resumeDownload, { cache: "no-store" });
    if (!response.ok) throw new Error("CV file unavailable");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Huzaifa-Altaf-Professional-CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch {
    window.open(CONTACT.resumeDownload, "_blank", "noopener,noreferrer");
  }
}

/* Scroll reveal utility (not used right now) */
function Reveal({
  children,
  className,
  index = 0,
  as: Tag = "div",
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal--visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        el.classList.add("reveal--visible");
        io.unobserve(el);
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref as any}
      className={["reveal", "reveal--stagger", className].filter(Boolean).join(" ")}
      style={{ ...(index ? ({ "--reveal-index": index } as React.CSSProperties) : {}) }}
    >
      {children}
    </Tag>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("huzaifa-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [cvPreviewOpen, setCvPreviewOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", darkMode ? "#080c16" : "#f7f8fb");
    window.localStorage.setItem("huzaifa-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
      const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      setShowScrollTop(scrollTop > 520);
      const marker = scrollTop + Math.max(112, window.innerHeight * 0.3);
      const sections = NAV_ITEMS
        .map((id) => {
          const element = document.getElementById(id);
          return element
            ? { id, top: element.getBoundingClientRect().top + scrollTop }
            : null;
        })
        .filter((item): item is { id: string; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);
      const visible = sections.reduce(
        (current, section) => (section.top <= marker ? section.id : current),
        sections[0]?.id ?? "home"
      );
      const pageIsScrollable = pageHeight > window.innerHeight + 100;
      const atPageEnd = pageIsScrollable && scrollTop + window.innerHeight >= pageHeight - 4;

      setActiveSection(atPageEnd ? NAV_ITEMS[NAV_ITEMS.length - 1] : visible);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!cvPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCvPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cvPreviewOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        mobileMenuTriggerRef.current?.focus();
      }

      if (event.key === "Tab") {
        const container = document.getElementById("mobile-menu");
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey) {
          if (!active || active === first) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    // initial focus
    const container = document.getElementById("mobile-menu");
    const firstFocusable = container?.querySelector<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const openCv = () => {
    setCvPreviewOpen(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contactStatus === "sending") return;
    setContactStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Message service unavailable");
      setFormData({ name: "", email: "", message: "" });
      setContactStatus("sent");
      window.setTimeout(() => setContactStatus("idle"), 5000);
    } catch {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`);
      setContactStatus("idle");
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.09),transparent_42%)]" />

      <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="font-display text-xl font-bold tracking-normal"
              aria-label="Go to home"
            >
              <span className="text-primary">{"<"}</span>
              <span>Huzaifa</span>
              <span className="text-primary">{" />"}</span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={activeSection === item ? "page" : undefined}
                >
                  {NAV_LABELS[item]}
                  {activeSection === item && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute -bottom-2 left-3 right-3 h-0.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.75)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              ))}
              <ThemeButton darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <ThemeButton darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
              <button
                ref={mobileMenuTriggerRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background/96 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                    activeSection === item ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  aria-current={activeSection === item ? "page" : undefined}
                >
                  {NAV_LABELS[item]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main id="main-content" className="relative overflow-hidden">
        <section id="home" className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden pt-16 hero-redesign-section">
          {/* Animated background blobs */}
          <div className="hero-blob hero-blob-blue" />
          <div className="hero-blob hero-blob-purple" />
          <div className="hero-blob hero-blob-teal" />
          {/* Grid overlay */}
          <div className="hero-grid-overlay" />
          {/* Particle dots */}
          <div className="hero-particles" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="hero-particle" style={{ "--i": i } as React.CSSProperties} />
            ))}
          </div>

          <div className="relative z-20 mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-12">
            {/* ── LEFT COLUMN ── */}
            <div className="min-w-0 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-center"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-xs font-semibold text-green-300">Available for internships and select freelance work</span>
              </motion.div>

              {/* Hello */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-primary font-semibold text-lg mb-2"
              >
                Hello, I’m Huzaifa
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="font-display font-black text-white leading-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", textWrap: "balance" }}
              >
                Huzaifa Altaf
              </motion.h1>

              {/* Animated role */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="mt-4"
              >
                <TypewriterRole />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-5 mx-auto lg:mx-0 max-w-xl text-base text-white/70 leading-relaxed sm:text-lg"
              >
                I build full-stack Flutter products with real-time IoT data, responsive interfaces, REST APIs, authentication, and dependable cloud backends.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
              >
                <button onClick={() => scrollToSection("projects")} className="hero-btn-primary inline-flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection("contact")} className="hero-btn-secondary inline-flex items-center gap-2">
                  Start a conversation
                  <Send className="w-4 h-4" />
                </button>
                <button onClick={downloadCvFile} className="hero-btn-secondary inline-flex items-center gap-2">
                  Resume
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex justify-center lg:justify-start gap-3"
              >
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink key={social.label} href={social.href} label={social.label} icon={<social.icon className="h-5 w-5" />} />
                ))}
                <SocialLink href={`mailto:${CONTACT.email}`} label="Email" icon={<Mail className="h-5 w-5" />} external={false} />
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: Coding image with stat overlays ── */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 hidden w-[52vw] lg:block"
            >
              <div className="hero-portrait-stage">
                <img
                  src="/assets/huzaifa-bw-portrait.png"
                  alt="Huzaifa Altaf"
                  className="hero-portrait-image"
                  width="1254"
                  height="1254"
                  fetchPriority="high"
                />
              </div>

            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll-indicator">
            <span />
          </div>
        </section>

        <CinematicAbout />

        <Section id="projects" eyebrow="Projects" title="Selected work across Flutter, IoT, APIs, and responsive web.">
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group panel overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}
              >
                <div className={`grid min-w-0 ${project.featured ? "lg:grid-cols-[0.78fr_1fr]" : ""}`}>
                  <div className={`relative overflow-hidden bg-secondary ${project.fit === "contain" ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[360px] lg:max-h-[430px]" : "aspect-video"}`}>
                    <img
                      src={project.image}
                      alt={`Preview for ${project.title}`}
                      className={`w-full h-full transition-transform duration-500 ${project.fit === "contain" ? "object-contain bg-white p-3 sm:p-4" : "object-cover group-hover:scale-105"}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    {project.fit !== "contain" && <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />}
                  </div>
                  <div className="flex min-w-0 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors sm:text-2xl">{project.title}</h3>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-lg border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6 text-sm font-semibold">
                      <a
                        href={project.demo}
                        target={project.demo.startsWith("http") ? "_blank" : undefined}
                        rel={project.demo.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        {project.demo.startsWith("http") ? <ExternalLink className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                        {project.demo.startsWith("http") ? "Live site" : "Request walkthrough"}
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="exhibition" eyebrow="Exhibition" title="Rental Management System live showcase.">
          <div className="mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="panel overflow-hidden">
              <div className="relative overflow-hidden bg-secondary sm:aspect-[16/10] lg:aspect-[16/9]">
                <img src="/assets/exhibition-rms-showcase.jpeg" alt="Huzaifa presenting the Rental Management System at an Air University Multan exhibition" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="hidden absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent sm:block" />
                <div className="border-t border-border bg-card/95 p-5 backdrop-blur-xl sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:flex sm:items-center sm:justify-between sm:gap-3 sm:rounded-lg sm:border sm:border-white/10 sm:bg-background/82">
                  <div>
                    <p className="text-sm font-semibold text-primary">Air University Multan Exhibition</p>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">RMS live demo setup</h3>
                  </div>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary sm:mt-0">
                    <Award className="h-4 w-4" />
                    Project showcase
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 border-y border-border bg-background/80 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Skills</p>
              <h2 id="skills-title" className="mt-3 font-display text-2xl font-bold sm:text-3xl">Tools I use to take products from idea to working software.</h2>
            </div>
            <MovingTechRow />
          </div>
        </section>

        <Section id="services" eyebrow="Services" title="Development services for clients and teams.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="panel p-5 hover:border-primary/40 transition-colors sm:p-6">
                <service.icon className="w-7 h-7 text-primary mb-5" />
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{service.description}</p>
                <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                  Start discussion <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="A computer science foundation grounded in practical work.">
          <div className="grid gap-5 md:grid-cols-2">
            {EDUCATION.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="panel p-5 hover:border-primary/40 transition-colors sm:p-6"
              >
                <div className="flex items-center gap-3 text-primary mb-5">
                  <GraduationCap className="w-6 h-6" />
                  <span className="font-mono text-sm">{item.years}</span>
                </div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="font-semibold mt-3">{item.institute}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="certificates" eyebrow="Certificates" title="Certificates and showcase achievements.">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATES.map((certificate, index) => {
                const isFeatured = index === 0;

                return (
                  <motion.article
                    key={certificate.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`group panel overflow-hidden flex flex-col h-full ${isFeatured ? "relative" : ""}`}
                  >
                    {isFeatured && (
                      <div className="absolute right-3 top-3 z-10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                          <Award className="w-4 h-4" /> Featured
                        </span>
                      </div>
                    )}

                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden bg-secondary sm:aspect-[16/10]">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="h-full w-full object-contain bg-transparent p-3 sm:p-5"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">{certificate.title}</h3>
                          <p className="mt-2 text-sm font-semibold text-muted-foreground">{certificate.issuer}</p>
                        </div>


                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">{certificate.detail}</p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-semibold text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" /> Certificate
                        </span>

                        <a
                          href={certificate.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                          aria-label={`View certificate: ${certificate.title}`}
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Section>



        <Section id="resume" eyebrow="Résumé" title="The short version for recruiters and collaborators.">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="panel p-5 sm:p-7">
              <h3 className="font-display text-xl font-bold sm:text-2xl">Huzaifa Altaf</h3>
              <p className="text-muted-foreground mt-2">Flutter Developer · Full-Stack Mobile</p>
              <div className="grid grid-cols-1 gap-3 mt-6 sm:flex sm:flex-wrap">
                <button type="button" onClick={openCv} className="btn-primary w-full sm:w-auto">
                  Preview CV <ExternalLink className="w-4 h-4" />
                </button>
                <button type="button" onClick={downloadCvFile} className="btn-secondary w-full sm:w-auto">
                  Download CV <Download className="w-4 h-4" />
                </button>
                <a href={`mailto:${CONTACT.email}`} className="btn-secondary w-full sm:w-auto">
                  Email Me <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="panel p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {RESUME_POINTS.map((point) => (
                  <div key={point} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Tell me what you want to build.">
          <div className="grid gap-3 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="panel p-5 sm:p-7">
              <h3 className="font-display text-xl font-bold mb-6 sm:text-2xl">Contact details</h3>
              <div className="space-y-4">
                <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" href={`mailto:${CONTACT.email}`} value={CONTACT.email} />
                <ContactItem icon={<Github className="w-5 h-5" />} label="GitHub" href={CONTACT.github} value="github.com/huzaifaa-maker" />
                <ContactItem icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href={CONTACT.linkedin} value="linkedin.com/in/huzaifa-altaf-45227527b" />
                <ContactItem icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" href={CONTACT.whatsapp} value="+92 319 5639447" />
              </div>
              <div className="mt-7 rounded-lg border border-border bg-secondary p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For internships, freelance work, project demos, or collaboration requests, send a short message with your idea and timeline.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="panel p-5 space-y-5 sm:p-7">
              <FormField label="Name">
                <input
                  required
                  name="name"
                  autoComplete="name"
                  maxLength={80}
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="form-input"
                  placeholder="Your name"
                />
              </FormField>
              <FormField label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={160}
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="form-input"
                  placeholder="you@example.com"
                />
              </FormField>
              <FormField label="Project Details">
                <textarea
                  required
                  name="message"
                  maxLength={2000}
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="form-input resize-none"
                  placeholder="Tell me about your app, website, dashboard, or idea..."
                />
              </FormField>
              <button type="submit" className="btn-primary w-full justify-center" disabled={contactStatus === "sending"}>
                {contactStatus === "sent" ? (
                  <>
                    <Check className="w-5 h-5" /> Message sent
                  </>
                ) : contactStatus === "sending" ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground" aria-live="polite">
                {contactStatus === "sent"
                  ? "Thanks—your message reached my inbox."
                  : "Your details are used only to reply. If direct delivery is unavailable, your email app will open instead."}
              </p>
            </form>
          </div>
        </Section>
      </main>

      <footer className="relative border-t border-border py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-display text-lg font-bold">
              <span className="text-primary">{"<"}</span>Huzaifa<span className="text-primary">{" />"}</span>
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              © {new Date().getFullYear()} Huzaifa Altaf. Designed and built with React, TypeScript, and care.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </footer>

      {cvPreviewOpen && <CvPreviewModal onClose={() => setCvPreviewOpen(false)} />}

      <motion.a
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-4 z-40 inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-950/30 transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:left-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-4 z-40 rounded-lg bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 sm:bottom-6 sm:right-6 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Scroll to top"
        aria-hidden={!showScrollTop}
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

function ThemeButton({ darkMode, onClick }: { darkMode: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors" aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}>
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

function CvPreviewModal({ onClose }: { onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const openInNewTab = () => {
    window.open(CONTACT.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[80] bg-background/85 p-3 backdrop-blur-xl sm:p-5" role="dialog" aria-modal="true" aria-labelledby="cv-preview-title">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-3 sm:p-4">
          <div>
            <p id="cv-preview-title" className="font-display text-lg font-bold sm:text-xl">Huzaifa Altaf CV</p>
            <p className="text-xs text-muted-foreground sm:text-sm">Preview inside the portfolio</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={downloadCvFile} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-sm">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button type="button" onClick={openInNewTab} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-sm">
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">New tab</span>
            </button>
            <button ref={closeButtonRef} type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-sm" aria-label="Close CV preview">
              <X className="h-4 w-4" />
              Close
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-background">
          <iframe title="Huzaifa Altaf Professional CV" src={`${CONTACT.resume}#toolbar=1&navpanes=0&view=FitH`} className="h-full w-full border-0" />
        </div>
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:text-sm">{eyebrow}</p>
          <h2 className="font-display text-3xl font-bold tracking-normal leading-tight sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function CinematicAbout() {
  const process = [
    { step: "01", title: "Understand", detail: "Clarify the user, the workflow, and what a successful result needs to do." },
    { step: "02", title: "Shape", detail: "Turn requirements into a focused interface, data model, and build plan." },
    { step: "03", title: "Build", detail: "Develop the product in testable pieces with clean, maintainable foundations." },
    { step: "04", title: "Refine", detail: "Polish edge cases, responsiveness, accessibility, and the final handoff." },
  ];

  return (
    <section id="about" className="cinematic-about relative scroll-mt-24 overflow-hidden bg-[#020202] py-16 sm:py-20 lg:py-28">
      <div className="cinematic-grid" />
      <div className="about-atmosphere about-atmosphere-no-portrait" />

      <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">About / approach</p>
          <h2 className="font-display text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Practical engineering. <span className="text-primary">Polished delivery.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">
            I’m a Computer Science undergraduate building full-stack Flutter products across mobile, IoT, real-time data, REST APIs, and cloud backends. I care about the details users notice—and the technical foundations they should never have to think about.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {[
              { value: "5+", label: "Selected builds" },
              { value: "1", label: "Certification" },
              { value: "3", label: "Product areas" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
                <p className="font-display text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Removed skill focus chips to match requested About section content. */}
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-white/62" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 sm:p-7"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">How I work</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">A clear path from idea to handoff.</h3>
            </div>
            <Code2 className="hidden h-8 w-8 text-primary sm:block" aria-hidden="true" />
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {process.map((item) => (
              <li key={item.step} className="group rounded-xl border border-white/10 bg-black/25 p-5 transition-colors hover:border-primary/45">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary">{item.step}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h4 className="font-display mt-5 text-lg font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/52">{item.detail}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

function MovingTechRow() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {TECH_STACK.map((tech) => (
        <div key={tech.name} className="marquee-card min-h-16">
          <tech.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          <span className="text-sm font-semibold">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

function TypewriterRole() {
  const roles = useMemo(
    () => ["Flutter Developer", "Full-Stack Developer", "React Developer", "UI/UX Advocate"],
    []
  );
  const [displayText, setDisplayText] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const charIndex = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Avoid setState inside the effect body; keep current state.
      return;
    }


    const type = () => {
      const currentRole = roles[roleIndex];
      if (typing) {
        if (charIndex.current < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex.current + 1));
          charIndex.current += 1;
          timeoutRef.current = window.setTimeout(type, 80);
        } else {
          setTyping(false);
          timeoutRef.current = window.setTimeout(type, 1200);
        }
      } else {
        if (charIndex.current > 0) {
          setDisplayText(currentRole.slice(0, charIndex.current - 1));
          charIndex.current -= 1;
          timeoutRef.current = window.setTimeout(type, 40);
        } else {
          const nextIndex = (roleIndex + 1) % roles.length;
          setRoleIndex(nextIndex);
          setTyping(true);
          timeoutRef.current = window.setTimeout(type, 200);
        }
      }
    };

    timeoutRef.current = window.setTimeout(type, 500);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [roleIndex, roles, typing]);

  return (
    <p className="hero-role-wrapper text-base font-semibold text-blue-300 sm:text-lg">
      <span className="hero-role-typed">{displayText}</span>
      <span className="hero-typewriter-cursor" aria-hidden="true" />
    </p>
  );
}

function SocialLink({ href, label, icon, external = true }: { href: string; label: string; icon: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="rounded-lg border border-border bg-card p-3 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, label, href, value }: { icon: ReactNode; label: string; href: string; value: string }) {
  return (
    <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-secondary p-3 transition-colors hover:border-primary/40 sm:gap-4 sm:p-4">
      <span className="shrink-0 text-primary">{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block break-words text-sm text-muted-foreground">{value}</span>
      </span>
    </a>
  );
}

function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-2">{label}</span>
      {children}
    </label>
  );
}
