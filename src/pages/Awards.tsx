import { useNavigate } from "react-router-dom";

import img1 from "../assets/clubability/awards/img1.svg";
import img2 from "../assets/clubability/awards/img2.svg";
import img3 from "../assets/clubability/awards/img3.svg";
import img4 from "../assets/clubability/awards/img4.svg";
import img5 from "../assets/clubability/awards/img5.svg";
import img6 from "../assets/clubability/awards/img6.svg";

type AwardCard = {
  title: string;
  image: string;
};

export default function Awards() {
  const navigate = useNavigate();

  const awards: AwardCard[] = [
    { title: "Governor’s Medal for Science and Technology", image: img1 },
    { title: "Action Awards", image: img2 },
    { title: "HCT Applauds", image: img3 },
    { title: "Women’s Tech Awards", image: img4 },
    { title: "We Are Utah Award", image: img5 },
    { title: "Utah Living Color Awards", image: img6 },
  ];

  return (
    <div className="awards-page">
      <style>
        {`
          .awards-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .awards-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .awards-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .awards-banner {
            background: #0c3a4a;
            padding: 28px 0 30px;
          }

          .awards-banner-row {
            display: flex;
            align-items: center;
            gap: 18px;
          }

          .awards-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            white-space: nowrap;
          }

          .awards-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 10px;
          }

          .awards-content {
            padding: 42px 0 72px;
          }

          .awards-intro {
            margin-bottom: 34px;
          }

          .awards-intro h2 {
            margin: 0 0 8px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .awards-intro p {
            margin: 0 0 18px 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
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

          .awards-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px 26px;
          }

          .award-card {
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.14);
            background: #0c3a4a;
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              filter 0.2s ease;
          }

          .award-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 22px rgba(0,0,0,0.16);
          }

          .award-media {
            width: 100%;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            display: block;
          }

          .award-image-wrap {
            width: 100%;
            height: 370px;
            overflow: hidden;
            background: #0c3a4a;
            display: block;
            position: relative;
          }

          .award-image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .award-bottom {
            width: 100%;
            background: #0c3a4a;
            min-height: 126px;
            padding: 18px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 14px;
            margin-top: -2px;
            position: relative;
            z-index: 2;
          }

          .award-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.12;
            font-weight: 600;
            text-align: left;
            max-width: 320px;
          }

          .award-link-row {
            display: flex;
            justify-content: flex-end;
          }

          .award-link {
            border: none;
            background: transparent;
            color: white;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            cursor: pointer;
            padding: 0;
            transition: transform 0.18s ease, opacity 0.18s ease;
          }

          .award-link:hover {
            transform: translateY(-2px);
            filter: brightness(0.98);
          }

          @media (max-width: 900px) {
            .awards-shell {
              padding: 0 16px;
            }

            .awards-banner h1 {
              font-size: 42px;
              line-height: 1.05;
              white-space: normal;
            }

            .awards-intro h2 {
              font-size: 28px;
              line-height: 1.1;
            }

            .awards-intro p {
              font-size: 18px;
            }

            .awards-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .award-image-wrap {
              height: 280px;
            }

            .award-title {
              font-size: 22px;
              max-width: none;
            }

            .sponsor-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="awards-banner">
        <div className="awards-shell">
          <div className="awards-inner">
            <div className="awards-banner-row">
              <h1>Awards and Recognition</h1>
              <div className="awards-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="awards-content">
        <div className="awards-shell">
          <div className="awards-inner">
            <div className="awards-intro">
              <h2>Work with us!</h2>
              <p>Become a sponsor of Club Ability</p>
              <button
                className="sponsor-btn"
                type="button"
                onClick={() => navigate("/sponsors")}
              >
                Become a Sponsor
              </button>
            </div>

            <div className="awards-grid">
              {awards.map((award) => (
                <div key={award.title} className="award-card">
                  <div className="award-media">
                    <div className="award-image-wrap">
                      <img className="award-image" src={award.image} alt={award.title} />
                    </div>

                    <div className="award-bottom">
                      <h3 className="award-title">{award.title}</h3>

                      <div className="award-link-row">
                        <button
                          className="award-link"
                          type="button"
                          onClick={() => navigate("/sponsors")}
                        >
                          LEARN MORE →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}