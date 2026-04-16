import { useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, ChevronLeft, Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import robot1 from "../assets/clubability/volunteer/robot1.svg";
import robot2 from "../assets/clubability/volunteer/robot2.svg";
import robot3 from "../assets/clubability/volunteer/robot3.svg";

export default function Volunteer() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Volunteer",
      breadcrumb: "Get Involved",
      intro:
        "Make a difference by sharing your skills,\nmentoring students, and supporting STEM education.",
      sectionTitle: "Why Volunteer With Club Ability",
      formTitle: "Volunteer Interest Form",
      yourInfo: "Your info",
      areaOfInterest: "Area Of Interest",
      availability: "Availability",
      additionalNotes: "Additional Notes (Optional)",
      submit: "Submit",
      needHelp: "Need Help?",
      helpText:
        "Have questions about programs or enrollment?\nContact our team and we'll be happy to assist you.",
      firstName: "First name",
      lastName: "Last name",
      emailAddress: "Email address",
      phoneNumber: "Phone number",
      other: "Other:",
      typeHere: "Type Here",
      availabilityPlaceholder: "Type Here Or Manually Select Times",
      selectAvailability: "Select Availability",
      notesPlaceholder: "Type Here to Form Message",
      firstNameDefault: "Jane",
      lastNameDefault: "Smith",
      emailDefault: "example@email.com",
      phoneDefault: "801 555-1234",
      interests: ["Mentoring", "Teaching", "Technical Support", "Event"],
      availabilityOptions: ["Weekdays", "Evenings", "Weekends", "Flexible"],
      benefits: [
        {
          title: "Mentor Students",
          text: "Help guide students through hands-on technology projects.",
        },
        {
          title: "Share Your Skills",
          text: "Teach coding, design, or professional knowledge.",
        },
        {
          title: "Make an Impact",
          text: "Support students and strengthen your community.",
        },
      ],
    },
    es: {
      bannerTitle: "Voluntariado",
      breadcrumb: "Participa",
      intro:
        "Marca la diferencia compartiendo tus habilidades,\nmentoreando a estudiantes y apoyando la educación STEM.",
      sectionTitle: "Por Qué Ser Voluntario en Club Ability",
      formTitle: "Formulario de Interés de Voluntariado",
      yourInfo: "Tu información",
      areaOfInterest: "Área de Interés",
      availability: "Disponibilidad",
      additionalNotes: "Notas Adicionales (Opcional)",
      submit: "Enviar",
      needHelp: "¿Necesitas Ayuda?",
      helpText:
        "¿Tienes preguntas sobre programas o inscripción?\nContacta a nuestro equipo y con gusto te ayudaremos.",
      firstName: "Nombre",
      lastName: "Apellido",
      emailAddress: "Correo electrónico",
      phoneNumber: "Número de teléfono",
      other: "Otro:",
      typeHere: "Escribe Aquí",
      availabilityPlaceholder: "Escribe Aquí O Selecciona Horarios Manualmente",
      selectAvailability: "Seleccionar Disponibilidad",
      notesPlaceholder: "Escribe Aquí tu Mensaje",
      firstNameDefault: "Juana",
      lastNameDefault: "Pérez",
      emailDefault: "ejemplo@correo.com",
      phoneDefault: "801 555-1234",
      interests: ["Mentoría", "Enseñanza", "Soporte Técnico", "Eventos"],
      availabilityOptions: ["Entre semana", "Tardes", "Fines de semana", "Flexible"],
      benefits: [
        {
          title: "Mentorea a Estudiantes",
          text: "Ayuda a guiar a estudiantes en proyectos tecnológicos prácticos.",
        },
        {
          title: "Comparte Tus Habilidades",
          text: "Enseña programación, diseño o conocimiento profesional.",
        },
        {
          title: "Genera Impacto",
          text: "Apoya a estudiantes y fortalece tu comunidad.",
        },
      ],
    },
  } as const;

  const t = copy[language];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [showAvailabilityOptions, setShowAvailabilityOptions] = useState(false);

  const [firstName, setFirstName] = useState<string>(t.firstNameDefault);
  const [lastName, setLastName] = useState<string>(t.lastNameDefault);
  const [email, setEmail] = useState<string>(t.emailDefault);
  const [phone, setPhone] = useState<string>(t.phoneDefault);
  const [otherInterest, setOtherInterest] = useState<string>("");
  const [availabilityText, setAvailabilityText] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const toggleItem = (
    item: string,
    selected: string[],
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setter(selected.filter((value) => value !== item));
    } else {
      setter([...selected, item]);
    }
  };

  const interests: string[] = [...t.interests];
  const availabilityOptions: string[] = [...t.availabilityOptions];

  return (
    <div className="volunteer-page">
      <style>
        {`
          .volunteer-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .vol-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .vol-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .vol-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .vol-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .vol-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .vol-breadcrumb {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: white;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            white-space: nowrap;
            opacity: 0.96;
          }

          .vol-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .vol-content {
            padding: 12px 0 68px;
          }

          .vol-intro {
            max-width: 920px;
            margin: 0 0 64px 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 600;
            color: #062430;
            text-align: left;
            white-space: pre-line;
          }

          .vol-section-title {
            margin: 0 0 64px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-benefits-wrap {
            max-width: 1040px;
            margin: 0 auto 64px;
            background: #f3dfe8;
            padding: 18px;
            box-sizing: border-box;
            border-radius: 8px;
          }

          .vol-benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }

          .vol-benefit-card {
            height: 250px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 3px 8px rgba(0,0,0,0.14);
            padding: 18px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          .vol-benefit-card.dark,
          .vol-benefit-card.teal {
            background: #00384b;
            color: white;
          }

          .vol-benefit-top {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 22px;
          }

          .vol-benefit-icon {
            width: 30px;
            height: 30px;
            object-fit: contain;
            display: block;
            flex-shrink: 0;
          }

          .vol-benefit-title {
            margin: 0;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1.1;
            font-weight: 600;
            text-align: left;
            color: white;
          }

          .vol-benefit-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            text-align: left;
            color: rgba(255,255,255,0.95);
            max-width: 220px;
          }

          .vol-form-title {
            margin: 0 0 24px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-stack {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .vol-panel {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 18px 14px 16px;
          }

          .vol-panel-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .vol-label {
            display: block;
            margin: 0 0 8px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .vol-field {
            margin-bottom: 14px;
          }

          .vol-field:last-child {
            margin-bottom: 0;
          }

          .vol-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .vol-input,
          .vol-textarea,
          .vol-select-trigger {
            width: 100%;
            border-radius: 8px;
            border: 1.5px solid #c7dbe3;
            background: #ffffff;
            box-sizing: border-box;
            outline: none;
            font-family: Roboto, sans-serif;
            color: #6b7f89;
          }

          .vol-input {
            height: 42px;
            padding: 0 12px;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
          }

          .vol-input:focus,
          .vol-textarea:focus {
            border-color: #8bb2c1;
          }

          .vol-check-grid {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }

          .vol-checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: #111111;
            cursor: pointer;
          }

          .vol-checkbox input {
            width: 14px;
            height: 14px;
            margin: 0;
            accent-color: #cb356e;
          }

          .vol-inline-other {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 2px;
            flex-wrap: wrap;
          }

          .vol-inline-other .vol-input {
            width: 170px;
            height: 34px;
          }

          .vol-select-area {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }

          .vol-free-input {
            flex: 1;
            min-width: 280px;
          }

          .vol-select-wrap {
            position: relative;
            width: 190px;
          }

          .vol-select-trigger {
            height: 28px;
            padding: 0 28px 0 10px;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            text-align: left;
            cursor: pointer;
          }

          .vol-select-icon {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #1d3340;
          }

          .vol-option-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
          }

          .vol-textarea {
            min-height: 160px;
            padding: 12px;
            resize: vertical;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
          }

          .vol-submit-wrap {
            display: flex;
            justify-content: center;
            padding-top: 12px;
          }

          .vol-submit-btn {
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            min-width: 122px;
            height: 48px;
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

          .vol-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .vol-help {
            padding-top: 64px;
          }

          .vol-help-title {
            margin: 0 0 20px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-help-body {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            text-align: left;
          }

          .vol-help-copy {
            margin: 0 0 18px 0;
            max-width: 520px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
            white-space: pre-line;
          }

          .vol-help-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .vol-help-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .vol-help-item svg {
            flex-shrink: 0;
            color: #1b2e38;
          }

          @media (max-width: 900px) {
            .vol-shell {
              padding: 0 16px;
            }

            .vol-banner-row {
              flex-wrap: wrap;
            }

            .vol-banner-title {
              font-size: 32px;
              line-height: 36px;
            }

            .vol-content {
              padding: 12px 0 58px;
            }

            .vol-intro {
              font-size: 22px;
              line-height: 1.2;
              margin-bottom: 48px;
            }

            .vol-section-title,
            .vol-form-title,
            .vol-panel-title,
            .vol-help-title {
              font-size: 26px;
              line-height: 30px;
            }

            .vol-benefits-wrap {
              margin-bottom: 48px;
              padding: 14px;
            }

            .vol-benefits-grid {
              grid-template-columns: 1fr;
            }

            .vol-benefit-card {
              height: auto;
              min-height: 220px;
            }

            .vol-grid-2 {
              grid-template-columns: 1fr;
            }

            .vol-select-area {
              flex-direction: column;
              align-items: stretch;
            }

            .vol-free-input {
              min-width: 0;
            }

            .vol-select-wrap {
              width: 100%;
            }

            .vol-help {
              padding-top: 48px;
            }

            .vol-submit-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="vol-banner">
        <div className="vol-shell">
          <div className="vol-inner">
            <div className="vol-banner-row">
              <h2 className="vol-banner-title">{t.bannerTitle}</h2>

              <button
                className="vol-breadcrumb"
                onClick={() => navigate("/get-involved")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>{t.breadcrumb}</span>
              </button>

              <div className="vol-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="vol-content">
        <div className="vol-shell">
          <div className="vol-inner">
            <div className="vol-intro">{t.intro}</div>

            <h2 className="vol-section-title">{t.sectionTitle}</h2>

            <div className="vol-benefits-wrap">
              <div className="vol-benefits-grid">
                <div className="vol-benefit-card dark">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot1} alt="" />
                    <h3 className="vol-benefit-title">{t.benefits[0].title}</h3>
                  </div>
                  <p className="vol-benefit-copy">{t.benefits[0].text}</p>
                </div>

                <div className="vol-benefit-card dark">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot2} alt="" />
                    <h3 className="vol-benefit-title">{t.benefits[1].title}</h3>
                  </div>
                  <p className="vol-benefit-copy">{t.benefits[1].text}</p>
                </div>

                <div className="vol-benefit-card teal">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot3} alt="" />
                    <h3 className="vol-benefit-title">{t.benefits[2].title}</h3>
                  </div>
                  <p className="vol-benefit-copy">{t.benefits[2].text}</p>
                </div>
              </div>
            </div>

            <h2 className="vol-form-title">{t.formTitle}</h2>

            <div className="vol-stack">
              <div className="vol-panel">
                <h3 className="vol-panel-title">{t.yourInfo}</h3>

                <div className="vol-grid-2">
                  <div className="vol-field">
                    <label className="vol-label">{t.firstName}</label>
                    <input
                      className="vol-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className="vol-field">
                    <label className="vol-label">{t.lastName}</label>
                    <input
                      className="vol-input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="vol-field">
                  <label className="vol-label">{t.emailAddress}</label>
                  <input
                    className="vol-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="vol-field">
                  <label className="vol-label">{t.phoneNumber}</label>
                  <input
                    className="vol-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">{t.areaOfInterest}</h3>

                <div className="vol-check-grid">
                  {interests.map((interest) => (
                    <label key={interest} className="vol-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() =>
                          toggleItem(interest, selectedInterests, setSelectedInterests)
                        }
                      />
                      <span>{interest}</span>
                    </label>
                  ))}

                  <div className="vol-inline-other">
                    <label className="vol-checkbox">
                      <input type="checkbox" />
                      <span>{t.other}</span>
                    </label>
                    <input
                      className="vol-input"
                      placeholder={t.typeHere}
                      value={otherInterest}
                      onChange={(e) => setOtherInterest(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">{t.availability}</h3>

                <div className="vol-select-area">
                  <input
                    className="vol-input vol-free-input"
                    placeholder={t.availabilityPlaceholder}
                    value={availabilityText}
                    onChange={(e) => setAvailabilityText(e.target.value)}
                  />

                  <div className="vol-select-wrap">
                    <button
                      type="button"
                      className="vol-select-trigger"
                      onClick={() => setShowAvailabilityOptions((prev) => !prev)}
                    >
                      {t.selectAvailability}
                    </button>
                    <ChevronDown size={14} className="vol-select-icon" />
                  </div>
                </div>

                {(showAvailabilityOptions || selectedAvailability.length > 0) && (
                  <div className="vol-option-list">
                    {availabilityOptions.map((option) => (
                      <label key={option} className="vol-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(option)}
                          onChange={() =>
                            toggleItem(
                              option,
                              selectedAvailability,
                              setSelectedAvailability
                            )
                          }
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">{t.additionalNotes}</h3>
                <textarea
                  className="vol-textarea"
                  placeholder={t.notesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="vol-submit-wrap">
                <button
                  className="vol-submit-btn"
                  type="button"
                  onClick={() => navigate("/thank-you")}
                >
                  {t.submit}
                </button>
              </div>
            </div>

            <div className="vol-help">
              <h3 className="vol-help-title">{t.needHelp}</h3>

              <div className="vol-help-body">
                <p className="vol-help-copy">{t.helpText}</p>

                <div className="vol-help-list">
                  <div className="vol-help-item">
                    <Phone size={14} />
                    <span>+1 (385) 217-1791</span>
                  </div>

                  <div className="vol-help-item">
                    <MapPin size={14} />
                    <span>845 S Main St B8, Bountiful, UT 84010</span>
                  </div>

                  <div className="vol-help-item">
                    <Mail size={14} />
                    <span>info@clubability.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}