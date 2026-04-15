import { ChevronLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import largeImg from "../assets/clubability/program-detail/largerimg.svg";
import rect10Img from "../assets/clubability/program-detail/Rectangle 10.svg";
import rect11Img from "../assets/clubability/program-detail/Rectangle 11.svg";
import rect12Img from "../assets/clubability/program-detail/Rectangle 12.svg";

type ScheduleItem = {
  month: string;
  day: string;
  start: string;
  end: string;
  status: "OPEN" | "FULL";
};

export default function ProgramDetail() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Computing",
      breadcrumb: "Programs",
      pageTitle: "Computing",
      category: "Computers",
      age: "Age 12+",
      mainAlt: "Computing program",
      thumb1Alt: "Computing class thumbnail 1",
      thumb2Alt: "Computing class thumbnail 2",
      thumb3Alt: "Computing class thumbnail 3",
      aboutTitle: "About This Program",
      aboutCopy1:
        "Learn the essential fundamentals of computing from scratch in a practical, dynamic, and easy-to-understand way. Develop digital skills that will help you in school, work, and your daily life.",
      aboutCopy2:
        "Students will build confidence using technology through guided instruction, hands-on activities, and real practice with core computer concepts. This program is designed to support beginners while helping learners strengthen problem-solving, digital literacy, and everyday computer skills in a welcoming environment.",
      locationTitle: "Location",
      location1: "ClubAbility Studio",
      location2: "845 S Main St, Suite B8",
      location3: "Bountiful",
      pricingTitle: "Pricing",
      standard: "Standard",
      standardPrice: "$90 / class",
      scholarship: "Scholarship",
      scholarshipValue: "Available",
      spotsRemaining: "12 spots remaining",
      registerNow: "Register Now",
      contactUs: "Contact Us",
      scheduleTitle: "Class Schedule",
      open: "OPEN",
      full: "FULL",
      months: {
        mar: "Mar",
      },
    },
    es: {
      bannerTitle: "Computación",
      breadcrumb: "Programas",
      pageTitle: "Computación",
      category: "Computadoras",
      age: "Edad 12+",
      mainAlt: "Programa de computación",
      thumb1Alt: "Miniatura de clase de computación 1",
      thumb2Alt: "Miniatura de clase de computación 2",
      thumb3Alt: "Miniatura de clase de computación 3",
      aboutTitle: "Sobre Este Programa",
      aboutCopy1:
        "Aprende los fundamentos esenciales de la computación desde cero de una manera práctica, dinámica y fácil de entender. Desarrolla habilidades digitales que te ayudarán en la escuela, el trabajo y la vida diaria.",
      aboutCopy2:
        "Los estudiantes desarrollarán confianza en el uso de la tecnología mediante instrucción guiada, actividades prácticas y experiencia real con conceptos básicos de computación. Este programa está diseñado para apoyar a principiantes mientras ayuda a fortalecer la resolución de problemas, la alfabetización digital y las habilidades informáticas cotidianas en un ambiente acogedor.",
      locationTitle: "Ubicación",
      location1: "ClubAbility Studio",
      location2: "845 S Main St, Suite B8",
      location3: "Bountiful",
      pricingTitle: "Precios",
      standard: "Estándar",
      standardPrice: "$90 / clase",
      scholarship: "Beca",
      scholarshipValue: "Disponible",
      spotsRemaining: "12 cupos disponibles",
      registerNow: "Regístrate Ahora",
      contactUs: "Contáctanos",
      scheduleTitle: "Horario de Clase",
      open: "ABIERTO",
      full: "LLENO",
      months: {
        mar: "Mar",
      },
    },
  } as const;

  const t = copy[language];

  const schedule: ScheduleItem[] = [
    { month: t.months.mar, day: "14", start: "10:30 am", end: "12:00 pm", status: "OPEN" },
    { month: t.months.mar, day: "15", start: "10:30 am", end: "12:00 pm", status: "FULL" },
    { month: t.months.mar, day: "16", start: "10:30 am", end: "12:00 pm", status: "OPEN" },
  ];

  return (
    <div className="program-detail-page">
      <style>
        {`
          .program-detail-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .pd-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .pd-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .pd-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .pd-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .pd-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .pd-breadcrumb {
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

          .pd-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .pd-content {
            padding: 40px 0 60px;
          }

          .pd-grid {
            display: grid;
            grid-template-columns: 1.08fr 0.92fr;
            gap: 36px;
            align-items: start;
          }

          .pd-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .pd-tags {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 26px;
          }

          .pd-tag {
            display: inline-flex;
            align-items: center;
            height: 42px;
            padding: 0 18px;
            border-radius: 999px;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }

          .pd-tag.category {
            background: #f3dfe8;
            color: #c14c74;
          }

          .pd-tag.age {
            background: #d7edf4;
            color: #4d7d8c;
          }

          .pd-gallery {
            margin-bottom: 24px;
          }

          .pd-main-image-wrap {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.14);
            margin-bottom: 14px;
          }

          .pd-main-image {
            width: 100%;
            height: 330px;
            object-fit: cover;
            display: block;
          }

          .pd-thumb-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .pd-thumb-wrap {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.12);
          }

          .pd-thumb {
            width: 100%;
            height: 148px;
            object-fit: cover;
            display: block;
          }

          .pd-section-title {
            margin: 0 0 16px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .pd-about-copy {
            margin: 0 0 18px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .pd-about-copy:last-child {
            margin-bottom: 0;
          }

          .pd-pricing-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 28px 28px 30px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.14);
            margin-top: 132px;
            margin-bottom: 28px;
          }

          .pd-pricing-title {
            margin: 0 0 34px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .pd-pricing-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 10px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #4a7a8a;
          }

          .pd-pricing-divider {
            height: 1.5px;
            background: rgba(6, 36, 48, 0.55);
          }

          .pd-spots {
            margin: 18px 0 22px 0;
            text-align: center;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #c23368;
          }

          .pd-action-btn {
            width: 100%;
            height: 46px;
            border: none;
            border-radius: 8px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .pd-action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .pd-action-btn.primary {
            background: #c23368;
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.14);
            margin-bottom: 14px;
          }

          .pd-action-btn.secondary {
            background: #062430;
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.14);
          }

          .pd-schedule-title {
            margin: 0 0 16px 2px;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .pd-schedule-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 40px;
          }

          .pd-schedule-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 16px 18px;
            display: grid;
            grid-template-columns: 82px 1px 1fr auto;
            gap: 18px;
            align-items: center;
          }

          .pd-date {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }

          .pd-date-month {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            color: #062430;
          }

          .pd-date-day {
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            margin-top: 6px;
          }

          .pd-vertical-line {
            width: 1px;
            height: 58px;
            background: rgba(6, 36, 48, 0.55);
          }

          .pd-time {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.3;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .pd-status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 76px;
            height: 34px;
            padding: 0 16px;
            border-radius: 999px;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            color: white;
          }

          .pd-status.open {
            background: #1eb8ec;
          }

          .pd-status.full {
            background: #cb356e;
          }

          .pd-location-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .pd-location-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .pd-location-icon {
            color: #111111;
            margin-top: 2px;
            flex-shrink: 0;
          }

          .pd-location-copy {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          @media (max-width: 1100px) {
            .pd-grid {
              grid-template-columns: 1fr;
            }

            .pd-pricing-card {
              margin-top: 0;
            }
          }

          @media (max-width: 900px) {
            .pd-shell {
              padding: 0 16px;
            }

            .pd-banner-row {
              flex-wrap: wrap;
            }

            .pd-banner-title {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .pd-title {
              font-size: 32px;
              line-height: 36px;
            }

            .pd-section-title,
            .pd-pricing-title,
            .pd-schedule-title,
            .pd-location-title {
              font-size: 26px;
              line-height: 30px;
            }

            .pd-thumb-grid {
              grid-template-columns: 1fr;
            }

            .pd-main-image {
              height: 260px;
            }

            .pd-thumb {
              height: 180px;
            }

            .pd-schedule-card {
              grid-template-columns: 1fr;
              gap: 14px;
            }

            .pd-vertical-line {
              display: none;
            }

            .pd-status {
              justify-self: start;
            }

            .pd-action-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="pd-banner">
        <div className="pd-shell">
          <div className="pd-inner">
            <div className="pd-banner-row">
              <h2 className="pd-banner-title">{t.bannerTitle}</h2>

              <button
                className="pd-breadcrumb"
                onClick={() => navigate("/programs")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>{t.breadcrumb}</span>
              </button>

              <div className="pd-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="pd-content">
        <div className="pd-shell">
          <div className="pd-inner">
            <div className="pd-grid">
              <div>
                <h1 className="pd-title">{t.pageTitle}</h1>

                <div className="pd-tags">
                  <span className="pd-tag category">{t.category}</span>
                  <span className="pd-tag age">{t.age}</span>
                </div>

                <div className="pd-gallery">
                  <div className="pd-main-image-wrap">
                    <img className="pd-main-image" src={largeImg} alt={t.mainAlt} />
                  </div>

                  <div className="pd-thumb-grid">
                    <div className="pd-thumb-wrap">
                      <img className="pd-thumb" src={rect10Img} alt={t.thumb1Alt} />
                    </div>
                    <div className="pd-thumb-wrap">
                      <img className="pd-thumb" src={rect11Img} alt={t.thumb2Alt} />
                    </div>
                    <div className="pd-thumb-wrap">
                      <img className="pd-thumb" src={rect12Img} alt={t.thumb3Alt} />
                    </div>
                  </div>
                </div>

                <h2 className="pd-section-title">{t.aboutTitle}</h2>

                <p className="pd-about-copy">{t.aboutCopy1}</p>

                <p className="pd-about-copy">{t.aboutCopy2}</p>

                <div style={{ marginTop: "44px" }}>
                  <h2 className="pd-location-title">{t.locationTitle}</h2>

                  <div className="pd-location-row">
                    <MapPin size={22} className="pd-location-icon" />
                    <div className="pd-location-copy">
                      <div>{t.location1}</div>
                      <div>{t.location2}</div>
                      <div>{t.location3}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="pd-pricing-card">
                  <h2 className="pd-pricing-title">{t.pricingTitle}</h2>

                  <div className="pd-pricing-row">
                    <span>{t.standard}</span>
                    <span>{t.standardPrice}</span>
                  </div>
                  <div className="pd-pricing-divider" />

                  <div className="pd-pricing-row">
                    <span>{t.scholarship}</span>
                    <span>{t.scholarshipValue}</span>
                  </div>
                  <div className="pd-pricing-divider" />

                  <div className="pd-spots">{t.spotsRemaining}</div>

                  <button
                    className="pd-action-btn primary"
                    type="button"
                    onClick={() => navigate("/registration")}
                  >
                    {t.registerNow}
                  </button>

                  <button
                    className="pd-action-btn secondary"
                    type="button"
                    onClick={() => navigate("/get-started")}
                  >
                    {t.contactUs}
                  </button>
                </div>

                <h2 className="pd-schedule-title">{t.scheduleTitle}</h2>

                <div className="pd-schedule-list">
                  {schedule.map((item) => (
                    <div key={`${item.month}-${item.day}`} className="pd-schedule-card">
                      <div className="pd-date">
                        <span className="pd-date-month">{item.month}</span>
                        <span className="pd-date-day">{item.day}</span>
                      </div>

                      <div className="pd-vertical-line" />

                      <div className="pd-time">
                        <div>{item.start}</div>
                        <div>{item.end}</div>
                      </div>

                      <div
                        className={`pd-status ${item.status === "OPEN" ? "open" : "full"}`}
                      >
                        {item.status === "OPEN" ? t.open : t.full}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}