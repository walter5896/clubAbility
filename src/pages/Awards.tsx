import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import img1 from "../assets/clubability/awards/img1.svg";
import img2 from "../assets/clubability/awards/img2.svg";
import img3 from "../assets/clubability/awards/img3.svg";
import img4 from "../assets/clubability/awards/img4.svg";
import img5 from "../assets/clubability/awards/img5.svg";
import img6 from "../assets/clubability/awards/img6.svg";

type AwardCard = {
  title: string;
  image: string;
};

export default function Awards() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Awards and Recognition",
      introTitle: "Work with us!",
      introText: "Become a sponsor of Club Ability",
      sponsorBtn: "Become a Sponsor",
      learnMore: "LEARN MORE →",
      awards: [
        "Governor’s Medal for Science and Technology",
        "Action Awards",
        "HCT Applauds",
        "Women’s Tech Awards",
        "We Are Utah Award",
        "Utah Living Color Awards",
      ],
    },
    es: {
      bannerTitle: "Premios y Reconocimientos",
      introTitle: "¡Trabaja con nosotros!",
      introText: "Conviértete en patrocinador de Club Ability",
      sponsorBtn: "Conviértete en Patrocinador",
      learnMore: "MÁS INFORMACIÓN →",
      awards: [
        "Medalla del Gobernador de Ciencia y Tecnología",
        "Premios Action",
        "HCT Applauds",
        "Premios Women’s Tech",
        "Premio We Are Utah",
        "Premios Utah Living Color",
      ],
    },
  } as const;

  const t = copy[language];

  const awards: AwardCard[] = [
    { title: t.awards[0], image: img1 },
    { title: t.awards[1], image: img2 },
    { title: t.awards[2], image: img3 },
    { title: t.awards[3], image: img4 },
    { title: t.awards[4], image: img5 },
    { title: t.awards[5], image: img6 },
  ];

  return (
    <div className="awards-page">
      <style>
        {`
          .awards-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .awards-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .awards-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .awards-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .awards-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .awards-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .awards-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .awards-content {
            padding: 42px 0 72px;
          }

          .awards-intro {
            margin-bottom: 34px;
          }

          .awards-intro h2 {
            margin: 0 0 8px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .awards-intro p {
            margin: 0 0 18px 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .sponsor-btn {
            border: none;
            border-radius: 8px;
            background: #c23368;
            color: white;
            padding: 12px 18px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.18);
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .sponsor-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.18);
            filter: brightness(0.98);
          }

          .awards-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px 26px;
          }

          .award-card {
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.14);
            background: #0c3a4a;
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              filter 0.2s ease;
          }

          .award-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 22px rgba(0,0,0,0.16);
          }

          .award-media {
            width: 100%;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            display: block;
          }

          .award-image-wrap {
            width: 100%;
            height: 370px;
            overflow: hidden;
            background: #0c3a4a;
            display: block;
            position: relative;
          }

          .award-image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .award-bottom {
            width: 100%;
            background: #0c3a4a;
            min-height: 126px;
            padding: 18px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 14px;
            margin-top: -2px;
            position: relative;
            z-index: 2;
          }

          .award-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.12;
            font-weight: 600;
            text-align: left;
            max-width: 320px;
          }

          .award-link-row {
            display: flex;
            justify-content: flex-end;
          }

          .award-link {
            border: none;
            background: transparent;
            color: white;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            cursor: pointer;
            padding: 0;
            transition: transform 0.18s ease, opacity 0.18s ease;
          }

          .award-link:hover {
            transform: translateY(-2px);
            filter: brightness(0.98);
          }

          @media (max-width: 900px) {
            .awards-shell {
              padding: 0 16px;
            }

            .awards-banner h1 {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .awards-intro h2 {
              font-size: 26px;
              line-height: 30px;
            }

            .awards-intro p {
              font-size: 18px;
            }

            .awards-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .award-image-wrap {
              height: 280px;
            }

            .award-title {
              font-size: 22px;
              max-width: none;
            }

            .sponsor-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="awards-banner">
        <div className="awards-shell">
          <div className="awards-inner">
            <div className="awards-banner-row">
              <h1>{t.bannerTitle}</h1>
              <div className="awards-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="awards-content">
        <div className="awards-shell">
          <div className="awards-inner">
            <div className="awards-intro">
              <h2>{t.introTitle}</h2>
              <p>{t.introText}</p>
              <button
                className="sponsor-btn"
                type="button"
                onClick={() => navigate("/sponsors")}
              >
                {t.sponsorBtn}
              </button>
            </div>

            <div className="awards-grid">
              {awards.map((award) => (
                <div key={award.title} className="award-card">
                  <div className="award-media">
                    <div className="award-image-wrap">
                      <img className="award-image" src={award.image} alt={award.title} />
                    </div>

                    <div className="award-bottom">
                      <h3 className="award-title">{award.title}</h3>

                      <div className="award-link-row">
                        <button
                          className="award-link"
                          type="button"
                          onClick={() => navigate("/sponsors")}
                        >
                          {t.learnMore}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}