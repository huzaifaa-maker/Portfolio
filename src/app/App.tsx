import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Facebook,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Moon,
  Palette,
  Send,
  Smartphone,
  Star,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const CONTACT = {
  email: "huzaifaltaf15@icloud.com",
  github: "https://github.com/huzaifaa-maker",
  linkedin: "https://www.linkedin.com/in/huzaifa-altaf-45227527b",
  instagram: "https://www.instagram.com/huxaifa.here",
  facebook: "https://www.facebook.com/share/18wwqEmL9T/",
  fiverr: "https://www.fiverr.com/pe/Dx5QwX",
  whatsapp: "https://wa.me/923195639447?text=Hi%20Huzaifa%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",
  resume: "/assets/Huzaifa-Altaf-Professional-CV.pdf",
  resumeDownload: "/assets/Huzaifa-Altaf-Professional-CV-Download.pdf",
};

const NAV_ITEMS = ["home", "about", "education", "projects", "exhibition", "services", "certificates", "reviews", "resume", "contact"];

const ROLES = ["Full Stack Developer", "Flutter App Developer", "Web Developer", "Software Enthusiast", "Tech Problem Solver", "UI/UX Advocate"];
const LAPTOP_FRAME_COUNT = 240;

const PROJECTS = [
  {
    title: "Rental Management System",
    description:
      "A Flutter rental management app for owners and tenants with Firebase-ready auth, dashboards, properties, tenants, rent payments, bills, maintenance, and leases.",
    image: "/assets/rms-poster-new.jpeg",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/RMS-Rental-Management-System-App-",
    featured: true,
    fit: "contain",
  },
  {
    title: "Campus Helper App",
    description:
      "A complete Flutter campus assistant with student authentication, chat, marketplace, cafeteria, library, exams, events, notifications, admin tools, MongoDB backend support, and Firebase setup notes.",
    image: "/assets/campus-helper-poster.jpeg",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Campus-Helper-App-CH-",
    featured: false,
    fit: "contain",
  },
  {
    title: "ProCompiler",
    description:
      "A compiler construction lab project with a Flask interface, lexer/parser logic for a C-like language, source analysis, and generated report/presentation assets.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=700&fit=crop&auto=format",
    tech: ["Python", "Flask", "Compiler Design"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Pro-Compiler-In-Python-Compiler-Construction",
    featured: false,
  },
  {
    title: "Parallel Performance Analyzer",
    description:
      "A Streamlit analytics app for CS-322 that evaluates Prefix Sum and Monte Carlo Integration performance with charts, scalability experiments, and report-style outputs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&auto=format",
    tech: ["Python", "Streamlit", "Plotly", "NumPy"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/parallel_performance_analyzer",
    featured: false,
  },
  {
    title: "React Portfolio Website",
    description:
      "A previous portfolio project built with React, Vite, Chakra UI, animation, routing, education/experience sections, and a contact-focused layout.",
    image: "/assets/portfolio-preview.jpeg",
    tech: ["React", "Vite", "Chakra UI"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Portfolio-React-js-",
    featured: false,
  },
  {
    title: "3D Unity Beginner Game",
    description:
      "A Unity 3D platformer project with start/end screens, two levels, player movement and jumping, coin collection, moving platforms, enemy collision, sky scenery, and cloud animation.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=900&h=700&fit=crop&auto=format",
    tech: ["Unity", "C#", "3D Game"],
    demo: "#contact",
    github: "https://github.com/huzaifaa-maker/Unity-3D-Game-JumpQuest-",
    featured: false,
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: CONTACT.github, icon: Github },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: Linkedin },
  { label: "Instagram", href: CONTACT.instagram, icon: Instagram },
  { label: "Facebook", href: CONTACT.facebook, icon: Facebook },
  { label: "Fiverr", href: CONTACT.fiverr, icon: Globe },
];

const TECH_STACK = [
  { name: "Flutter", icon: Smartphone },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Terminal },
  { name: "Firebase", icon: Database },
  { name: "MongoDB", icon: Layers },
  { name: "Tailwind CSS", icon: Zap },
  { name: "Figma", icon: Palette },
  { name: "Unity", icon: Gamepad2 },
  { name: "C#", icon: Code2 },
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
    description: "Professional interface layouts in Figma with clean components, user flows, and responsive screens.",
  },
];

