import { useNavigate } from "react-router-dom";
import { Check, Mail, Search, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function InterestSubmitted() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      heroTitle: "Thanks for your interest!",
      heroText:
        "We’ve received your class interest form. A member of the Club Ability team will follow up with more information and help guide you toward the best next step.",
      detailsTitle: "What happens next",
      steps: {
        oneTitle: "We review your form",
        oneText:
          "Our team looks over the information you submitted so we can better understand your interests and needs.",
        twoTitle: "We follow up",
        twoText:
          "We’ll reach out with more information, answer questions, and help you explore the best fit.",
        threeTitle: "You decide when you're ready",
        threeText:
          "This form does not register you for a class. It simply gives you a clear, low-pressure way to take the next step.",
      },
      nextTitle: "Helpful next steps",
      cards: {
        programsTitle: "Explore Programs",
        programsText:
          "Keep browsing the available programs to see what feels most interesting and relevant.",
        programsLink: "View all classes",
        contactTitle: "Need more help?",
        contactText:
          "Reach out to the team if you want help choosing a class or have questions before registering.",
        contactLink: "Contact us",
        homeTitle: "Return Home",
        homeText:
          "Go back to the homepage and continue exploring Club Ability at your own pace.",
        homeLink: "Go to homepage",
      },
      homeButton: "Back To Home",
    },
    es: {
      heroTitle: "¡Gracias por tu interés!",
      heroText:
        "Hemos recibido tu formulario de interés de clase. Un miembro del equipo de Club Ability se comunicará contigo con más información y te ayudará a encontrar el mejor siguiente paso.",
      detailsTitle: "Qué sucede después",
      steps: {
        oneTitle: "Revisamos tu formulario",
        oneText:
          "Nuestro equipo revisa la información que enviaste para comprender mejor tus intereses y necesidades.",
        twoTitle: "Nos comunicamos contigo",
        twoText:
          "Te contactaremos con más información, responderemos tus preguntas y te ayudaremos a explorar la mejor opción.",
        threeTitle: "Tú decides cuando estés listo",
        threeText:
          "Este formulario no te registra en una clase. Simplemente te da una manera clara y sin presión de dar el siguiente paso.",
      },
      nextTitle: "Siguientes pasos útiles",
      cards: {
        programsTitle: "Explorar Programas",
        programsText:
          "Sigue explorando los programas disponibles para ver cuál se siente más interesante y relevante.",
        programsLink: "Ver todas las clases",
        contactTitle: "¿Necesitas más ayuda?",
        contactText:
          "Comunícate con el equipo si quieres ayuda para elegir una clase o si tienes preguntas antes de registrarte.",
        contactLink: "Contáctanos",
        homeTitle: "Volver al Inicio",
        homeText:
          "Regresa a la página principal y sigue explorando Club Ability a tu propio ritmo.",
        homeLink: "Ir al inicio",
      },
      homeButton: "Volver al Inicio",
    },
  } as const;

  const t = copy[language];

  return (
    <div className="interest-submitted-page">
      <style>
        {`
          .interest-submitted-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .is-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .is-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .is-hero {
            background: #0c4a5a;
            padding: 36px 0 26px;
            border-bottom: 4px solid #e8206a;
          }

          .is-hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .is-check-wrap {
            width: 86px;
            height: 86px;
            border-radius: 999px;
            background: #f5e1ea;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }

          .is-title {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            color: white;
            text-align: center;
          }

          .is-subcopy {
            margin: 0;
            max-width: 760px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 400;
            color: white;
            text-align: center;
          }

          .is-content {
            padding: 26px 0 60px;
          }

          .is-steps-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 22px 26px 18px;
            margin-bottom: 28px;
          }

          .is-steps-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .is-step-row {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 18px;
            align-items: start;
            padding: 16px 0;
            border-bottom: 1.5px solid rgba(6, 36, 48, 0.55);
          }

          .is-step-row:last-child {
            border-bottom: none;
          }

          .is-step-label {
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1.2;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .is-step-value {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
          }

          .is-next-title {
            margin: 0 0 22px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .is-next-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 26px;
          }

          .is-next-card {
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

          .is-next-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 18px rgba(0,0,0,0.14);
          }

          .is-icon-badge {
            width: 34px;
            height: 34px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .is-icon-badge.blue {
            background: #d7edf4;
            color: #0c4a5a;
          }

          .is-icon-badge.pink {
            background: #f3dfe8;
            color: #cb356e;
          }

          .is-card-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .is-card-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
            max-width: 250px;
          }

          .is-card-link {
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

          .is-card-link.pink-link {
            color: #cb356e;
          }

          .is-bottom {
            display: flex;
            justify-content: center;
          }

          .is-home-btn {
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

          .is-home-btn:hover,
          .is-card-link:hover {
            transform: translateY(-2px);
            filter: brightness(0.98);
          }

          @media (max-width: 1100px) {
            .is-next-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .is-shell {
              padding: 0 16px;
            }

            .is-title {
              font-size: 32px;
              line-height: 36px;
            }

            .is-subcopy {
              font-size: 18px;
            }

            .is-steps-title,
            .is-next-title,
            .is-card-title {
              font-size: 26px;
              line-height: 30px;
            }

            .is-step-row {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .is-home-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="is-hero">
        <div className="is-shell">
          <div className="is-inner">
            <div className="is-hero-content">
              <div className="is-check-wrap">
                <Check size={42} color="#cb356e" strokeWidth={3} />
              </div>

              <h1 className="is-title">{t.heroTitle}</h1>

              <p className="is-subcopy">{t.heroText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="is-content">
        <div className="is-shell">
          <div className="is-inner">
            <div className="is-steps-card">
              <h2 className="is-steps-title">{t.detailsTitle}</h2>

              <div className="is-step-row">
                <div className="is-step-label">{t.steps.oneTitle}</div>
                <div className="is-step-value">{t.steps.oneText}</div>
              </div>

              <div className="is-step-row">
                <div className="is-step-label">{t.steps.twoTitle}</div>
                <div className="is-step-value">{t.steps.twoText}</div>
              </div>

              <div className="is-step-row">
                <div className="is-step-label">{t.steps.threeTitle}</div>
                <div className="is-step-value">{t.steps.threeText}</div>
              </div>
            </div>

            <h3 className="is-next-title">{t.nextTitle}</h3>

            <div className="is-next-grid">
              <div className="is-next-card">
                <div className="is-icon-badge blue">
                  <Search size={18} />
                </div>

                <h4 className="is-card-title">{t.cards.programsTitle}</h4>

                <p className="is-card-copy">{t.cards.programsText}</p>

                <button
                  className="is-card-link"
                  type="button"
                  onClick={() => navigate("/programs")}
                >
                  {t.cards.programsLink} <span>→</span>
                </button>
              </div>

              <div className="is-next-card">
                <div className="is-icon-badge pink">
                  <Mail size={18} />
                </div>

                <h4 className="is-card-title">{t.cards.contactTitle}</h4>

                <p className="is-card-copy">{t.cards.contactText}</p>

                <button
                  className="is-card-link pink-link"
                  type="button"
                  onClick={() => navigate("/contact")}
                >
                  {t.cards.contactLink} <span>→</span>
                </button>
              </div>

              <div className="is-next-card">
                <div className="is-icon-badge blue">
                  <Home size={18} />
                </div>

                <h4 className="is-card-title">{t.cards.homeTitle}</h4>

                <p className="is-card-copy">{t.cards.homeText}</p>

                <button
                  className="is-card-link"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  {t.cards.homeLink} <span>→</span>
                </button>
              </div>
            </div>

            <div className="is-bottom">
              <button
                className="is-home-btn"
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