import { useNavigate } from "react-router-dom";
import { CalendarDays, UserRound, Star, Check } from "lucide-react";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="thank-you-page">
      <style>
        {`
          .thank-you-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .ty-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .ty-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .ty-hero {
            background: #0c4a5a;
            padding: 36px 0 26px;
            border-bottom: 4px solid #e8206a;
          }

          .ty-hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .ty-check-wrap {
            width: 86px;
            height: 86px;
            border-radius: 999px;
            background: #f5e1ea;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }

          .ty-title {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            color: white;
            text-align: center;
          }

          .ty-subcopy {
            margin: 0;
            max-width: 760px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 400;
            color: white;
            text-align: center;
          }

          .ty-content {
            padding: 26px 0 60px;
          }

          .ty-details-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 22px 26px 18px;
            margin-bottom: 28px;
          }

          .ty-details-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-detail-row {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 18px;
            align-items: center;
            padding: 14px 0;
            border-bottom: 1.5px solid rgba(6, 36, 48, 0.55);
          }

          .ty-detail-row:last-child {
            border-bottom: none;
          }

          .ty-detail-label {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
          }

          .ty-detail-value {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #062430;
            text-align: right;
          }

          .ty-next-title {
            margin: 0 0 22px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-next-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 26px;
          }

          .ty-next-card {
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

          .ty-next-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 18px rgba(0,0,0,0.14);
          }

          .ty-icon-badge {
            width: 34px;
            height: 34px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .ty-icon-badge.blue {
            background: #d7edf4;
            color: #0c4a5a;
          }

          .ty-icon-badge.pink {
            background: #f3dfe8;
            color: #cb356e;
          }

          .ty-card-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .ty-card-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #5c8594;
            text-align: left;
            max-width: 250px;
          }

          .ty-card-link {
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

          .ty-card-link.pink-link {
            color: #cb356e;
          }

          .ty-bottom {
            display: flex;
            justify-content: center;
          }

          .ty-home-btn {
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

          .ty-home-btn:hover,
          .ty-card-link:hover {
            transform: translateY(-2px);
            filter: brightness(0.98);
          }

          @media (max-width: 1100px) {
            .ty-next-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .ty-shell {
              padding: 0 16px;
            }

            .ty-title {
              font-size: 42px;
              line-height: 1.05;
            }

            .ty-subcopy {
              font-size: 18px;
            }

            .ty-details-title,
            .ty-next-title,
            .ty-card-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .ty-detail-row {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .ty-detail-value {
              text-align: left;
              font-size: 16px;
            }

            .ty-home-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="ty-hero">
        <div className="ty-shell">
          <div className="ty-inner">
            <div className="ty-hero-content">
              <div className="ty-check-wrap">
                <Check size={42} color="#cb356e" strokeWidth={3} />
              </div>

              <h1 className="ty-title">You’re registered!</h1>

              <p className="ty-subcopy">
                Thank you for signing up for Computing. A confirmation email has
                been sent to example@email.com with everything you need to know
                before your class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ty-content">
        <div className="ty-shell">
          <div className="ty-inner">
            <div className="ty-details-card">
              <h2 className="ty-details-title">Registration details</h2>

              <div className="ty-detail-row">
                <div className="ty-detail-label">Program</div>
                <div className="ty-detail-value">Computing</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">Student</div>
                <div className="ty-detail-value">Jane Smith</div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">Time</div>
                <div className="ty-detail-value">
                  Saturday, Mar 14, 2026 – 10:30 am - 12:00 pm
                </div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">Location</div>
                <div className="ty-detail-value">
                  845 S Main St, Suite B8, Bountiful
                </div>
              </div>

              <div className="ty-detail-row">
                <div className="ty-detail-label">Confirmation #</div>
                <div className="ty-detail-value">00-0000000-000</div>
              </div>
            </div>

            <h3 className="ty-next-title">What’s next</h3>

            <div className="ty-next-grid">
              <div className="ty-next-card">
                <div className="ty-icon-badge blue">
                  <CalendarDays size={18} />
                </div>

                <h4 className="ty-card-title">Add to your calendar</h4>

                <p className="ty-card-copy">
                  Save your session dates so you don’t miss a class.
                </p>

                <button className="ty-card-link" type="button">
                  Download .ics file <span>→</span>
                </button>
              </div>

              <div className="ty-next-card">
                <div className="ty-icon-badge pink">
                  <UserRound size={18} />
                </div>

                <h4 className="ty-card-title">
                  Questions before your first class?
                </h4>

                <p className="ty-card-copy">
                  We are happy to answer anything from concerns, accessibility,
                  what to bring, and more.
                </p>

                <button
                  className="ty-card-link pink-link"
                  type="button"
                  onClick={() => navigate("/get-started")}
                >
                  Contact us <span>→</span>
                </button>
              </div>

              <div className="ty-next-card">
                <div className="ty-icon-badge blue">
                  <Star size={18} />
                </div>

                <h4 className="ty-card-title">Explore more programs</h4>

                <p className="ty-card-copy">
                  See what else is happening at Club Ability this spring.
                </p>

                <button
                  className="ty-card-link"
                  type="button"
                  onClick={() => navigate("/programs")}
                >
                  View all classes <span>→</span>
                </button>
              </div>
            </div>

            <div className="ty-bottom">
              <button
                className="ty-home-btn"
                type="button"
                onClick={() => navigate("/")}
              >
                Go Back To Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}