const RESUME_POINTS = [
  "I design and build mobile apps, websites, dashboards, and backend-connected software with a practical product mindset.",
  "My strongest work combines Flutter interfaces, React web experiences, Firebase/MongoDB data flows, and clean API integration.",
  "I turn academic and freelance-style ideas into usable demos with clear screens, working features, and presentable documentation.",
  "I am ready to support internships, client projects, and collaborations that need dependable development and polished delivery.",
];

const EDUCATION = [
  {
    years: "2019 - 2020",
    title: "Matriculation",
    institute: "Muslim Group of Schools and Colleges",
    detail: "Completed secondary education with a strong foundation in science and mathematics, developing problem-solving skills and academic discipline.",
  },
  {
    years: "2021 - 2022",
    title: "Intermediate",
    institute: "Muslim Group of Schools and Colleges",
    detail: "Focused on pre-engineering studies with deeper knowledge in physics, chemistry, mathematics, and analytical thinking.",
  },
  {
    years: "2023 - Present",
    title: "Bachelor's Degree",
    institute: "NFC Institute of Engineering and Technology, Multan",
    detail: "Pursuing Computer Science with focus on software development, UI/UX principles, mobile apps, web systems, databases, and modern technologies.",
  },
];

const CERTIFICATES = [
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
  {
    title: "Advanced Python Programming and Applications",
    issuer: "NAVTTC - Prime Minister's Youth Skills Development Program",
    detail: "Completed at NFC Institute of Engineering and Technology Multan with A+ grade. Duration: 26 Feb 2024 to 25 May 2024.",
    image: "/assets/navttc-python-certificate.jpeg",
  },
];

