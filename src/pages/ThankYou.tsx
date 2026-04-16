import { useNavigate } from "react-router-dom";
import { CalendarDays, UserRound, Star, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ThankYou() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      heroTitle: "You’re registered!",
      heroText:
        "Thank you for signing up for Computing. A confirmation email has been sent to example@email.com with everything you need to know before your class.",
      detailsTitle: "Registration details",
      labels: {
        program: "Program",
        student: "Student",
        time: "Time",
        location: "Location",
        confirmation: "Confirmation #",
      },
      values: {
        program: "Computing",
        student: "Jane Smith",
        time: "Saturday, Mar 14, 2026 – 10:30 am - 12:00 pm",
        location: "845 S Main St, Suite B8, Bountiful",
        confirmation: "00-0000000-000",
      },
      nextTitle: "What’s next",
      cards: {
        calendarTitle: "Add to your calendar",
        calendarText: "Save your session dates so you don’t miss a class.",
        calendarLink: "Download .ics file",
        questionsTitle: "Questions before your first class?",
        questionsText:
          "We are happy to answer anything from concerns, accessibility, what to bring, and more.",
        questionsLink: "Contact us",
        exploreTitle: "Explore more programs",
        exploreText: "See what else is happening at Club Ability this spring.",
        exploreLink: "View all classes",
      },
      homeButton: "Go Back To Home",
    },
    es: {
      heroTitle: "¡Ya estás registrado!",
      heroText:
        "Gracias por inscribirte en Computación. Se ha enviado un correo de confirmación a ejemplo@correo.com con todo lo que necesitas saber antes de tu clase.",
      detailsTitle: "Detalles del registro",
      labels: {
        program: "Programa",
        student: "Estudiante",
        time: "Horario",
        location: "Ubicación",
        confirmation: "Confirmación #",
      },
      values: {
        program: "Computación",
        student: "Juana Pérez",
        time: "Sábado, 14 mar, 2026 – 10:30 am - 12:00 pm",
        location: "845 S Main St, Suite B8, Bountiful",
        confirmation: "00-0000000-000",
      },
      nextTitle: "Qué sigue",
      cards: {
        calendarTitle: "Agrégalo a tu calendario",
        calendarText: "Guarda las fechas de tu sesión para no perderte ninguna clase.",
        calendarLink: "Descargar archivo .ics",
        questionsTitle: "¿Preguntas antes de tu primera clase?",
        questionsText:
          "Con gusto respondemos cualquier duda sobre accesibilidad, qué llevar, inquietudes y más.",
        questionsLink: "Contáctanos",
        exploreTitle: "Explora más programas",
        exploreText: "Mira qué más está pasando en Club Ability esta primavera.",
        exploreLink: "Ver todas las clases",
      },
      homeButton: "Volver al Inicio",
    },
  } as const;

  const t = copy[language];

  return (
    <div className="thank-you-page">
      <style>
        {`
          .thank-you-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .ty-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .ty-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .ty-hero {
            background: #0c4a5a;
            padding: 36px 0 26px;
            border-bottom: 4px solid #e8206a;
          }

          .ty-hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .ty-check-wrap {
            width: 86px;
            height: 86px;
            border-radius: 999px;
            background: #f5e1ea;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }

          .ty-title {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            color: white;
            text-align: center;
          }

          .ty-subcopy {
            margin: 0;
            max-width: 760px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 400;
            color: white;
            text-align: center;
          }

          .ty-content {
            padding: 26px 0 60px;
          }

          .ty-details-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 22px 26px 18px;
            margin-bottom: 28px;
          }

          .ty-details-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-detail-row {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 18px;
            align-items: center;
            padding: 14px 0;
            border-bottom: 1.5px solid rgba(6, 36, 48, 0.55);
          }

          .ty-detail-row:last-child {
            border-bottom: none;
          }

          .ty-detail-label {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
          }

          .ty-detail-value {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #062430;
            text-align: right;
          }

          .ty-next-title {
            margin: 0 0 22px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-next-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 26px;
          }

          .ty-next-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 20px 18px 18px;
            display: flex;
            flex-direction: column;
            min-height: 250px;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .ty-next-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 18px rgba(0,0,0,0.14);
          }

          .ty-icon-badge {
            width: 34px;
            height: 34px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .ty-icon-badge.blue {
            background: #d7edf4;
            color: #0c4a5a;
          }

          .ty-icon-badge.pink {
            background: #f3dfe8;
            color: #cb356e;
          }

          .ty-card-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-card-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
            max-width: 250px;
          }

          .ty-card-link {
            margin-top: auto;
            border: none;
            background: transparent;
            padding: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            cursor: pointer;
            text-align: left;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: #062430;
          }

          .ty-card-link.pink-link {
            color: #cb356e;
          }

          .ty-bottom {
            display: flex;
            justify-content: center;
          }

          .ty-home-btn {
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            min-width: 244px;
            height: 50px;
            padding: 0 22px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.14);
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .ty-home-btn:hover,
          .ty-card-link:hover {
            transform: translateY(-2px);
            filter: brightness(0.98);
          }

          @media (max-width: 1100px) {
            .ty-next-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .ty-shell {
              padding: 0 16px;
            }

            .ty-title {
              font-size: 32px;
              line-height: 36px;
            }

            .ty-subcopy {
              font-size: 18px;
            }

            .ty-details-title,
            .ty-next-title,
            .ty-card-title {
              font-size: 26px;
              line-height: 30px;
            }

            .ty-detail-row {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .ty-detail-value {
              text-align: left;
              font-size: 16px;
            }

            .ty-home-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="ty-hero">
        <div className="ty-shell">
          <div className="ty-inner">
            <div className="ty-hero-content">
              <div className="ty-check-wrap">
                <Check size={42} color="#cb356e" strokeWidth={3} />
              </div>

              <h1 className="ty-title">{t.heroTitle}</h1>

              <p className="ty-subcopy">{t.heroText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ty-content">
        <div className="ty-shell">
          <div className="ty-inner">
            <div className="ty-details-card">
              <h2 className="ty-details-title">{t.detailsTitle}</h2>

              <div className="ty-detail-row">
                <div className="ty-detail-label">{t.labels.program}</div>
                <div className="ty-detail-value">{t.values.program}</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">{t.labels.student}</div>
                <div className="ty-detail-value">{t.values.student}</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">{t.labels.time}</div>
                <div className="ty-detail-value">{t.values.time}</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">{t.labels.location}</div>
                <div className="ty-detail-value">{t.values.location}</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">{t.labels.confirmation}</div>
                <div className="ty-detail-value">{t.values.confirmation}</div>
              </div>
            </div>

            <h3 className="ty-next-title">{t.nextTitle}</h3>

            <div className="ty-next-grid">
              <div className="ty-next-card">
                <div className="ty-icon-badge blue">
                  <CalendarDays size={18} />
                </div>

                <h4 className="ty-card-title">{t.cards.calendarTitle}</h4>

                <p className="ty-card-copy">{t.cards.calendarText}</p>

                <button className="ty-card-link" type="button">
                  {t.cards.calendarLink} <span>→</span>
                </button>
              </div>

              <div className="ty-next-card">
                <div className="ty-icon-badge pink">
                  <UserRound size={18} />
                </div>

                <h4 className="ty-card-title">{t.cards.questionsTitle}</h4>

                <p className="ty-card-copy">{t.cards.questionsText}</p>

                <button
                  className="ty-card-link pink-link"
                  type="button"
                  onClick={() => navigate("/get-started")}
                >
                  {t.cards.questionsLink} <span>→</span>
                </button>
              </div>

              <div className="ty-next-card">
                <div className="ty-icon-badge blue">
                  <Star size={18} />
                </div>

                <h4 className="ty-card-title">{t.cards.exploreTitle}</h4>

                <p className="ty-card-copy">{t.cards.exploreText}</p>

                <button
                  className="ty-card-link"
                  type="button"
                  onClick={() => navigate("/programs")}
                >
                  {t.cards.exploreLink} <span>→</span>
                </button>
              </div>
            </div>

            <div className="ty-bottom">
              <button
                className="ty-home-btn"
                type="button"
                onClick={() => navigate("/")}
              >
                {t.homeButton}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}