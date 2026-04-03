import { ChevronLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import summaryImg from "../assets/clubability/registration/Rectangle 9.svg";
import appleIcon from "../assets/clubability/shared/apple.svg";
import googleIcon from "../assets/clubability/shared/google.svg";

export default function Registration() {
  const navigate = useNavigate();

  const [registeringForSomeoneElse, setRegisteringForSomeoneElse] = useState(false);
  const [country, setCountry] = useState("United States");

  return (
    <div className="registration-page">
      <style>
        {`
          .registration-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .registration-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .registration-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .registration-banner {
            background: #0c3a4a;
            padding: 20px 0 22px;
          }

          .registration-banner-row {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
          }

          .registration-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            white-space: nowrap;
          }

          .registration-breadcrumb {
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

          .registration-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
            min-width: 140px;
          }

          .registration-content {
            padding: 24px 0 56px;
          }

          .registration-grid {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 40px;
            align-items: start;
          }

          .left-stack,
          .right-stack {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .panel {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 22px 22px 18px;
          }

          .panel-title {
            margin: 0 0 20px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .field-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .field {
            margin-bottom: 16px;
          }

          .field:last-child {
            margin-bottom: 0;
          }

          .label {
            display: block;
            margin: 0 0 8px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .input,
          .select {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1.5px solid #c7dbe3;
            background: #ffffff;
            padding: 0 12px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            color: #5b7280;
            box-sizing: border-box;
            outline: none;
          }

          .input:focus,
          .select:focus {
            border-color: #7ea7b6;
          }

          .select-wrap {
            position: relative;
          }

          .select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding-right: 38px;
            cursor: pointer;
          }

          .select-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #5b7280;
            pointer-events: none;
          }

          .panel-divider {
            height: 2px;
            background: rgba(6, 36, 48, 0.55);
            margin-top: 8px;
          }

          .checkbox-row {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-top: 16px;
          }

          .checkbox {
            width: 20px;
            height: 20px;
            border-radius: 7px;
            border: 1.5px solid #c7dbe3;
            background: #b9d3df;
            cursor: pointer;
            flex-shrink: 0;
            position: relative;
            transition:
              background 0.18s ease,
              border-color 0.18s ease,
              transform 0.18s ease;
          }

          .checkbox:hover {
            transform: translateY(-1px);
          }

          .checkbox.checked {
            background: #cb356e;
            border-color: #cb356e;
          }

          .checkbox.checked::after {
            content: "";
            position: absolute;
            left: 5px;
            top: 1px;
            width: 6px;
            height: 11px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          .checkbox-label {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .summary-image-wrap {
            width: 100%;
            height: 130px;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 18px;
          }

          .summary-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .summary-rows {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 12px;
          }

          .summary-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #1b2e38;
          }

          .summary-row .value {
            text-align: right;
          }

          .summary-divider {
            height: 1.5px;
            background: rgba(6, 36, 48, 0.55);
            margin: 10px 0 14px;
          }

          .summary-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 18px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #1b2e38;
          }

          .btn {
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.14);
            filter: brightness(0.98);
          }

          .register-btn {
            width: 100%;
            height: 42px;
            background: #cb356e;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 14px;
          }

          .pay-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .pay-btn {
            height: 40px;
            background: white;
            color: #4d7d8c;
            border: 2px solid #c7dbe3;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .pay-icon {
            width: 18px;
            height: 18px;
            display: block;
            object-fit: contain;
            flex-shrink: 0;
          }

          .help-card {
            background: #f3dfe8;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.10);
            padding: 20px 18px;
          }

          .help-card p {
            margin: 0 0 18px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .help-phone {
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.1;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          @media (max-width: 1100px) {
            .registration-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .registration-shell {
              padding: 0 16px;
            }

            .field-grid-2,
            .pay-row {
              grid-template-columns: 1fr;
            }

            .registration-banner-title,
            .panel-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .register-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="registration-banner">
        <div className="registration-shell">
          <div className="registration-inner">
            <div className="registration-banner-row">
              <h2 className="registration-banner-title">Registration</h2>

              <button
                className="registration-breadcrumb"
                onClick={() => navigate("/program-detail")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>Computing</span>
              </button>

              <button
                className="registration-breadcrumb"
                onClick={() => navigate("/programs")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>Programs</span>
              </button>

              <div className="registration-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="registration-content">
        <div className="registration-shell">
          <div className="registration-inner">
            <div className="registration-grid">
              <div className="left-stack">
                <div className="panel">
                  <h2 className="panel-title">Your info</h2>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">First name</label>
                      <input className="input" defaultValue="Jane" />
                    </div>

                    <div className="field">
                      <label className="label">Last name</label>
                      <input className="input" defaultValue="Smith" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email address</label>
                    <input className="input" defaultValue="example@email.com" />
                  </div>

                  <div className="field">
                    <label className="label">Phone number</label>
                    <input className="input" defaultValue="(801) 555-1234" />
                  </div>

                  <div className="panel-divider" />

                  <div className="checkbox-row">
                    <button
                      type="button"
                      className={`checkbox ${registeringForSomeoneElse ? "checked" : ""}`}
                      onClick={() => setRegisteringForSomeoneElse((prev) => !prev)}
                      aria-label="I am registering someone else"
                      aria-pressed={registeringForSomeoneElse}
                    />
                    <div className="checkbox-label">I am registering someone else</div>
                  </div>
                </div>

                <div className="panel">
                  <h2 className="panel-title">Payment</h2>

                  <div className="field">
                    <label className="label">Card number</label>
                    <input className="input" defaultValue="0000 0000 0000 0000" />
                  </div>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">Expiration date</label>
                      <input className="input" defaultValue="MM / YY" />
                    </div>

                    <div className="field">
                      <label className="label">Security code</label>
                      <input className="input" defaultValue="000" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Name on card</label>
                    <input className="input" defaultValue="Jane Smith" />
                  </div>
                </div>

                <div className="panel">
                  <h2 className="panel-title">Billing address</h2>

                  <div className="field">
                    <label className="label">Country/region</label>
                    <div className="select-wrap">
                      <select
                        className="select"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option>United States</option>
                      </select>
                      <ChevronDown size={18} className="select-icon" />
                    </div>
                  </div>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">First name</label>
                      <input className="input" defaultValue="Jane" />
                    </div>

                    <div className="field">
                      <label className="label">Last name</label>
                      <input className="input" defaultValue="Smith" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Address</label>
                    <input className="input" defaultValue="123 Main Street" />
                  </div>

                  <div className="field">
                    <label className="label">Apartment, suite, etc.</label>
                    <input className="input" defaultValue="(optional)" />
                  </div>

                  <div className="field">
                    <label className="label">ZIP code</label>
                    <input className="input" defaultValue="00000" />
                  </div>
                </div>
              </div>

              <div className="right-stack">
                <div className="panel">
                  <h2 className="panel-title">Registration summary</h2>

                  <div className="summary-image-wrap">
                    <img className="summary-image" src={summaryImg} alt="Computing class" />
                  </div>

                  <div className="summary-rows">
                    <div className="summary-row">
                      <span>Program</span>
                      <span className="value">Computing</span>
                    </div>

                    <div className="summary-row">
                      <span>Date</span>
                      <span className="value">Mar 7, 2026</span>
                    </div>

                    <div className="summary-row">
                      <span>Classes</span>
                      <span className="value">1 Class</span>
                    </div>
                  </div>

                  <div className="summary-divider" />

                  <div className="summary-total">
                    <span>Total</span>
                    <span>$90</span>
                  </div>

                  <button
                    className="btn register-btn"
                    type="button"
                    onClick={() => navigate("/thank-you")}
                  >
                    Register
                  </button>

                  <div className="pay-row">
                    <button className="btn pay-btn" type="button">
                      <img className="pay-icon" src={appleIcon} alt="Apple Pay" />
                      <span>Apple Pay</span>
                    </button>

                    <button className="btn pay-btn" type="button">
                      <img className="pay-icon" src={googleIcon} alt="Google Pay" />
                      <span>Google Pay</span>
                    </button>
                  </div>
                </div>

                <div className="help-card">
                  <p>Need any help with registration? We’re happy to assist.</p>
                  <div className="help-phone">+1 (385) 217-1291</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}