const DEFAULT_REVIEWS = [
  {
    name: "Project Collaborator",
    role: "University teammate",
    rating: 5,
    message: "Huzaifa takes ownership, communicates clearly, and turns project requirements into clean working software.",
  },
  {
    name: "Course Project Lead",
    role: "Academic reviewer",
    rating: 5,
    message: "Strong practical work across Flutter, Python dashboards, and backend integration. The portfolio presents the work professionally.",
  },
  {
    name: "Client Preview",
    role: "Freelance-ready feedback",
    rating: 4,
    message: "The UI is clean, responsive, and easy to scan. Project cards make it clear what he can build for clients.",
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

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reviews, setReviews] = useState(DEFAULT_REVIEWS);
  const [reviewForm, setReviewForm] = useState({ name: "", role: "", rating: 5, message: "" });
  const [cvPreviewOpen, setCvPreviewOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const savedReviews = window.localStorage.getItem("huzaifa-portfolio-reviews");
    if (savedReviews) {
      try {
        const parsed = JSON.parse(savedReviews) as typeof DEFAULT_REVIEWS;
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
        }
      } catch {
        window.localStorage.removeItem("huzaifa-portfolio-reviews");
      }
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 520);
      const current = NAV_ITEMS.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    setFormSubmitted(true);

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
    } catch {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    } finally {
      window.setTimeout(() => setFormSubmitted(false), 3500);
    }
  };

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextReviews = [
      {
        name: reviewForm.name.trim(),
        role: reviewForm.role.trim() || "Website visitor",
        rating: reviewForm.rating,
        message: reviewForm.message.trim(),
      },
      ...reviews,
    ].slice(0, 12);
    setReviews(nextReviews);
    window.localStorage.setItem("huzaifa-portfolio-reviews", JSON.stringify(nextReviews));
    setReviewForm({ name: "", role: "", rating: 5, message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground font-['Inter']">
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_42%),linear-gradient(180deg,transparent,rgba(11,15,25,0.26))]" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="font-['Space_Grotesk'] text-xl font-bold tracking-normal"
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
                  className={`capitalize px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item}
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
                aria-label="Toggle menu"
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
                  className={`capitalize text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                    activeSection === item ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="relative overflow-hidden">
        <section id="home" className="relative min-h-screen flex items-center scroll-mt-20 overflow-hidden hero-redesign-section">
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

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center relative z-20 py-28 lg:py-0 min-h-screen">
            {/* ── LEFT COLUMN ── */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-xs font-semibold text-green-400">Available for internships and freelance work</span>
              </motion.div>

              {/* Hello */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-primary font-semibold text-lg mb-2"
              >
                Hello, I am
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="font-['Space_Grotesk'] font-black text-white leading-tight"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              >
                Huzaifa Altaf
              </motion.h1>

              {/* Animated role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 h-8 overflow-hidden"
              >
                <motion.p
                  key={ROLES[currentRole]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45 }}
                  className="text-lg font-semibold text-white/60"
                >
                  {ROLES[currentRole]}
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-5 mx-auto lg:mx-0 max-w-md text-base text-white/55 leading-relaxed"
              >
                I build modern mobile and web applications with clean interfaces, practical backend logic, and a strong focus on real-world usefulness.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
              >
                <button onClick={() => scrollToSection("projects")} className="hero-btn-primary inline-flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection("contact")} className="hero-btn-secondary inline-flex items-center gap-2">
                  Hire Me
                  <Send className="w-4 h-4" />
                </button>
                <button onClick={downloadCvFile} className="hero-btn-secondary inline-flex items-center gap-2">
                  Download CV
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
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
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
            >
              {/* Glow behind image */}
              <div className="hero-img-glow" />

              {/* Main image container */}
              <div className="hero-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&h=620&fit=crop&auto=format"
                  alt="Coding workspace"
                  className="hero-img"
                />
                {/* Bottom gradient fade */}
                <div className="hero-img-fade" />
              </div>

              {/* Stat: Projects — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="hero-stat-overlay hero-stat-overlay-tl"
              >
                <span className="hero-overlay-value">6+</span>
                <span className="hero-overlay-label">Projects</span>
              </motion.div>

              {/* Stat: Commits — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95 }}
                className="hero-stat-overlay hero-stat-overlay-br"
              >
                <span className="hero-overlay-value">500+</span>
                <span className="hero-overlay-label">Commits</span>
              </motion.div>

              {/* Contact card — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="hero-contact-card"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-['Space_Grotesk'] font-bold text-white text-sm truncate">Huzaifa Altaf</p>
                  <p className="text-xs text-white/50 truncate mt-0.5">{CONTACT.email}</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll-indicator">
            <span />
          </div>
        </section>

        <CinematicAbout />

        <section aria-label="Technology stack" className="border-y border-border bg-background/80 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-8 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">Core tech stack</p>
            <MovingTechRow />
          </div>
        </section>

        <Section id="education" eyebrow="Education" title="Academic background and learning journey.">
          <div className="grid gap-5 md:grid-cols-3">
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
                <h3 className="font-['Space_Grotesk'] text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="font-semibold mt-3">{item.institute}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Featured work built across apps, web, systems, and games.">
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
                    />
                    {project.fit !== "contain" && <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />}
                  </div>
                  <div className="flex min-w-0 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold group-hover:text-primary transition-colors sm:text-2xl">{project.title}</h3>
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
                      <a href={project.demo} className="inline-flex items-center gap-2 text-primary hover:underline">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                        <Github className="w-4 h-4" /> Code
                      </a>
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
                <img src="/assets/exhibition-rms-showcase.jpeg" alt="Professional showcase image of the Rental Management System exhibition demo" className="h-full w-full object-cover" />
                <div className="hidden absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent sm:block" />
                <div className="border-t border-border bg-card/95 p-5 backdrop-blur-xl sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:flex sm:items-center sm:justify-between sm:gap-3 sm:rounded-lg sm:border sm:border-white/10 sm:bg-background/82">
                  <div>
                    <p className="text-sm font-semibold text-primary">Air University Multan Exhibition</p>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold sm:text-2xl">RMS live demo setup</h3>
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

        <Section id="services" eyebrow="Services" title="Development services for clients and teams.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="panel p-5 hover:border-primary/40 transition-colors sm:p-6">
                <service.icon className="w-7 h-7 text-primary mb-5" />
                <h3 className="font-['Space_Grotesk'] text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{service.description}</p>
                <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                  Start discussion <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="certificates" eyebrow="Certificates" title="Certificates and showcase achievements.">
          <div className="grid gap-5 lg:grid-cols-2">
            {CERTIFICATES.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="panel overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white sm:aspect-[16/10]">
                  <img src={certificate.image} alt={certificate.title} className="w-full h-full object-contain p-2 sm:p-3" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                    <Award className="w-5 h-5" />
                    Certificate
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold mt-4 sm:text-2xl">{certificate.title}</h3>
                  <p className="font-semibold mt-2">{certificate.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{certificate.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="reviews" eyebrow="Reviews" title="What people say, and a place for visitors to leave feedback.">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] items-start">
            <div className="min-w-0">
              <MovingReviewRow reviews={reviews} />
            </div>

            <form onSubmit={handleReviewSubmit} className="panel p-5 space-y-5 sm:p-7">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold sm:text-2xl">Leave a review</h3>
                <p className="text-sm text-muted-foreground mt-2">Your review is saved in this browser with local storage.</p>
              </div>

              <FormField label="Name">
                <input
                  required
                  value={reviewForm.name}
                  onChange={(event) => setReviewForm({ ...reviewForm, name: event.target.value })}
                  className="form-input"
                  placeholder="Your name"
                />
              </FormField>

              <FormField label="Role or relation">
                <input
                  value={reviewForm.role}
                  onChange={(event) => setReviewForm({ ...reviewForm, role: event.target.value })}
                  className="form-input"
                  placeholder="Client, classmate, recruiter..."
                />
              </FormField>

              <div>
                <span className="block text-sm font-semibold mb-2">Rating</span>
                <div role="radiogroup" aria-label="Rating" className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        role="radio"
                        aria-checked={rating === reviewForm.rating}
                        tabIndex={rating === reviewForm.rating ? 0 : -1}
                        onClick={() => setReviewForm({ ...reviewForm, rating })}
                        className={`rounded-lg border p-2 transition-colors ${
                          rating <= reviewForm.rating ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
                        }`}
                        aria-label={`${rating} star rating`}
                      >
                      <Star className="w-5 h-5" fill={rating <= reviewForm.rating ? "currentColor" : "none"} />
                    </button>
                  ))}
                </div>
              </div>

              <FormField label="Review">
                <textarea
                  required
                  rows={4}
                  value={reviewForm.message}
                  onChange={(event) => setReviewForm({ ...reviewForm, message: event.target.value })}
                  className="form-input resize-none"
                  placeholder="Share your feedback about my work or portfolio..."
                />
              </FormField>

              <button type="submit" className="btn-primary w-full justify-center">
                Add Review <Star className="w-4 h-4" />
              </button>
            </form>
          </div>
        </Section>

        <Section id="resume" eyebrow="Resume" title="A quick hiring snapshot.">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="panel p-5 sm:p-7">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold sm:text-2xl">Huzaifa Altaf</h3>
              <p className="text-muted-foreground mt-2">Full Stack Developer and Flutter App Developer</p>
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
              <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-6 sm:text-2xl">Contact details</h3>
              <div className="space-y-4">
                <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" href={`mailto:${CONTACT.email}`} value={CONTACT.email} />
                <ContactItem icon={<Github className="w-5 h-5" />} label="GitHub" href={CONTACT.github} value="github.com/huzaifaa-maker" />
                <ContactItem icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href={CONTACT.linkedin} value="linkedin.com/in/huzaifa" />
                <ContactItem icon={<Instagram className="w-5 h-5" />} label="Instagram" href={CONTACT.instagram} value="instagram.com/huxaifa.here" />
                <ContactItem icon={<Facebook className="w-5 h-5" />} label="Facebook" href={CONTACT.facebook} value="facebook.com/share/18wwqEmL9T" />
                <ContactItem icon={<Globe className="w-5 h-5" />} label="Fiverr" href={CONTACT.fiverr} value="fiverr.com/pe/Dx5QwX" />
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
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="form-input"
                  placeholder="you@example.com"
                />
              </FormField>
              <FormField label="Project Details">
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="form-input resize-none"
                  placeholder="Tell me about your app, website, dashboard, or idea..."
                />
              </FormField>
              <button type="submit" className="btn-primary w-full justify-center">
                {formSubmitted ? (
                  <>
                    <Check className="w-5 h-5" /> Message Ready
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground">Your message is sent directly to my email. The first message may ask me to activate the form once.</p>
            </form>
          </div>
        </Section>
      </main>

      <footer className="relative border-t border-border py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-bold">
              <span className="text-primary">{"<"}</span>Huzaifa<span className="text-primary">{" />"}</span>
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              © {new Date().getFullYear()} Huzaifa Altaf. Full Stack and Flutter developer portfolio for projects, services, resume, and contact.
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

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-4 z-40 rounded-lg bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 sm:bottom-6 sm:right-6 ${
          showScrollTop ? "opacity-100" : "opacity-80"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}

function ThemeButton({ darkMode, onClick }: { darkMode: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors" aria-label="Toggle dark mode">
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

function CvPreviewModal({ onClose }: { onClose: () => void }) {
  const openInNewTab = () => {
    window.open(CONTACT.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[80] bg-background/85 p-3 backdrop-blur-xl sm:p-5" role="dialog" aria-modal="true" aria-label="CV preview">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-3 sm:p-4">
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-bold sm:text-xl">Huzaifa Altaf CV</p>
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
            <button type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-sm" aria-label="Close CV preview">
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
    <section id={id} className="py-14 scroll-mt-20 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:text-sm">{eyebrow}</p>
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-normal leading-tight sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function HeroProjectVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.86)_32%,rgba(2,2,2,0.2)_68%,#020202_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020202] via-[#020202]/72 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020202] via-[#020202]/70 to-transparent" />
    </div>
  );
}

function LaptopFrameShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 95, damping: 28, restDelta: 0.001 });
  const frameIndex = useTransform(smoothProgress, [0, 0.92], [0, LAPTOP_FRAME_COUNT - 1]);
  const titleOpacity = useTransform(smoothProgress, [0.08, 0.22, 0.76, 0.9], [0, 1, 1, 0]);
  const canvasScale = useTransform(smoothProgress, [0, 0.75, 0.95], [1, 1.05, 1.12]);

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= LAPTOP_FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/assets/laptop-frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = img.onerror = () => {
        if (!mounted) return;
        loadedCount += 1;
        setProgress(Math.round((loadedCount / LAPTOP_FRAME_COUNT) * 100));
        if (loadedCount === LAPTOP_FRAME_COUNT) setLoaded(true);
      };
      images.push(img);
    }

    imagesRef.current = images;
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !loaded) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = () => {
      const index = Math.max(0, Math.min(LAPTOP_FRAME_COUNT - 1, Math.round(frameIndex.get())));
      const img = imagesRef.current[index];
      if (!img || !img.complete || !img.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const scale = Math.max(rect.width / img.width, rect.height / img.height);
      const width = img.width * scale;
      const height = img.height * scale;
      const x = (rect.width - width) / 2;
      const y = (rect.height - height) / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, x, y, width, height);
    };

    drawFrame();
    const unsubscribe = frameIndex.on("change", drawFrame);
    window.addEventListener("resize", drawFrame);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", drawFrame);
    };
  }, [frameIndex, loaded]);

  return (
    <section ref={containerRef} className="laptop-sequence-section relative bg-[#020202]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#020202]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.42em] text-primary">Syncing laptop frames {progress}%</p>
            <div className="h-px w-64 overflow-hidden bg-white/10">
              <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="cinematic-grid" />
        <motion.div style={{ scale: canvasScale }} className="h-full w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,2,2,0.48)_72%,#020202_100%)]" />

        <motion.div style={{ opacity: titleOpacity }} className="absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-4 text-center">
          <h2 className="font-['Space_Grotesk'] text-4xl font-black uppercase leading-none tracking-normal text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            Welcome to my <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.55em] text-primary sm:text-xs">Core system interface</p>
        </motion.div>
      </div>
    </section>
  );
}

function CinematicAbout() {
  const aboutCards = [
    { icon: Code2, title: "Languages", desc: "Flutter, Dart, React, TypeScript, Node.js, Python" },
    { icon: GraduationCap, title: "Education", desc: "BS Computer Science at NFC IET Multan" },
    { icon: Award, title: "Projects", desc: "Mobile apps, dashboards, web systems, and Unity work" },
  ];

  return (
    <section id="about" className="cinematic-about relative overflow-hidden bg-[#020202] pb-16 scroll-mt-20 sm:pb-20 lg:min-h-screen lg:py-24">
      <div className="cinematic-grid" />
      <div className="about-portrait-panel">
        <img
          src="/assets/huzaifa-about-portrait.png"
          alt="Black-and-white portrait of Huzaifa Altaf"
          className="about-portrait-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="about-atmosphere" />

      <div className="relative z-20 mx-auto grid max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[46%_54%] lg:items-center lg:px-8 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-start-2 lg:pl-12"
        >
          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-primary">System info</p>
          <h2 className="font-['Space_Grotesk'] text-4xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">
            About Me<span className="text-primary">.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/62 sm:text-xl">
            I am a final-year Computer Science student and developer focused on practical software: Flutter apps, responsive React interfaces, API-driven dashboards, and database-backed systems that solve real workflow problems.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutCards.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-primary/45">
                <item.icon className="mb-5 h-6 w-6 text-primary" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.38em] text-white/40">Core tech stack</p>
            <div className="flex flex-wrap gap-3">
              {TECH_STACK.slice(0, 8).map((tool) => (
                <div key={tool.name} className="group relative flex h-14 w-14 items-center justify-center rounded-lg border border-white/8 bg-black/45 transition-colors hover:border-primary/50">
                  <tool.icon className="h-6 w-6 text-white/45 transition-colors group-hover:text-primary" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MovingTechRow() {
  const movingItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track hover:[animation-play-state:paused]">
        {movingItems.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="marquee-card min-w-[132px] sm:min-w-[160px]">
            <tech.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            <span className="text-sm font-semibold whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovingReviewRow({ reviews }: { reviews: typeof DEFAULT_REVIEWS }) {
  const movingReviews = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="review-marquee hover:[animation-play-state:paused]">
        {movingReviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof DEFAULT_REVIEWS)[number] }) {
  return (
    <article className="panel w-[calc(100vw-2rem)] min-w-0 max-w-[330px] p-5 sm:w-auto sm:min-w-[290px]">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="w-4 h-4" fill={index < review.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mt-4">"{review.message}"</p>
      <div className="mt-5">
        <p className="font-semibold">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.role}</p>
      </div>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary p-4">
      <p className="font-['Space_Grotesk'] text-3xl font-bold text-primary">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <p className="text-sm font-semibold text-primary">{label}</p>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{value}</p>
    </div>
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
