import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaRocket,
  FaPalette,
  FaBolt,
  FaMagic,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaRegMoon,
  FaRegSun
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

// Marketing highlights
const marketing = [
  {
    icon: <FaMagic />,
    sr: "Digitalna magija za vaše poslovanje.",
    en: "Digital magic for your business."
  },
  {
    icon: <FaPalette />,
    sr: "Vaš identitet, vaše boje, vaš stil.",
    en: "Your identity, your colors, your style."
  },
  {
    icon: <FaBolt />,
    sr: "Brza, moderna i prilagodljiva rešenja.",
    en: "Fast, modern, and adaptable solutions."
  }
];

// Showcase data (screenshots should be portrait, eg. 400x800 or 360x780)
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
    nav: ["O nama", "Radovi", "Kontakt"],
    heroTitle: (
      <>
        <span className="highlight">Web aplikacije</span> <br />
        koje prate vaš ritam
      </>
    ),
    heroDesc: (
      <>
        Kompleksni, moderni i brzi sistemi, <b>po vašoj meri</b>.<br />
        Vaš logo, vaš brend, vaše funkcionalnosti.<br />
        Potpuno prilagodljive aplikacije, optimizovane za svaki uređaj.
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
        title: "Potpuni custom development",
        desc: "Svaki piksel i svaki red koda radi za vas."
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile first dizajn",
        desc: "Savršeno iskustvo na telefonu, tabletu i računaru."
      },
      {
        icon: <FaCloud />,
        title: "Cloud hosting & brzina",
        desc: "Aplikacije su dostupne 24/7, skalabilne i brze."
      }
    ],
    aboutTitle: (
      <>
        Zašto <span className="highlight">j23soft</span>?
      </>
    ),
    aboutDesc: (
      <>
        <b>Vi sanjate - mi pretvaramo u realnost.</b> <br />
        Naš pristup kombinuje iskustvo, dizajn i inovacije.<br />
        Svaki projekat posmatramo kao digitalno umetničko delo, a vaše zadovoljstvo nam je na prvom mestu.
      </>
    ),
    showcaseTitle: "Naši radovi",
    showcaseHint: "* Klikni na slike za live demo.",
    contactTitle: "Kontakt",
    contactDesc: (
      <>
        Imate ideju ili pitanje?<br />
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
    nav: ["About", "Portfolio", "Contact"],
    heroTitle: (
      <>
        <span className="highlight">Web apps</span> <br />
        that follow your rhythm
      </>
    ),
    heroDesc: (
      <>
        Complex, modern and fast systems, <b>tailored to you</b>.<br />
        Your logo, your brand, your features.<br />
        Fully responsive, optimized for every device.
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
        title: "Full custom development",
        desc: "Every pixel and every line of code works for you."
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile first design",
        desc: "Perfect experience on mobile, tablet & desktop."
      },
      {
        icon: <FaCloud />,
        title: "Cloud hosting & speed",
        desc: "Apps are online 24/7, scalable and fast."
      }
    ],
    aboutTitle: (
      <>
        Why <span className="highlight">j23soft</span>?
      </>
    ),
    aboutDesc: (
      <>
        <b>You dream it - we build it.</b> <br />
        Our approach blends experience, design and innovation.<br />
        Every project is a digital artwork and your satisfaction is our top priority.
      </>
    ),
    showcaseTitle: "Our portfolio",
    showcaseHint: "* Click the images for a live demo.",
    contactTitle: "Contact",
    contactDesc: (
      <>
        Got an idea or question?<br />
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
  return (
    <div className="carousel-marketing">
      <motion.div
        className="carousel-track"
        animate={{
          x: ["0%", "-50%", "0%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{ display: "flex" }}
      >
        {[...marketing, ...marketing].map((item, i) => (
          <div className="carousel-item" key={i}>
            <span className="carousel-icon">{item.icon}</span>
            <span className="carousel-text">{item[lang]}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
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
        {/* LOGO: add your logo as public/logo.png (any shape/ratio, transparent recommended) */}
        <div className="logo-fluid">
          <img src="/logo.png" alt="j23soft logo" className="logo-img" draggable="false" />
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
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
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
            whileHover={{ scale: 1.06, boxShadow: "0 8px 38px #38bdf855" }}
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
              whileHover={{ scale: 1.04, boxShadow: "0 8px 44px #38bdf899" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="showcase-image-wrap">
                <img src={app.image} alt={app.title} className="showcase-img-portrait" />
              </div>
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

      {/* Contact & Footer */}
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
