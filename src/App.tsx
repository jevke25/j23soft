import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaRocket,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaRegMoon,
  FaRegSun
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import "./App.css";

// Animative marketing messages (will animate on scroll)
const marketingMessages = {
  sr: [
    "Od ideje do lansiranja – sve na jednom mestu.",
    "Vaša aplikacija. Vaš brend. Naša tehnologija.",
    "Vi birate funkcije i boje, mi pišemo kod.",
    "Savremena rešenja za moderan biznis.",
    "Digitalizujte svoj rad i iznenadite klijente."
  ],
  en: [
    "From idea to launch – all in one place.",
    "Your app. Your brand. Our technology.",
    "You choose features and colors, we write the code.",
    "Modern solutions for a modern business.",
    "Digitize your work and amaze your clients."
  ]
};

// Showcase data
const showcases = [
  {
    title: "TrainerPro",
    image: "/works/trainerpro.png",
    url: "https://trainerpro-j23soft.vercel.app",
    description: {
      sr: "Personalizovana platforma za trenere sa naprednim Gym Management sistemom.",
      en: "A personalized platform for trainers, featuring an advanced Gym Management System."
    }
  },
  {
    title: "FitConnect",
    image: "/works/fitconnect.png",
    url: "https://fitconnect-j23soft.vercel.app",
    description: {
      sr: "Jednostavna aplikacija za vođenje klijenata, planova i napredovanja.",
      en: "Simple client, plan, and progress management for personal trainers."
    }
  }
];

const text = {
  sr: {
    brand: "j23soft",
    nav: ["O nama", "Radovi", "Kontakt"],
    heroTitle: (
      <>
        <span className="highlight">Savremene web aplikacije</span> <br /> po vašoj meri
      </>
    ),
    heroDesc: (
      <>
        Kreiramo potpuno custom web aplikacije prema vašoj viziji i brendu. <br />
        Birate dizajn, funkcionalnosti, boje i logo – mi brinemo o svemu ostalom.
      </>
    ),
    heroBtn: (
      <>
        Pogledaj radove <FaRocket />
      </>
    ),
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Custom development",
        desc: "Svaka aplikacija je unikat, od dizajna do zadnje funkcije."
      },
      {
        icon: <FaMobileAlt />,
        title: "Responsive dizajn",
        desc: "Izgled i funkcionalnost savršeni na svim uređajima."
      },
      {
        icon: <FaCloud />,
        title: "Cloud deploy & sigurnost",
        desc: "Vaša aplikacija je uvek online, brza i zaštićena."
      }
    ],
    aboutTitle: (
      <>
        Zašto <span className="highlight">j23soft</span>?
      </>
    ),
    aboutDesc: (
      <>
        <b>Iskustvo, inovacija, posvećenost.</b> <br />
        Svakom projektu pristupamo sa pažnjom i željom da vaše ideje pretvorimo u digitalnu realnost. Vi zamišljate – mi ostvarujemo.
      </>
    ),
    showcaseTitle: "Naši radovi",
    showcaseHint: "* Kliknite na slike za live demo aplikacija.",
    contactTitle: "Kontakt",
    contactDesc: (
      <>
        Imate ideju ili pitanje? <br />
        Pišite na <a href="mailto:info@j23soft.com">info@j23soft.com</a> ili nas zapratite:
      </>
    ),
    copyright: () => `© ${new Date().getFullYear()} j23soft. Sva prava zadržana.`,
    switchLang: "English",
    switchDark: "Tamni mod",
    switchLight: "Svetli mod",
    whatsapp: "WhatsApp"
  },
  en: {
    brand: "j23soft",
    nav: ["About", "Portfolio", "Contact"],
    heroTitle: (
      <>
        <span className="highlight">Modern web apps</span> <br /> tailored for you
      </>
    ),
    heroDesc: (
      <>
        We create fully custom web applications matching your vision and brand. <br />
        You pick the design, features, colors, and logo – we take care of the rest.
      </>
    ),
    heroBtn: (
      <>
        See portfolio <FaRocket />
      </>
    ),
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Custom development",
        desc: "Every app is unique, from design to the last feature."
      },
      {
        icon: <FaMobileAlt />,
        title: "Responsive design",
        desc: "Perfect look and functionality on all devices."
      },
      {
        icon: <FaCloud />,
        title: "Cloud deploy & security",
        desc: "Your app is always online, fast, and secure."
      }
    ],
    aboutTitle: (
      <>
        Why <span className="highlight">j23soft</span>?
      </>
    ),
    aboutDesc: (
      <>
        <b>Experience, innovation, dedication.</b> <br />
        We approach every project with care, turning your ideas into digital reality. You imagine – we deliver.
      </>
    ),
    showcaseTitle: "Our portfolio",
    showcaseHint: "* Click images for a live demo.",
    contactTitle: "Contact",
    contactDesc: (
      <>
        Got an idea or question? <br />
        Email <a href="mailto:info@j23soft.com">info@j23soft.com</a> or follow us:
      </>
    ),
    copyright: () => `© ${new Date().getFullYear()} j23soft. All rights reserved.`,
    switchLang: "Srpski",
    switchDark: "Dark mode",
    switchLight: "Light mode",
    whatsapp: "WhatsApp"
  }
};

