import { useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, ChevronRight, Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import robot1 from "../assets/clubability/volunteer/robot1.svg";
import robot2 from "../assets/clubability/volunteer/robot2.svg";
import robot3 from "../assets/clubability/volunteer/robot3.svg";

export default function Volunteer() {
  const navigate = useNavigate();

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [showAvailabilityOptions, setShowAvailabilityOptions] = useState(false);

  const toggleItem = (
    item: string,
    selected: string[],
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setter(selected.filter((value) => value !== item));
    } else {
      setter([...selected, item]);
    }
  };

  const interests = ["Mentoring", "Teaching", "Technical Support", "Event"];
  const availabilityOptions = ["Weekdays", "Evenings", "Weekends", "Flexible"];

  return (
    <div className="volunteer-page">
      <style>
        {`
          .volunteer-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .vol-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .vol-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .vol-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .vol-banner-row {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .vol-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            white-space: nowrap;
          }

          .vol-breadcrumb {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: white;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            opacity: 0.96;
          }

          .vol-content {
            padding: 12px 0 68px;
          }

          .vol-intro {
            max-width: 920px;
            margin: 0 0 64px 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .vol-section-title {
            margin: 0 0 64px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-benefits-wrap {
            max-width: 1040px;
            margin: 0 auto 64px;
            background: #f3dfe8;
            padding: 18px;
            box-sizing: border-box;
            border-radius: 8px;
          }

          .vol-benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }

          .vol-benefit-card {
            height: 250px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 3px 8px rgba(0,0,0,0.14);
            padding: 18px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          .vol-benefit-card.dark {
            background: #00384b;
            color: white;
          }

          .vol-benefit-card.teal {
            background: #78a5b6;
            color: white;
          }

          .vol-benefit-top {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 22px;
          }

          .vol-benefit-icon {
            width: 30px;
            height: 30px;
            object-fit: contain;
            display: block;
            flex-shrink: 0;
          }

          .vol-benefit-title {
            margin: 0;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1.1;
            font-weight: 600;
            text-align: left;
            color: white;
          }

          .vol-benefit-copy {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            text-align: left;
            color: rgba(255,255,255,0.95);
            max-width: 220px;
          }

          .vol-form-title {
            margin: 0 0 24px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-stack {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .vol-panel {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 18px 14px 16px;
          }

          .vol-panel-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .vol-label {
            display: block;
            margin: 0 0 8px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .vol-field {
            margin-bottom: 14px;
          }

          .vol-field:last-child {
            margin-bottom: 0;
          }

          .vol-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .vol-input,
          .vol-textarea,
          .vol-select-trigger {
            width: 100%;
            border-radius: 8px;
            border: 1.5px solid #c7dbe3;
            background: #ffffff;
            box-sizing: border-box;
            outline: none;
            font-family: Roboto, sans-serif;
            color: #6b7f89;
          }

          .vol-input {
            height: 42px;
            padding: 0 12px;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
          }

          .vol-input:focus,
          .vol-textarea:focus {
            border-color: #8bb2c1;
          }

          .vol-check-grid {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }

          .vol-checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: #111111;
            cursor: pointer;
          }

          .vol-checkbox input {
            width: 14px;
            height: 14px;
            margin: 0;
            accent-color: #cb356e;
          }

          .vol-inline-other {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 2px;
            flex-wrap: wrap;
          }

          .vol-inline-other .vol-input {
            width: 170px;
            height: 34px;
          }

          .vol-select-area {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }

          .vol-free-input {
            flex: 1;
            min-width: 280px;
          }

          .vol-select-wrap {
            position: relative;
            width: 190px;
          }

          .vol-select-trigger {
            height: 28px;
            padding: 0 28px 0 10px;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            text-align: left;
            cursor: pointer;
          }

          .vol-select-icon {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #1d3340;
          }

          .vol-option-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
          }

          .vol-textarea {
            min-height: 160px;
            padding: 12px;
            resize: vertical;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
          }

          .vol-submit-wrap {
            display: flex;
            justify-content: center;
            padding-top: 12px;
          }

          .vol-submit-btn {
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            min-width: 122px;
            height: 48px;
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

          .vol-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .vol-help {
            padding-top: 64px;
          }

          .vol-help-title {
            margin: 0 0 20px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .vol-help-body {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            text-align: left;
          }

          .vol-help-copy {
            margin: 0 0 18px 0;
            max-width: 520px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .vol-help-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .vol-help-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .vol-help-item svg {
            flex-shrink: 0;
            color: #1b2e38;
          }

          @media (max-width: 900px) {
            .vol-shell {
              padding: 0 16px;
            }

            .vol-banner-title {
              font-size: 42px;
              line-height: 1.05;
            }

            .vol-content {
              padding: 12px 0 58px;
            }

            .vol-intro {
              font-size: 22px;
              line-height: 1.2;
              margin-bottom: 48px;
            }

            .vol-section-title,
            .vol-form-title,
            .vol-panel-title,
            .vol-help-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .vol-benefits-wrap {
              margin-bottom: 48px;
              padding: 14px;
            }

            .vol-benefits-grid {
              grid-template-columns: 1fr;
            }

            .vol-benefit-card {
              height: auto;
              min-height: 220px;
            }

            .vol-grid-2 {
              grid-template-columns: 1fr;
            }

            .vol-select-area {
              flex-direction: column;
              align-items: stretch;
            }

            .vol-free-input {
              min-width: 0;
            }

            .vol-select-wrap {
              width: 100%;
            }

            .vol-help {
              padding-top: 48px;
            }

            .vol-submit-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="vol-banner">
        <div className="vol-shell">
          <div className="vol-inner">
            <div className="vol-banner-row">
              <h1 className="vol-banner-title">Get Involved</h1>
              <div className="vol-breadcrumb">
                <ChevronRight size={18} />
                <span>Volunteer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vol-content">
        <div className="vol-shell">
          <div className="vol-inner">
            <div className="vol-intro">
              Make a difference by sharing your skills,
              <br />
              mentoring students, and supporting STEM education.
            </div>

            <h2 className="vol-section-title">Why Volunteer With Club Ability</h2>

            <div className="vol-benefits-wrap">
              <div className="vol-benefits-grid">
                <div className="vol-benefit-card dark">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot1} alt="" />
                    <h3 className="vol-benefit-title">Mentor Students</h3>
                  </div>
                  <p className="vol-benefit-copy">
                    Help guide students through hands-on technology projects.
                  </p>
                </div>

                <div className="vol-benefit-card dark">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot2} alt="" />
                    <h3 className="vol-benefit-title">Share Your Skills</h3>
                  </div>
                  <p className="vol-benefit-copy">
                    Teach coding, design, or professional knowledge.
                  </p>
                </div>

                <div className="vol-benefit-card teal">
                  <div className="vol-benefit-top">
                    <img className="vol-benefit-icon" src={robot3} alt="" />
                    <h3 className="vol-benefit-title">Make an Impact</h3>
                  </div>
                  <p className="vol-benefit-copy">
                    Support students and strengthen your community.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="vol-form-title">Volunteer Interest Form</h2>

            <div className="vol-stack">
              <div className="vol-panel">
                <h3 className="vol-panel-title">Your info</h3>

                <div className="vol-grid-2">
                  <div className="vol-field">
                    <label className="vol-label">First name</label>
                    <input className="vol-input" defaultValue="Jane" />
                  </div>

                  <div className="vol-field">
                    <label className="vol-label">Last name</label>
                    <input className="vol-input" defaultValue="Smith" />
                  </div>
                </div>

                <div className="vol-field">
                  <label className="vol-label">Email address</label>
                  <input className="vol-input" defaultValue="example@email.com" />
                </div>

                <div className="vol-field">
                  <label className="vol-label">Phone number</label>
                  <input className="vol-input" defaultValue="801 555-1234" />
                </div>
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">Area Of Interest</h3>

                <div className="vol-check-grid">
                  {interests.map((interest) => (
                    <label key={interest} className="vol-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() =>
                          toggleItem(interest, selectedInterests, setSelectedInterests)
                        }
                      />
                      <span>{interest}</span>
                    </label>
                  ))}

                  <div className="vol-inline-other">
                    <label className="vol-checkbox">
                      <input type="checkbox" />
                      <span>Other:</span>
                    </label>
                    <input className="vol-input" placeholder="Type Here" />
                  </div>
                </div>
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">Availability</h3>

                <div className="vol-select-area">
                  <input
                    className="vol-input vol-free-input"
                    placeholder="Type Here Or Manually Select Times"
                  />

                  <div className="vol-select-wrap">
                    <button
                      type="button"
                      className="vol-select-trigger"
                      onClick={() => setShowAvailabilityOptions((prev) => !prev)}
                    >
                      Select Availability
                    </button>
                    <ChevronDown size={14} className="vol-select-icon" />
                  </div>
                </div>

                {(showAvailabilityOptions || selectedAvailability.length > 0) && (
                  <div className="vol-option-list">
                    {availabilityOptions.map((option) => (
                      <label key={option} className="vol-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(option)}
                          onChange={() =>
                            toggleItem(
                              option,
                              selectedAvailability,
                              setSelectedAvailability
                            )
                          }
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="vol-panel">
                <h3 className="vol-panel-title">Additional Notes (Optional)</h3>
                <textarea
                  className="vol-textarea"
                  placeholder="Type Here to Form Message"
                />
              </div>

              <div className="vol-submit-wrap">
                <button
                  className="vol-submit-btn"
                  type="button"
                  onClick={() => navigate("/thank-you")}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="vol-help">
              <h3 className="vol-help-title">Need Help?</h3>

              <div className="vol-help-body">
                <p className="vol-help-copy">
                  Have questions about programs or enrollment?
                  <br />
                  Contact our team and we'll be happy to assist you.
                </p>

                <div className="vol-help-list">
                  <div className="vol-help-item">
                    <Phone size={14} />
                    <span>+1 (385) 217-1791</span>
                  </div>

                  <div className="vol-help-item">
                    <MapPin size={14} />
                    <span>845 S Main St B8, Bountiful, UT 84010</span>
                  </div>

                  <div className="vol-help-item">
                    <Mail size={14} />
                    <span>info@clubability.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}