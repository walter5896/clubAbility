import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import logoImg from "../../assets/clubability/shared/Clubability Logo.svg";
import accountIcon from "../../assets/clubability/shared/account_circle.svg";

type HeaderProps = {
  onLoginClick: () => void;
};

export default function Header({ onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const copy = {
    en: {
      programs: "Programs",
      about: "About",
      getInvolved: "Get Involved",
      account: "Account",
      langShort: "EN",
      langSwitch: "ES",
      langLabel: "Switch language",
    },
    es: {
      programs: "Programas",
      about: "Sobre Nosotros",
      getInvolved: "Participa",
      account: "Cuenta",
      langShort: "ES",
      langSwitch: "EN",
      langLabel: "Cambiar idioma",
    },
  };

  const t = copy[language];

  return (
    <header className="site-header">
      <div className="site-header-shell">
        <div className="site-header-row">
          <Link to="/" className="site-header-logo-link">
            <img
              src={logoImg}
              alt="Club Ability Logo"
              className="site-header-logo"
            />
          </Link>

          <nav className="site-header-nav desktop-nav">
            <Link to="/programs" className="site-header-nav-link">
              {t.programs}
            </Link>

            <Link to="/about" className="site-header-nav-link">
              {t.about}
            </Link>

            <Link to="/get-involved" className="site-header-nav-link">
              {t.getInvolved}
            </Link>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.langLabel}
              className="site-header-language-btn"
            >
              <span className="site-header-language-current">{t.langShort}</span>
              <span className="site-header-language-divider">/</span>
              <span className="site-header-language-next">{t.langSwitch}</span>
            </button>

            <button
              type="button"
              aria-label={t.account}
              onClick={onLoginClick}
              className="site-header-account-btn"
            >
              <img
                src={accountIcon}
                alt=""
                className="site-header-account-icon"
              />
            </button>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="site-header-mobile-nav">
            <Link
              to="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="site-header-mobile-link"
            >
              {t.programs}
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="site-header-mobile-link"
            >
              {t.about}
            </Link>

            <Link
              to="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="site-header-mobile-link"
            >
              {t.getInvolved}
            </Link>

            <button
              type="button"
              onClick={() => {
                toggleLanguage();
              }}
              className="site-header-mobile-link site-header-mobile-button"
            >
              {t.langShort} / {t.langSwitch}
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="site-header-mobile-link site-header-mobile-button"
            >
              {t.account}
            </button>
          </nav>
        )}
      </div>

      <style>
        {`
          .site-header {
            background: #062430;
            position: sticky;
            top: 0;
            z-index: 50;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
          }

          .site-header-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .site-header-row {
            min-height: 76px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .site-header-logo-link {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
          }

          .site-header-logo {
            width: 155px;
            height: 60px;
            object-fit: contain;
            display: block;
          }

          .site-header-nav {
            display: flex;
            align-items: center;
            gap: 36px;
          }

          .site-header-nav-link {
            color: #ffffff;
            text-decoration: none;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 1;
            font-weight: 400;
            transition: opacity 0.18s ease;
          }

          .site-header-nav-link:hover,
          .site-header-mobile-link:hover {
            opacity: 0.86;
          }

          .site-header-language-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.34);
            border-radius: 999px;
            padding: 8px 12px;
            color: #ffffff;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 500;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              opacity 0.18s ease,
              border-color 0.18s ease;
          }

          .site-header-language-btn:hover {
            transform: translateY(-1px);
            opacity: 0.92;
            border-color: rgba(255, 255, 255, 0.55);
          }

          .site-header-language-current {
            color: #ffffff;
          }

          .site-header-language-divider,
          .site-header-language-next {
            color: rgba(255, 255, 255, 0.75);
          }

          .site-header-account-btn {
            background: transparent;
            border: none;
            padding: 0;
            margin: 0;
            width: 48px;
            height: 48px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.18s ease, opacity 0.18s ease;
          }

          .site-header-account-btn:hover {
            transform: translateY(-1px);
            opacity: 0.92;
          }

          .site-header-account-icon {
            width: 48px;
            height: 48px;
            display: block;
          }

          .mobile-menu-button {
            display: none;
            background: transparent;
            border: none;
            color: #ffffff;
            cursor: pointer;
            padding: 4px;
            align-items: center;
            justify-content: center;
          }

          .site-header-mobile-nav {
            margin-top: 4px;
            padding: 16px 0 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .site-header-mobile-link {
            color: #ffffff;
            text-decoration: none;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1;
            font-weight: 400;
          }

          .site-header-mobile-button {
            background: transparent;
            border: none;
            padding: 0;
            text-align: left;
            cursor: pointer;
          }

          @media (max-width: 900px) {
            .site-header-shell {
              padding: 0 16px;
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-menu-button {
              display: inline-flex;
            }

            .site-header-row {
              min-height: 72px;
            }

            .site-header-logo {
              width: 142px;
              height: 54px;
            }

            .site-header-mobile-link {
              font-size: 24px;
            }
          }
        `}
      </style>
    </header>
  );
}