// Animated marketing section on scroll
function AnimatedMarketing({ messages }: { messages: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div className="marketing-anim" ref={ref}>
      {messages.map((msg, i) => (
        <motion.div
          className="marketing-anim-item"
          key={msg}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 40 }
          }}
          transition={{ duration: 0.6, delay: i * 0.08, type: "spring" }}
        >
          <span>{msg}</span>
        </motion.div>
      ))}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"sr" | "en">("sr");

  // Ikone za jezik i svetlo/tamno
  const langIcon = lang === "sr" ? <FaGlobeAmericas /> : <FaGlobeEurope />;
  const themeIcon = dark ? <FaRegSun /> : <FaRegMoon />;

  return (
    <div className={`main-bg${dark ? " dark" : ""}`}>
      {/* Background blobs */}
      <div className="bg-blobs">
        <motion.div
          className="blob blob1"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob2"
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob3"
          animate={{ x: [0, 0, 30], y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 19, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="navbar glass">
        <div className="logo-placeholder">
          {/* LOGO PATH: Place your logo image as public/logo.png */}
          <img src="/logo.png" alt="j23soft logo" className="logo-img" />
        </div>
        <nav>
          <a href="#about">{text[lang].nav[0]}</a>
          <a href="#projects">{text[lang].nav[1]}</a>
          <a href="#contact">{text[lang].nav[2]}</a>
        </nav>
        <div className="navbar-controls">
          <button
            className="icon-btn"
            aria-label={dark ? text[lang].switchLight : text[lang].switchDark}
            onClick={() => setDark((d) => !d)}
            title={dark ? text[lang].switchLight : text[lang].switchDark}
          >
            {themeIcon}
          </button>
          <button
            className="icon-btn"
            aria-label={text[lang].switchLang}
            onClick={() => setLang((l) => (l === "sr" ? "en" : "sr"))}
            title={text[lang].switchLang}
          >
            {langIcon}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{text[lang].heroTitle}</h1>
        <p>{text[lang].heroDesc}</p>
        <motion.a
          href="#projects"
          className="cta-btn magic-shadow"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {text[lang].heroBtn}
        </motion.a>
      </motion.section>

      {/* Animated Marketing Section */}
      <AnimatedMarketing messages={marketingMessages[lang]} />

      {/* Features Section */}
      <section className="features">
        {text[lang].features.map((f, i) => (
          <motion.div
            className="feature-card glass"
            key={f.title as string}
            whileHover={{ scale: 1.06, boxShadow: "0 6px 32px #38bdf855" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about glass"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>{text[lang].aboutTitle}</h2>
        <p>{text[lang].aboutDesc}</p>
      </motion.section>

      {/* Projects Showcase */}
      <section id="projects" className="showcase">
        <h2>{text[lang].showcaseTitle}</h2>
        <div className="showcase-grid">
          {showcases.map((app, idx) => (
            <motion.a
              key={app.title}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-item glass"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 32px #38bdf855" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.13 }}
            >
              {/* IMAGE PATH: Place your images as public/works/trainerpro.png and public/works/fitconnect.png */}
              <img src={app.image} alt={app.title} />
              <div className="showcase-info">
                <h3>{app.title}</h3>
                <p>
                  {lang === "sr" ? app.description.sr : app.description.en}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="showcase-hint">{text[lang].showcaseHint}</div>
      </section>

      {/* Elegant Contact & Footer */}
      <footer id="contact" className="footer glass">
        <motion.div
          className="contact-card-elegant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-main">
            <div>
              <h2>{text[lang].contactTitle}</h2>
              <p>{text[lang].contactDesc}</p>
            </div>
            <div className="contact-socials-block">
              <a
                href="https://github.com/j23soft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/j23soft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/381646766463"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="whatsapp-link"
                title={text[lang].whatsapp}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="copyright">{text[lang].copyright()}</div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;