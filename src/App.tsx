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
  FaRegSun,
  FaMagic,
  FaPalette,
  FaBolt
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

// Marketing carousel items
const marketingItems = [
  {
    icon: <FaMagic />,
    sr: "Vaše ideje pretvaramo u digitalnu magiju.",
    en: "We turn your ideas into digital magic."
  },
  {
    icon: <FaPalette />,
    sr: "Dizajn, funkcije i boje po vašoj želji.",
    en: "Design, features and colors your way."
  },
  {
    icon: <FaBolt />,
    sr: "Brze, pouzdane i dostupne aplikacije.",
    en: "Fast, reliable and accessible apps."
  }
];

// Showcase data (2 projects)
const showcases = [
  {
    title: "TrainerPro",
    image: "/works/trainerpro.png",
    url: "https://trainerpro-j23soft.vercel.app",
    description: {
      sr: "Platforma za trenere sa naprednim Gym Management sistemom.",
      en: "Trainer platform with advanced Gym Management system."
    }
  },
  {
    title: "FitConnect",
    image: "/works/fitconnect.png",
    url: "https://fitconnect-j23soft.vercel.app",
    description: {
      sr: "Aplikacija za vođenje klijenata, planova i napredovanja.",
      en: "App for managing clients, plans and progress."
    }
  }
];

const text = {
  sr: {
    brand: "j23soft",
    nav: ["O nama", "Radovi", "Kontakt"],
    heroTitle: (
      <>
        <span className="highlight">Custom web aplikacije</span> <br />
        za tvoj brend i tvoj stil
      </>
    ),
    heroDesc: (
      <>
        Pravimo aplikacije po tvojim željama. <br />
        Dizajn, boje i funkcionalnosti koje ti biraš. <br />
        Tvoj logo, tvoja pravila, naš kod.
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
        <b>Iskustvo, inovacija i posvećenost.</b> <br />
        Pravimo aplikacije koje rastu sa tvojim poslom. <br />
        Ti biraš svaki detalj, a mi brinemo da sve radi savršeno.
      </>
    ),
    showcaseTitle: "Naši radovi",
    showcaseHint: "* Kliknite na slike za live demo aplikacija.",
    contactTitle: "Kontakt",
    contactDesc: (
      <>
        Imaš ideju ili pitanje? <br />
        Piši na <a href="mailto:info@j23soft.com">info@j23soft.com</a> ili nas zapratite:
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
        <span className="highlight">Custom web apps</span> <br />
        for your brand & style
      </>
    ),
    heroDesc: (
      <>
        We build apps your way. <br />
        Pick the design, colors and features. <br />
        Your logo, your rules, our code.
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
        We build apps that grow with you. <br />
        You choose every detail, we make it run perfectly.
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

function MarketingCarousel({ lang }: { lang: "sr" | "en" }) {
  // infinite horizontal scroll animation
  return (
    <div className="carousel-marketing">
      <motion.div
        className="carousel-track"
        animate={{
          x: ["0%", "-100%", "0%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear"
        }}
        style={{ display: "flex" }}
      >
        {[...marketingItems, ...marketingItems].map((item, i) => (
          <div className="carousel-item" key={i}>
            <span className="carousel-icon">{item.icon}</span>
            <span className="carousel-text">{item[lang]}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"sr" | "en">("sr");

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
        {/* LOGO: add your logo as public/logo.png (500x500, transparent bg recommended) */}
        <div className="logo-circle">
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
        <MarketingCarousel lang={lang} />
      </motion.section>

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