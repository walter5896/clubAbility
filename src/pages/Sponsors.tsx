import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "../assets/clubability/sponsors/littlegirl.svg";
import sponsor1 from "../assets/clubability/sponsors/sponsor1.svg";
import sponsor2 from "../assets/clubability/sponsors/sponsor2.svg";
import sponsor3 from "../assets/clubability/sponsors/sponsor3.svg";
import sponsor4 from "../assets/clubability/sponsors/sponsor4.svg";
import sponsor5 from "../assets/clubability/sponsors/sponsor5.svg";
import sponsor6 from "../assets/clubability/sponsors/sponsor6.svg";
import sponsor7 from "../assets/clubability/sponsors/sponsor7.svg";
import sponsor8 from "../assets/clubability/sponsors/sponsor8.svg";

type SponsorLogo = {
  image: string;
  alt: string;
};

export default function Sponsors() {
  const navigate = useNavigate();

  const topRow: SponsorLogo[] = [
    { image: sponsor1, alt: "Lucid" },
    { image: sponsor2, alt: "Rancho Markets" },
    { image: sponsor3, alt: "Larry H. & Gail Miller Family Foundation" },
    { image: sponsor4, alt: "PROG Dev Center" },
  ];

  const bottomRow: SponsorLogo[] = [
    { image: sponsor5, alt: "Weber State University Community Education Center" },
    { image: sponsor6, alt: "Comcast" },
    { image: sponsor7, alt: "Intermountain Health" },
    { image: sponsor8, alt: "Salt Lake City School District" },
  ];

  return (
    <div className="sponsors-page">
      <style>
        {`
          .sponsors-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .sponsors-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .sponsors-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .sponsors-banner {
            background: #0c3a4a;
            padding: 28px 0 30px;
          }

          .sponsors-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
          }

          .sponsors-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            white-space: nowrap;
          }

          .sponsors-breadcrumb {
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

          .sponsors-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
            min-width: 180px;
          }

          .sponsors-content {
            padding: 26px 0 58px;
          }

          .intro-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 28px;
            display: grid;
            grid-template-columns: 1fr 1.02fr;
            gap: 22px;
            align-items: center;
            margin-bottom: 56px;
          }

          .intro-image-wrap {
            width: 100%;
            height: 350px;
            border-radius: 8px;
            overflow: hidden;
            background: #ddd;
          }

          .intro-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .intro-copy h2 {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .intro-copy p {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .logos-section {
            margin: 0 auto 54px;
          }

          .logo-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px 18px;
            margin: 0 auto;
          }

          .logo-row.top-row {
            max-width: 930px;
            margin-bottom: 16px;
          }

          .logo-row.bottom-row {
            max-width: 1020px;
          }

          .logo-card {
            background: transparent;
            border-radius: 8px;
            overflow: hidden;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .logo-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.10);
            filter: brightness(0.99);
          }

          .logo-image {
            width: 100%;
            height: 100px;
            object-fit: cover;
            display: block;
            border-radius: 8px;
          }

          .cta-box {
            background: #b9d3df;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.10);
            padding: 28px 28px 30px;
          }

          .cta-box h2 {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #111111;
            text-align: left;
          }

          .cta-box p {
            margin: 0 0 24px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #111111;
            text-align: left;
            max-width: 980px;
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

          @media (max-width: 1100px) {
            .intro-card {
              grid-template-columns: 1fr;
            }

            .intro-image-wrap {
              height: 300px;
            }

            .logo-row.top-row,
            .logo-row.bottom-row {
              grid-template-columns: repeat(2, 1fr);
              max-width: 640px;
            }

            .logo-row.top-row {
              margin-bottom: 18px;
            }
          }

          @media (max-width: 900px) {
            .sponsors-shell {
              padding: 0 16px;
            }

            .sponsors-banner-title {
              font-size: 42px;
              line-height: 1.05;
              white-space: normal;
            }

            .intro-copy h2,
            .cta-box h2 {
              font-size: 28px;
              line-height: 1.1;
            }

            .logo-row.top-row,
            .logo-row.bottom-row {
              grid-template-columns: 1fr;
              max-width: 360px;
            }

            .logo-image {
              height: 92px;
            }

            .cta-box {
              padding: 22px 20px 24px;
            }

            .sponsor-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="sponsors-banner">
        <div className="sponsors-shell">
          <div className="sponsors-inner">
            <div className="sponsors-banner-row">
              <h1 className="sponsors-banner-title">Our Sponsors</h1>

              <button
                className="sponsors-breadcrumb"
                onClick={() => navigate("/get-involved")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>Get Involved</span>
              </button>

              <div className="sponsors-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-content">
        <div className="sponsors-shell">
          <div className="sponsors-inner">
            <div className="intro-card">
              <div className="intro-image-wrap">
                <img className="intro-image" src={heroImg} alt="Club Ability sponsor programs" />
              </div>

              <div className="intro-copy">
                <h2>To Our Sponsors</h2>
                <p>
                  We are deeply grateful to our sponsors for investing in the mission of Club
                  Ability. Your generous support makes it possible for us to provide high-quality,
                  affordable STEM and technology education to students who need it most. Because of
                  your commitment, children across Utah are gaining the skills and confidence to
                  pursue futures they once only dreamed of. Thank you for believing in our students
                  — your partnership and generosity make all the difference.
                </p>
              </div>
            </div>

            <div className="logos-section">
              <div className="logo-row top-row">
                {topRow.map((logo) => (
                  <div key={logo.alt} className="logo-card">
                    <img className="logo-image" src={logo.image} alt={logo.alt} />
                  </div>
                ))}
              </div>

              <div className="logo-row bottom-row">
                {bottomRow.map((logo) => (
                  <div key={logo.alt} className="logo-card">
                    <img className="logo-image" src={logo.image} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-box">
              <h2>Interested in becoming a sponsor?</h2>
              <p>
                Becoming a Club Ability sponsor helps support affordable, high-quality STEM
                education for underserved students across Utah. Your partnership expands our
                programs while giving your organization visibility among families, educators, and
                community leaders. Join us in helping every child gain the opportunity to learn and
                succeed in a technology-driven world.
              </p>

              <button
                className="sponsor-btn"
                type="button"
                onClick={() => navigate("/get-involved")}
              >
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}