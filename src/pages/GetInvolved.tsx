import { useNavigate } from "react-router-dom";
import sponsorsImg from "../assets/clubability/get-involved/laptop.svg";
import donateImg from "../assets/clubability/get-involved/laptop2.svg";
import volunteerImg from "../assets/clubability/get-involved/hands.svg";

export default function GetInvolved() {
  const navigate = useNavigate();

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
            padding: 28px 0 30px;
          }

          .gi-banner-title {
            margin: 0 0 8px 0;
            font-size: 58px;
            line-height: 1;
            font-weight: 700;
            color: white;
            text-align: left;
          }

          .gi-banner-row {
            display: flex;
            align-items: center;
            gap: 22px;
          }

          .gi-banner-subtitle {
            margin: 0;
            font-size: 28px;
            line-height: 0.98;
            font-weight: 700;
            color: white;
            text-align: left;
            max-width: 430px;
          }

          .gi-banner-line {
            height: 4px;
            background: #ff2f86;
            flex: 1;
            border-radius: 999px;
            margin-top: 8px;
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
            gap: 18px;
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
          }

          .gi-title {
            margin: 0 0 22px 0;
            font-size: 34px;
            line-height: 1.05;
            font-weight: 700;
            color: #062430;
            text-align: left;
          }

          .gi-text {
            margin: 0 0 24px 0;
            font-size: 18px;
            line-height: 1.2;
            color: #111111;
            text-align: left;
            max-width: 460px;
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

            .gi-banner-title {
              font-size: 42px;
            }

            .gi-banner-row {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }

            .gi-banner-subtitle {
              font-size: 22px;
              max-width: none;
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

            .gi-title {
              font-size: 28px;
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
            <h1 className="gi-banner-title">Get Involved</h1>
            <div className="gi-banner-row">
              <p className="gi-banner-subtitle">
                Innovation and knowledge open doors to the future.
              </p>
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
                <img className="gi-image" src={sponsorsImg} alt="Our Sponsors" />
              </div>

              <div className="gi-copy">
                <h2 className="gi-title">Our Sponsors</h2>
                <p className="gi-text">
                  At Club Ability, we believe every student deserves access to quality STEM
                  education. With support from partners like Lucid, Comcast, Intermountain
                  Health, Weber State University, and Salt Lake City School District, we provide
                  hands-on learning to underserved communities in Utah and ensure no student is
                  turned away.
                </p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/sponsors")}
                >
                  Our Sponsors
                </button>
              </div>
            </div>

            <div className="gi-card blue">
              <div className="gi-copy">
                <h2 className="gi-title">Donate</h2>
                <p className="gi-text">
                  At Club Ability, your donation helps make STEM education accessible to every
                  student, regardless of financial background. Your support funds instructors,
                  materials, and resources so no child is left behind. Donate today to help
                  empower the next generation of tech leaders.
                </p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/donate")}
                >
                  Donate
                </button>
              </div>

              <div className="gi-image-wrap">
                <img className="gi-image" src={donateImg} alt="Donate" />
              </div>
            </div>

            <div className="gi-card white">
              <div className="gi-image-wrap">
                <img className="gi-image" src={volunteerImg} alt="Volunteer" />
              </div>

              <div className="gi-copy">
                <h2 className="gi-title">Volunteer</h2>
                <p className="gi-text">
                  At Club Ability, volunteering helps children succeed in coding and STEM. No
                  technical experience is required—just a desire to help. Even a few hours a week
                  or month can inspire the next generation of innovators. Volunteer with us and
                  help shape the future of our community.
                </p>
                <button
                  className="gi-button"
                  type="button"
                  onClick={() => navigate("/volunteer")}
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}