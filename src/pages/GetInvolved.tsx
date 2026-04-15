import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import sponsorsImg from "../assets/clubability/get-involved/laptop.svg";
import donateImg from "../assets/clubability/get-involved/laptop2.svg";
import volunteerImg from "../assets/clubability/get-involved/hands.svg";

export default function GetInvolved() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Get Involved",
      sponsorsTitle: "Our Sponsors",
      sponsorsText:
        "At Club Ability, we believe every student deserves access to quality STEM education. With support from partners like Lucid, Comcast, Intermountain Health, Weber State University, and Salt Lake City School District, we provide hands-on learning to underserved communities in Utah and ensure no student is turned away.",
      sponsorsButton: "Our Sponsors",
      sponsorsAlt: "Our Sponsors",
      donateTitle: "Donate",
      donateText:
        "At Club Ability, your donation helps make STEM education accessible to every student, regardless of financial background. Your support funds instructors, materials, and resources so no child is left behind. Donate today to help empower the next generation of tech leaders.",
      donateButton: "Donate",
      donateAlt: "Donate",
      volunteerTitle: "Volunteer",
      volunteerText:
        "At Club Ability, volunteering helps children succeed in coding and STEM. No technical experience is required—just a desire to help. Even a few hours a week or month can inspire the next generation of innovators. Volunteer with us and help shape the future of our community.",
      volunteerButton: "Volunteer",
      volunteerAlt: "Volunteer",
    },
    es: {
      bannerTitle: "Participa",
      sponsorsTitle: "Nuestros Patrocinadores",
      sponsorsText:
        "En Club Ability, creemos que cada estudiante merece acceso a una educación STEM de calidad. Con el apoyo de socios como Lucid, Comcast, Intermountain Health, Weber State University y Salt Lake City School District, brindamos aprendizaje práctico a comunidades desatendidas en Utah y garantizamos que ningún estudiante sea rechazado.",
      sponsorsButton: "Nuestros Patrocinadores",
      sponsorsAlt: "Nuestros Patrocinadores",
      donateTitle: "Donar",
      donateText:
        "En Club Ability, tu donación ayuda a que la educación STEM sea accesible para cada estudiante, independientemente de su situación económica. Tu apoyo financia instructores, materiales y recursos para que ningún niño se quede atrás. Dona hoy para ayudar a impulsar a la próxima generación de líderes tecnológicos.",
      donateButton: "Donar",
      donateAlt: "Donar",
      volunteerTitle: "Voluntariado",
      volunteerText:
        "En Club Ability, el voluntariado ayuda a los niños a tener éxito en programación y STEM. No se requiere experiencia técnica, solo el deseo de ayudar. Incluso unas pocas horas a la semana o al mes pueden inspirar a la próxima generación de innovadores. Haz voluntariado con nosotros y ayuda a dar forma al futuro de nuestra comunidad.",
      volunteerButton: "Voluntariado",
      volunteerAlt: "Voluntariado",
    },
  } as const;

  const t = copy[language];

  return (
    <div className="get-involved-page">
      <style>
        {`
          .get-involved-page {
            background: #eef2f3;
          }

          .gi-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 32px;
            box-sizing: border-box;
          }

          .gi-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .gi-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .gi-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .gi-banner-title {
            margin: 0;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            color: white;
            text-align: left;
            white-space: nowrap;
            font-family: Poppins, sans-serif;
          }

          .gi-banner-line {
            height: 4px;
            background: #ff2f86;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .gi-section {
            padding: 22px 0 66px;
          }

          .gi-stack {
            display: flex;
            flex-direction: column;
            gap: 34px;
          }

          .gi-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            border-radius: 8px;
            padding: 24px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.14);
            align-items: stretch;
          }

          .gi-card.pink {
            background: #f3dfe8;
          }

          .gi-card.blue {
            background: #cfe4ed;
          }

          .gi-card.white {
            background: #f7f7f7;
          }

          .gi-image-wrap {
            border-radius: 8px;
            overflow: hidden;
            min-height: 280px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }

          .gi-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .gi-copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            min-height: 280px;
            padding: 8px 18px 8px 12px;
            box-sizing: border-box;
          }

          .gi-title {
            margin: 0 0 22px 0;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
            font-family: Poppins, sans-serif;
          }

          .gi-text {
            margin: 0 0 24px 0;
            font-size: 18px;
            line-height: 1.2;
            color: #111111;
            text-align: left;
            max-width: 460px;
            font-family: Roboto, sans-serif;
          }

          .gi-button {
            border: none;
            border-radius: 10px;
            background: #d3397c;
            color: white;
            padding: 12px 18px;
            font-size: 15px;
            line-height: 1;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.18);
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
            font-family: Poppins, sans-serif;
          }

          .gi-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.18);
            filter: brightness(0.98);
          }

          .gi-button:active {
            transform: translateY(0);
          }

          @media (max-width: 900px) {
            .gi-shell {
              padding: 0 18px;
            }

            .gi-banner-row {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }

            .gi-banner-title {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .gi-banner-line {
              width: 100%;
              flex: none;
              margin-top: 0;
            }

            .gi-card {
              grid-template-columns: 1fr;
            }

            .gi-copy,
            .gi-image-wrap {
              min-height: unset;
            }

            .gi-copy {
              padding: 8px 6px 4px;
            }

            .gi-title {
              font-size: 26px;
              line-height: 30px;
            }

            .gi-text {
              font-size: 17px;
              max-width: none;
            }
          }
        `}
      </style>

      <section className="gi-banner">
        <div className="gi-shell">
          <div className="gi-inner">
            <div className="gi-banner-row">
              <h1 className="gi-banner-title">{t.bannerTitle}</h1>
              <div className="gi-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="gi-section">
        <div className="gi-shell">
          <div className="gi-inner gi-stack">
            <div className="gi-card pink">
              <div className="gi-image-wrap">
                <img className="gi-image" src={sponsorsImg} alt={t.sponsorsAlt} />
              </div>

              <div className="gi-copy">
                <h2 className="gi-title">{t.sponsorsTitle}</h2>
                <p className="gi-text">{t.sponsorsText}</p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/sponsors")}
                >
                  {t.sponsorsButton}
                </button>
              </div>
            </div>

            <div className="gi-card blue">
              <div className="gi-copy">
                <h2 className="gi-title">{t.donateTitle}</h2>
                <p className="gi-text">{t.donateText}</p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/donate")}
                >
                  {t.donateButton}
                </button>
              </div>

              <div className="gi-image-wrap">
                <img className="gi-image" src={donateImg} alt={t.donateAlt} />
              </div>
            </div>

            <div className="gi-card white">
              <div className="gi-image-wrap">
                <img className="gi-image" src={volunteerImg} alt={t.volunteerAlt} />
              </div>

              <div className="gi-copy">
                <h2 className="gi-title">{t.volunteerTitle}</h2>
                <p className="gi-text">{t.volunteerText}</p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/volunteer")}
                >
                  {t.volunteerButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}