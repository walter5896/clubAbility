import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import logoImg from "../../assets/clubability/shared/Clubability Logo.svg";
import facebookIcon from "../../assets/clubability/shared/facebook.svg";
import socialIcon1 from "../../assets/clubability/shared/Social Icons1.svg";
import socialIcon2 from "../../assets/clubability/shared/Social Icons2.svg";
import socialIcon3 from "../../assets/clubability/shared/Social Icons3.svg";
import socialIconMain from "../../assets/clubability/shared/Social Icons.svg";
import locationIcon from "../../assets/clubability/shared/location_on.png";
import phoneIcon from "../../assets/clubability/shared/phone.svg";

export default function Footer() {
  const { language } = useLanguage();

  const copy = {
    en: {
      programsGroup: "Programs",
      aboutGroup: "About",
      getInvolvedGroup: "Get Involved",
      programs: "Programs",
      stories: "Stories",
      about: "About",
      awards: "Awards",
      donate: "Donate",
      volunteer: "Volunteer",
      sponsors: "Sponsors",
      contact: "Contact Us",
      addressLine1: "845 S Main St B8,",
      addressLine2: "Bountiful, UT 84010",
      phone: "+13852171791",
      copyright: "© 2026 Club Ability. All rights reserved.",
    },
    es: {
      programsGroup: "Programas",
      aboutGroup: "Sobre Nosotros",
      getInvolvedGroup: "Participa",
      programs: "Programas",
      stories: "Historias",
      about: "Sobre Nosotros",
      awards: "Premios",
      donate: "Donar",
      volunteer: "Voluntariado",
      sponsors: "Patrocinadores",
      contact: "Contáctanos",
      addressLine1: "845 S Main St B8,",
      addressLine2: "Bountiful, UT 84010",
      phone: "+13852171791",
      copyright: "© 2026 Club Ability. Todos los derechos reservados.",
    },
  } as const;

  const t = copy[language];

  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-top">
          <div className="site-footer-brand-block">
            <Link to="/" className="site-footer-logo-link">
              <img
                src={logoImg}
                alt="Club Ability Logo"
                className="site-footer-logo"
              />
            </Link>
          </div>

          <div className="site-footer-right">
            <div className="site-footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="site-footer-social-link"
              >
                <img src={facebookIcon} alt="" className="site-footer-social-img" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="site-footer-social-link"
              >
                <img src={socialIcon1} alt="" className="site-footer-social-img" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="site-footer-social-link"
              >
                <img src={socialIcon2} alt="" className="site-footer-social-img" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="site-footer-social-link"
              >
                <img src={socialIcon3} alt="" className="site-footer-social-img" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="site-footer-social-link"
              >
                <img src={socialIconMain} alt="" className="site-footer-social-img" />
              </a>
            </div>

            <div className="site-footer-contact">
              <div className="site-footer-contact-block">
                <img
                  src={locationIcon}
                  alt=""
                  className="site-footer-contact-icon"
                />
                <div className="site-footer-contact-text">
                  <p>{t.addressLine1}</p>
                  <p>{t.addressLine2}</p>
                </div>
              </div>

              <div className="site-footer-contact-block site-footer-phone-block">
                <img
                  src={phoneIcon}
                  alt=""
                  className="site-footer-contact-icon"
                />
                <p className="site-footer-contact-single">{t.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-divider" />

        <div className="site-footer-links-grid">
          <div className="site-footer-link-group">
            <Link
              to="/programs"
              className="site-footer-group-title site-footer-group-link"
            >
              {t.programsGroup}
            </Link>
          </div>

          <div className="site-footer-link-group">
            <Link
              to="/about"
              className="site-footer-group-title site-footer-group-link"
            >
              {t.aboutGroup}
            </Link>

            <nav className="site-footer-group-links">
              <Link to="/stories" className="site-footer-nav-link">
                {t.stories}
              </Link>
              <Link to="/awards" className="site-footer-nav-link">
                {t.awards}
              </Link>
            </nav>
          </div>

          <div className="site-footer-link-group">
            <Link
              to="/get-involved"
              className="site-footer-group-title site-footer-group-link"
            >
              {t.getInvolvedGroup}
            </Link>

            <nav className="site-footer-group-links">
              <Link to="/donate" className="site-footer-nav-link">
                {t.donate}
              </Link>
              <Link to="/volunteer" className="site-footer-nav-link">
                {t.volunteer}
              </Link>
              <Link to="/sponsors" className="site-footer-nav-link">
                {t.sponsors}
              </Link>
              <Link to="/contact" className="site-footer-nav-link">
                {t.contact}
              </Link>
            </nav>
          </div>
        </div>

        <div className="site-footer-copyright">{t.copyright}</div>
      </div>

      <style>
        {`
          .site-footer {
            background: #062430;
            padding: 26px 0 0;
            margin-top: 0;
          }

          .site-footer-shell {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px 24px 24px;
            box-sizing: border-box;
          }

          .site-footer-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 28px;
            padding-bottom: 20px;
          }

          .site-footer-brand-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            flex-shrink: 0;
          }

          .site-footer-logo-link {
            display: inline-flex;
            align-items: center;
          }

          .site-footer-logo {
            width: 150px;
            height: 58px;
            object-fit: contain;
            display: block;
          }

          .site-footer-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 20px;
            width: 100%;
          }

          .site-footer-socials {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .site-footer-social-link {
            width: 44px;
            height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            transition:
              transform 0.18s ease,
              opacity 0.18s ease,
              background 0.18s ease;
          }

          .site-footer-social-link:hover {
            transform: translateY(-2px);
            opacity: 0.92;
            background: rgba(255, 255, 255, 0.06);
          }

          .site-footer-social-img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            display: block;
          }

          .site-footer-contact {
            display: flex;
            align-items: center;
            gap: 28px;
            flex-wrap: wrap;
            color: #ffffff;
          }

          .site-footer-contact-block {
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }

          .site-footer-phone-block {
            align-items: center;
          }

          .site-footer-contact-icon {
            width: 26px;
            height: 26px;
            object-fit: contain;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .site-footer-contact-text p,
          .site-footer-contact-single {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.3;
            font-weight: 400;
            color: #ffffff;
          }

          .site-footer-divider {
            height: 3px;
            background: #ff2f86;
            width: 100%;
            margin: 0 0 22px 0;
          }

          .site-footer-links-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(180px, 1fr));
            gap: 34px 48px;
            align-items: start;
          }

          .site-footer-link-group {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .site-footer-group-title {
            margin: 0;
            color: #ffffff;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 700;
          }

          .site-footer-group-link {
            text-decoration: none;
            transition: opacity 0.18s ease;
          }

          .site-footer-group-link:hover {
            opacity: 0.86;
          }

          .site-footer-group-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .site-footer-nav-link {
            color: rgba(255, 255, 255, 0.88);
            text-decoration: none;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.2;
            font-weight: 400;
            transition: opacity 0.18s ease;
          }

          .site-footer-nav-link:hover {
            opacity: 0.86;
          }

          .site-footer-copyright {
            margin-top: 28px;
            padding-top: 18px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            color: rgba(255, 255, 255, 0.72);
            font-family: Roboto, sans-serif;
            font-size: 13px;
            line-height: 1.3;
            font-weight: 400;
            text-align: left;
          }

          @media (max-width: 900px) {
            .site-footer-shell {
              padding: 0 16px 22px 16px;
            }

            .site-footer-top {
              flex-direction: column;
              align-items: flex-start;
            }

            .site-footer-right {
              align-items: flex-start;
            }

            .site-footer-contact {
              flex-direction: column;
              align-items: flex-start;
              gap: 14px;
            }

            .site-footer-links-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .site-footer-socials {
              gap: 18px;
            }

            .site-footer-social-link {
              width: 48px;
              height: 48px;
            }

            .site-footer-social-img {
              width: 34px;
              height: 34px;
            }

            .site-footer-copyright {
              margin-top: 24px;
            }
          }
        `}
      </style>
    </footer>
  );
}