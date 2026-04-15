import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import kidsImg from "../assets/clubability/about/kids.svg";
import founderImg from "../assets/clubability/about/founder.svg";

export default function About() {
  const [amount, setAmount] = useState("$");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const { language } = useLanguage();

  const presetAmounts = ["$100", "$200", "$300"];

  const copy = {
    en: {
      bannerTitle: "About Us",
      missionTitle: "Our Mission",
      missionText:
        'Under the "Tech for All" mission, Club Ability has become a transformative force, preparing participants for the STEM careers of tomorrow. Initiatives like the "Triunfa en Tecnología" conference and the "El Poder de la Tecnología" podcast reflect our commitment to access, opportunity, and innovation for every learner.',
      storyTitle: "Want to be a part of our story?",
      storyCopy:
        "With your support, Club Ability can continue providing scholarships, tech equipment, and essential educational resources. Your contribution helps open doors for more youth to explore careers in technology, close digital divides, and build a brighter future for themselves and their communities.",
      donationTitle: "Make a Donation",
      donationCopy1:
        "At Club Ability, your donation goes directly toward making high-quality STEM education accessible to every student.",
      donationCopy2:
        "Your gift helps cover instructors, materials, and program resources!",
      oneTime: "ONE TIME",
      monthly: "MONTHLY",
      donate: "Donate",
      founderTitle: "Our Founder",
      founderCopy1:
        "Juliette Bautista, a visionary leader and passionate advocate for STEM education, founded Club Ability to address the lack of accessible tech programs for underserved families and individuals with special needs in Utah.",
      founderCopy2:
        "This innovative platform enables families to collaboratively explore technology ranging from video games and animation to 3D modeling and audiovisual design.",
      kidsAlt: "Club Ability kids",
      founderAlt: "Club Ability founder",
      donationAria: "Donation amount",
    },
    es: {
      bannerTitle: "Sobre Nosotros",
      missionTitle: "Nuestra Misión",
      missionText:
        'Bajo la misión "Tecnología para Todos", Club Ability se ha convertido en una fuerza transformadora que prepara a los participantes para las carreras STEM del mañana. Iniciativas como la conferencia "Triunfa en Tecnología" y el pódcast "El Poder de la Tecnología" reflejan nuestro compromiso con el acceso, la oportunidad y la innovación para cada estudiante.',
      storyTitle: "¿Quieres ser parte de nuestra historia?",
      storyCopy:
        "Con tu apoyo, Club Ability puede seguir brindando becas, equipo tecnológico y recursos educativos esenciales. Tu contribución ayuda a abrir puertas para que más jóvenes exploren carreras en tecnología, reduzcan la brecha digital y construyan un futuro más brillante para ellos y sus comunidades.",
      donationTitle: "Haz una Donación",
      donationCopy1:
        "En Club Ability, tu donación se destina directamente a hacer que la educación STEM de alta calidad sea accesible para cada estudiante.",
      donationCopy2:
        "¡Tu aporte ayuda a cubrir instructores, materiales y recursos del programa!",
      oneTime: "UNA VEZ",
      monthly: "MENSUAL",
      donate: "Donar",
      founderTitle: "Nuestra Fundadora",
      founderCopy1:
        "Juliette Bautista, líder visionaria y apasionada defensora de la educación STEM, fundó Club Ability para abordar la falta de programas tecnológicos accesibles para familias desatendidas e individuos con necesidades especiales en Utah.",
      founderCopy2:
        "Esta innovadora plataforma permite a las familias explorar la tecnología de manera colaborativa, desde videojuegos y animación hasta modelado 3D y diseño audiovisual.",
      kidsAlt: "Niños de Club Ability",
      founderAlt: "Fundadora de Club Ability",
      donationAria: "Cantidad de donación",
    },
  } as const;

  const t = copy[language];

  return (
    <div className="about-page">
      <style>
        {`
          .about-page {
            background: #f2f8fa;
          }

          .about-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .about-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .page-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .page-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .page-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .page-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .mission-section {
            padding: 44px 0 48px;
            background: #f2f8fa;
          }

          .mission-block {
            max-width: 980px;
            margin: 0 auto;
          }

          .section-heading {
            margin: 0 0 10px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .mission-text {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .story-donate-band {
            background: #cfe4ed;
            padding: 56px 0 62px;
          }

          .story-donate-stage {
            position: relative;
            min-height: 560px;
          }

          .story-card,
          .donation-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.14);
            box-sizing: border-box;
          }

          .story-card {
            width: 56%;
            min-height: 530px;
            padding: 52px 56px 48px;
          }

          .donation-card {
            width: 45%;
            min-height: 570px;
            padding: 52px 54px 48px;
            position: absolute;
            right: 0;
            top: -22px;
            z-index: 2;
          }

          .story-title,
          .donation-title,
          .founder-title-main {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .story-copy,
          .donation-copy,
          .founder-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .story-copy + .story-copy,
          .donation-copy + .donation-copy,
          .founder-copy + .founder-copy {
            margin-top: 20px;
          }

          .kids-image-wrap {
            margin-top: 30px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          }

          .kids-image,
          .founder-image {
            width: 100%;
            display: block;
            object-fit: cover;
          }

          .kids-image {
            height: 280px;
          }

          .donation-box {
            margin-top: 26px;
            border: 2px solid #bdd6df;
            border-radius: 16px;
            padding: 28px 28px 30px;
            background: #f2f8fa;
          }

          .donation-presets {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 12px;
          }

          .amount-chip,
          .frequency-btn,
          .donate-btn {
            border: none;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease,
              opacity 0.18s ease;
          }

          .amount-chip {
            height: 52px;
            border-radius: 8px;
            background: #ffffff;
            color: #4a7a8a;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            border: 2px solid #bdd6df;
          }

          .amount-chip:hover,
          .frequency-btn:hover,
          .donate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.12);
            filter: brightness(0.99);
          }

          .amount-input {
            width: 100%;
            height: 54px;
            border-radius: 8px;
            border: 2px solid #bdd6df;
            background: #ffffff;
            padding: 0 16px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1;
            font-weight: 400;
            color: #4a7a8a;
            box-sizing: border-box;
            outline: none;
            margin-bottom: 16px;
          }

          .amount-input:focus {
            border-color: #4a7a8a;
          }

          .frequency-row {
            display: flex;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 18px;
          }

          .frequency-btn {
            flex: 1;
            height: 52px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            background: #dfeff5;
            color: #062430;
          }

          .frequency-btn.active {
            background: #0c495d;
            color: white;
          }

          .donate-btn {
            display: block;
            margin: 0 auto;
            background: #c23368;
            color: white;
            border-radius: 8px;
            padding: 12px 26px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            box-shadow: 0 4px 10px rgba(0,0,0,0.18);
          }

          .founder-section {
            background: #f2f8fa;
            padding: 72px 0 88px;
          }

          .founder-layout {
            max-width: 980px;
            margin: 0 auto;
          }

          .founder-grid {
            display: grid;
            grid-template-columns: 260px 1fr;
            gap: 18px;
            align-items: start;
          }

          .founder-image-wrap {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          }

          .founder-image {
            height: 240px;
          }

          @media (max-width: 1100px) {
            .story-donate-stage {
              min-height: unset;
            }

            .story-card,
            .donation-card {
              position: static;
              width: 100%;
              min-height: unset;
            }

            .donation-card {
              margin-top: 24px;
            }
          }

          @media (max-width: 900px) {
            .about-shell {
              padding: 0 16px;
            }

            .page-banner h1 {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .section-heading,
            .story-title,
            .donation-title,
            .founder-title-main {
              font-size: 26px;
              line-height: 30px;
            }

            .mission-text {
              font-size: 18px;
            }

            .story-copy,
            .donation-copy,
            .founder-copy {
              font-size: 16px;
            }

            .story-card,
            .donation-card {
              padding: 30px 24px;
            }

            .kids-image {
              height: 220px;
            }

            .founder-grid {
              grid-template-columns: 1fr;
            }

            .founder-image {
              height: auto;
            }
          }
        `}
      </style>

      <section className="page-banner">
        <div className="about-shell">
          <div className="about-inner">
            <div className="page-banner-row">
              <h1>{t.bannerTitle}</h1>
              <div className="page-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="about-shell">
          <div className="mission-block">
            <h2 className="section-heading">{t.missionTitle}</h2>
            <p className="mission-text">{t.missionText}</p>
          </div>
        </div>
      </section>

      <section className="story-donate-band">
        <div className="about-shell">
          <div className="about-inner story-donate-stage">
            <div className="story-card">
              <h2 className="story-title">{t.storyTitle}</h2>
              <p className="story-copy">{t.storyCopy}</p>

              <div className="kids-image-wrap">
                <img className="kids-image" src={kidsImg} alt={t.kidsAlt} />
              </div>
            </div>

            <div className="donation-card">
              <h2 className="donation-title">{t.donationTitle}</h2>
              <p className="donation-copy">{t.donationCopy1}</p>
              <p className="donation-copy">{t.donationCopy2}</p>

              <div className="donation-box">
                <div className="donation-presets">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      className="amount-chip"
                      onClick={() => setAmount(preset)}
                      type="button"
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <input
                  className="amount-input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label={t.donationAria}
                />

                <div className="frequency-row">
                  <button
                    type="button"
                    className={`frequency-btn ${frequency === "one-time" ? "active" : ""}`}
                    onClick={() => setFrequency("one-time")}
                  >
                    {t.oneTime}
                  </button>
                  <button
                    type="button"
                    className={`frequency-btn ${frequency === "monthly" ? "active" : ""}`}
                    onClick={() => setFrequency("monthly")}
                  >
                    {t.monthly}
                  </button>
                </div>

                <button type="button" className="donate-btn">
                  {t.donate}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="about-shell">
          <div className="founder-layout">
            <h2 className="founder-title-main">{t.founderTitle}</h2>

            <div className="founder-grid">
              <div className="founder-image-wrap">
                <img className="founder-image" src={founderImg} alt={t.founderAlt} />
              </div>

              <div>
                <p className="founder-copy">{t.founderCopy1}</p>

                <p className="founder-copy">{t.founderCopy2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}