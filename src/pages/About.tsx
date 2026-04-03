import { useState } from "react";
import kidsImg from "../assets/clubability/about/kids.svg";
import founderImg from "../assets/clubability/about/founder.svg";

export default function About() {
  const [amount, setAmount] = useState("$");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");

  const presetAmounts = ["$100", "$200", "$300"];

  return (
    <div className="about-page">
      <style>
        {`
          .about-page {
            background: #f2f8fa;
          }

          .about-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .about-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .page-banner {
            background: #0c3a4a;
            padding: 34px 0 36px;
          }

          .page-banner-row {
            display: flex;
            align-items: center;
            gap: 18px;
          }

          .page-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            white-space: nowrap;
          }

          .page-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 10px;
          }

          .mission-section {
            padding: 44px 0 48px;
            background: #f2f8fa;
          }

          .mission-block {
            max-width: 980px;
            margin: 0 auto;
          }

          .section-heading {
            margin: 0 0 10px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .mission-text {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .story-donate-band {
            background: #cfe4ed;
            padding: 56px 0 62px;
          }

          .story-donate-stage {
            position: relative;
            min-height: 560px;
          }

          .story-card,
          .donation-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.14);
            box-sizing: border-box;
          }

          .story-card {
            width: 56%;
            min-height: 530px;
            padding: 52px 56px 48px;
          }

          .donation-card {
            width: 45%;
            min-height: 570px;
            padding: 52px 54px 48px;
            position: absolute;
            right: 0;
            top: -22px;
            z-index: 2;
          }

          .story-title,
          .donation-title,
          .founder-title-main {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .story-copy,
          .donation-copy,
          .founder-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #111111;
            text-align: left;
          }

          .story-copy + .story-copy,
          .donation-copy + .donation-copy,
          .founder-copy + .founder-copy {
            margin-top: 20px;
          }

          .kids-image-wrap {
            margin-top: 30px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          }

          .kids-image,
          .founder-image {
            width: 100%;
            display: block;
            object-fit: cover;
          }

          .kids-image {
            height: 280px;
          }

          .donation-box {
            margin-top: 26px;
            border: 2px solid #bdd6df;
            border-radius: 16px;
            padding: 28px 28px 30px;
            background: #f2f8fa;
          }

          .donation-presets {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 12px;
          }

          .amount-chip,
          .frequency-btn,
          .donate-btn {
            border: none;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease,
              opacity 0.18s ease;
          }

          .amount-chip {
            height: 52px;
            border-radius: 8px;
            background: #ffffff;
            color: #4a7a8a;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            border: 2px solid #bdd6df;
          }

          .amount-chip:hover,
          .frequency-btn:hover,
          .donate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.12);
            filter: brightness(0.99);
          }

          .amount-input {
            width: 100%;
            height: 54px;
            border-radius: 8px;
            border: 2px solid #bdd6df;
            background: #ffffff;
            padding: 0 16px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1;
            font-weight: 400;
            color: #4a7a8a;
            box-sizing: border-box;
            outline: none;
            margin-bottom: 16px;
          }

          .amount-input:focus {
            border-color: #4a7a8a;
          }

          .frequency-row {
            display: flex;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 18px;
          }

          .frequency-btn {
            flex: 1;
            height: 52px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            background: #dfeff5;
            color: #062430;
          }

          .frequency-btn.active {
            background: #0c495d;
            color: white;
          }

          .donate-btn {
            display: block;
            margin: 0 auto;
            background: #c23368;
            color: white;
            border-radius: 8px;
            padding: 12px 26px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            box-shadow: 0 4px 10px rgba(0,0,0,0.18);
          }

          .founder-section {
            background: #f2f8fa;
            padding: 72px 0 88px;
          }

          .founder-layout {
            max-width: 980px;
            margin: 0 auto;
          }

          .founder-grid {
            display: grid;
            grid-template-columns: 260px 1fr;
            gap: 18px;
            align-items: start;
          }

          .founder-image-wrap {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          }

          .founder-image {
            height: 240px;
          }

          @media (max-width: 1100px) {
            .story-donate-stage {
              min-height: unset;
            }

            .story-card,
            .donation-card {
              position: static;
              width: 100%;
              min-height: unset;
            }

            .donation-card {
              margin-top: 24px;
            }
          }

          @media (max-width: 900px) {
            .about-shell {
              padding: 0 16px;
            }

            .page-banner h1 {
              font-size: 42px;
              line-height: 1.05;
              white-space: normal;
            }

            .section-heading,
            .story-title,
            .donation-title,
            .founder-title-main {
              font-size: 28px;
              line-height: 1.1;
            }

            .mission-text {
              font-size: 18px;
            }

            .story-copy,
            .donation-copy,
            .founder-copy {
              font-size: 16px;
            }

            .story-card,
            .donation-card {
              padding: 30px 24px;
            }

            .kids-image {
              height: 220px;
            }

            .founder-grid {
              grid-template-columns: 1fr;
            }

            .founder-image {
              height: auto;
            }
          }
        `}
      </style>

      <section className="page-banner">
        <div className="about-shell">
          <div className="page-banner-row">
            <h1>About Us</h1>
            <div className="page-banner-line" />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="about-shell">
          <div className="mission-block">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mission-text">
              Under the "Tech for All" mission, Club Ability has become a transformative force,
              preparing participants for the STEM careers of tomorrow. Initiatives like the
              "Triunfa en Tecnología" conference, the "El Poder de la Tecnología" podcast.
            </p>
          </div>
        </div>
      </section>

      <section className="story-donate-band">
        <div className="about-shell">
          <div className="about-inner story-donate-stage">
            <div className="story-card">
              <h2 className="story-title">Want to be a part of our story?</h2>
              <p className="story-copy">
                With your support, Club Ability can continue providing scholarships, tech equipment,
                and essential educational resources. Your contribution helps open doors for more youth
                to explore careers in technology, close digital divides, and build a brighter future
                for themselves and their communities.
              </p>

              <div className="kids-image-wrap">
                <img className="kids-image" src={kidsImg} alt="Club Ability kids" />
              </div>
            </div>

            <div className="donation-card">
              <h2 className="donation-title">Make a Donation</h2>
              <p className="donation-copy">
                At Club Ability, your donation goes directly toward making high-quality STEM education
                accessible to every student.
              </p>
              <p className="donation-copy">
                Your gift helps cover instructors, materials, and program resources!
              </p>

              <div className="donation-box">
                <div className="donation-presets">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      className="amount-chip"
                      onClick={() => setAmount(preset)}
                      type="button"
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <input
                  className="amount-input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Donation amount"
                />

                <div className="frequency-row">
                  <button
                    type="button"
                    className={`frequency-btn ${frequency === "one-time" ? "active" : ""}`}
                    onClick={() => setFrequency("one-time")}
                  >
                    ONE TIME
                  </button>
                  <button
                    type="button"
                    className={`frequency-btn ${frequency === "monthly" ? "active" : ""}`}
                    onClick={() => setFrequency("monthly")}
                  >
                    MONTHLY
                  </button>
                </div>

                <button type="button" className="donate-btn">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="about-shell">
          <div className="founder-layout">
            <h2 className="founder-title-main">Our Founder</h2>

            <div className="founder-grid">
              <div className="founder-image-wrap">
                <img className="founder-image" src={founderImg} alt="Club Ability founder" />
              </div>

              <div>
                <p className="founder-copy">
                  Juliette Bautista, a visionary leader and passionate advocate for STEM education,
                  founded Club Ability to address the lack of accessible tech programs for underserved
                  families and individuals with special needs in Utah.
                </p>

                <p className="founder-copy">
                  This innovative platform enables families to collaboratively explore technology
                  ranging from video games and animation to 3D modeling and audiovisual design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}