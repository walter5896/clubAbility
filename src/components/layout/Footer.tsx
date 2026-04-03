import { Link } from "react-router-dom";
import type { CSSProperties } from "react";

import logoImg from "../../assets/clubability/shared/Clubability Logo.svg";
import facebookIcon from "../../assets/clubability/shared/facebook.svg";
import socialIcon1 from "../../assets/clubability/shared/Social Icons1.svg";
import socialIcon2 from "../../assets/clubability/shared/Social Icons2.svg";
import socialIcon3 from "../../assets/clubability/shared/Social Icons3.svg";
import socialIconMain from "../../assets/clubability/shared/Social Icons.svg";
import locationIcon from "../../assets/clubability/shared/location_on.png";
import phoneIcon from "../../assets/clubability/shared/phone.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-top footer-top">
          <Link to="/" className="site-footer-logo-link">
            <img
              src={logoImg}
              alt="Club Ability Logo"
              className="site-footer-logo"
            />
          </Link>

          <div className="site-footer-right footer-right">
            <div className="site-footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={socialLinkStyle}
              >
                <img src={facebookIcon} alt="" style={socialImgStyle} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={socialLinkStyle}
              >
                <img src={socialIcon1} alt="" style={socialImgStyle} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={socialLinkStyle}
              >
                <img src={socialIcon2} alt="" style={socialImgStyle} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={socialLinkStyle}
              >
                <img src={socialIcon3} alt="" style={socialImgStyle} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={socialLinkStyle}
              >
                <img src={socialIconMain} alt="" style={socialImgStyle} />
              </a>
            </div>

            <div className="site-footer-contact footer-contact">
              <div className="site-footer-contact-block">
                <img
                  src={locationIcon}
                  alt=""
                  className="site-footer-contact-icon"
                />
                <div className="site-footer-contact-text">
                  <p>845 S Main St B8,</p>
                  <p>Bountiful, UT 84010</p>
                </div>
              </div>

              <div className="site-footer-contact-block site-footer-phone-block">
                <img
                  src={phoneIcon}
                  alt=""
                  className="site-footer-contact-icon"
                />
                <p className="site-footer-contact-single">+13852171791</p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-divider" />

        <nav className="site-footer-nav footer-nav">
          <Link to="/about" className="site-footer-nav-link">
            About
          </Link>
          <Link to="/stories" className="site-footer-nav-link">
            Stories
          </Link>
          <Link to="/awards" className="site-footer-nav-link">
            Awards
          </Link>
          <Link to="/donate" className="site-footer-nav-link">
            Donate
          </Link>
          <Link to="/volunteer" className="site-footer-nav-link">
            Volunteer
          </Link>
          <Link to="/sponsors" className="site-footer-nav-link">
            Sponsors
          </Link>
          <Link to="/contact" className="site-footer-nav-link">
            Contact Us
          </Link>
          <Link to="/get-involved" className="site-footer-nav-link">
            Get Involved
          </Link>
          <Link to="/programs" className="site-footer-nav-link">
            Programs
          </Link>
        </nav>
      </div>

      <style>
        {`
          .site-footer {
            background: #062430;
            padding: 20px 0 0;
            margin-top: 80px;
          }

          .site-footer-shell {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px 14px 24px;
            box-sizing: border-box;
          }

          .site-footer-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
            padding-bottom: 14px;
          }

          .site-footer-logo-link {
            flex-shrink: 0;
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
            align-items: center;
            gap: 28px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .site-footer-socials {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .site-footer-contact {
            display: flex;
            align-items: center;
            gap: 20px;
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
            line-height: 1.25;
            font-weight: 400;
            color: #ffffff;
          }

          .site-footer-divider {
            height: 3px;
            background: #ff2f86;
            width: 100%;
            margin: 0 0 10px 0;
          }

          .site-footer-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            padding-bottom: 4px;
          }

          .site-footer-nav-link {
            color: #ffffff;
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

          @media (max-width: 900px) {
            .site-footer-shell {
              padding: 0 16px 14px 16px;
            }

            .footer-top {
              flex-direction: column !important;
              align-items: flex-start !important;
            }

            .footer-right {
              width: 100%;
              justify-content: flex-start !important;
            }

            .footer-contact {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 14px !important;
            }

            .footer-nav {
              justify-content: flex-start !important;
              gap: 14px 24px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

const socialLinkStyle: CSSProperties = {
  width: "30px",
  height: "30px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const socialImgStyle: CSSProperties = {
  width: "30px",
  height: "30px",
  objectFit: "contain",
  display: "block",
};