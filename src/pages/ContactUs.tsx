import { ChevronLeft, ChevronDown, Phone, MapPin, Mail, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("General Question");

  return (
    <div className="contact-page">
      <style>
        {`
          .contact-page {
            background: #062430;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .contact-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .contact-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .contact-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .contact-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .contact-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            white-space: nowrap;
          }

          .contact-breadcrumb {
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

          .contact-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .contact-content {
            padding: 24px 0 64px;
            background: #f2f8fa;
          }

          .contact-intro {
            margin: 0 0 26px 0;
            max-width: 760px;
          }

          .contact-intro h1 {
            margin: 0 0 10px 0;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            color: #062430;
            text-align: left;
          }

          .contact-intro p {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.25;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 18px;
            align-items: start;
          }

          .contact-stack {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .contact-card,
          .contact-form-panel {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          }

          .contact-card {
            padding: 20px 18px;
          }

          .contact-card-title,
          .contact-form-title {
            margin: 0 0 16px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .contact-info-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .contact-info-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .contact-info-icon {
            color: #062430;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .contact-info-label {
            margin: 0 0 4px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 700;
            color: #1b2e38;
            text-align: left;
          }

          .contact-info-value {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .contact-info-link {
            color: #4a7a8a;
            text-decoration: none;
          }

          .contact-info-link:hover {
            text-decoration: underline;
          }

          .contact-note {
            background: #f3dfe8;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.10);
            padding: 18px;
          }

          .contact-note h3 {
            margin: 0 0 10px 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .contact-note p {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .contact-form-panel {
            padding: 20px 18px 18px;
          }

          .field-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .field {
            margin-bottom: 14px;
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
          .select,
          .textarea {
            width: 100%;
            border-radius: 8px;
            border: 1.5px solid #c7dbe3;
            background: #ffffff;
            box-sizing: border-box;
            outline: none;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            color: #5b7280;
          }

          .input,
          .select {
            height: 42px;
            padding: 0 12px;
          }

          .textarea {
            min-height: 180px;
            padding: 12px;
            resize: vertical;
            line-height: 1.35;
            font-weight: 400;
          }

          .input:focus,
          .select:focus,
          .textarea:focus {
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

          .contact-actions {
            display: flex;
            justify-content: flex-start;
            margin-top: 16px;
          }

          .contact-submit {
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            min-width: 164px;
            height: 44px;
            padding: 0 20px;
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

          .contact-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .contact-footer-help {
            margin-top: 26px;
            text-align: center;
            padding-bottom: 0;
          }

          .contact-footer-help h2 {
            margin: 0 0 14px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
          }

          .contact-footer-help p {
            margin: 0 auto;
            max-width: 640px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
            text-align: center;
          }

          @media (max-width: 1050px) {
            .contact-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .contact-shell {
              padding: 0 16px;
            }

            .contact-banner-row {
              flex-wrap: wrap;
            }

            .contact-banner-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .contact-intro h1 {
              font-size: 42px;
              line-height: 1.05;
            }

            .contact-intro p {
              font-size: 18px;
            }

            .contact-card-title,
            .contact-form-title,
            .contact-footer-help h2 {
              font-size: 28px;
              line-height: 1.1;
            }

            .field-grid-2 {
              grid-template-columns: 1fr;
            }

            .contact-submit {
              width: 100%;
              min-width: 0;
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="contact-banner">
        <div className="contact-shell">
          <div className="contact-inner">
            <div className="contact-banner-row">
              <h2 className="contact-banner-title">Contact Us</h2>

              <button
                className="contact-breadcrumb"
                onClick={() => navigate("/get-involved")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>Get Involved</span>
              </button>

              <div className="contact-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-shell">
          <div className="contact-inner">
            <div className="contact-intro">
              <h1>We’d love to hear from you</h1>
              <p>
                Reach out with questions about programs, enrollment, volunteering,
                sponsorships, or general support.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-stack">
                <div className="contact-card">
                  <h2 className="contact-card-title">Get in touch</h2>

                  <div className="contact-info-list">
                    <div className="contact-info-row">
                      <Phone size={18} className="contact-info-icon" />
                      <div>
                        <p className="contact-info-label">Phone</p>
                        <p className="contact-info-value">
                          <a className="contact-info-link" href="tel:+13852171791">
                            +1 (385) 217-1791
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-row">
                      <Mail size={18} className="contact-info-icon" />
                      <div>
                        <p className="contact-info-label">Email</p>
                        <p className="contact-info-value">
                          <a className="contact-info-link" href="mailto:info@clubability.org">
                            info@clubability.org
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-row">
                      <MapPin size={18} className="contact-info-icon" />
                      <div>
                        <p className="contact-info-label">Address</p>
                        <p className="contact-info-value">
                          845 S Main St B8,
                          <br />
                          Bountiful, UT 84010
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-row">
                      <Clock3 size={18} className="contact-info-icon" />
                      <div>
                        <p className="contact-info-label">Hours</p>
                        <p className="contact-info-value">
                          Monday – Friday
                          <br />
                          9:00 AM – 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-note">
                  <h3>Need help finding the right program?</h3>
                  <p>
                    If you are not sure where to start, send us a message and our
                    team can help point you toward the best fit for your student,
                    family, or organization.
                  </p>
                </div>
              </div>

              <div className="contact-form-panel">
                <h2 className="contact-form-title">Send us a message</h2>

                <div className="field-grid-2">
                  <div className="field">
                    <label className="label">First name</label>
                    <input className="input" type="text" placeholder="Jane" />
                  </div>

                  <div className="field">
                    <label className="label">Last name</label>
                    <input className="input" type="text" placeholder="Smith" />
                  </div>
                </div>

                <div className="field-grid-2">
                  <div className="field">
                    <label className="label">Email address</label>
                    <input
                      className="input"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="field">
                    <label className="label">Phone number</label>
                    <input className="input" type="tel" placeholder="(801) 555-1234" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Subject</label>
                  <div className="select-wrap">
                    <select
                      className="select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option>General Question</option>
                      <option>Program Information</option>
                      <option>Enrollment Help</option>
                      <option>Volunteer Inquiry</option>
                      <option>Sponsorship Inquiry</option>
                      <option>Donation Question</option>
                    </select>
                    <ChevronDown size={18} className="select-icon" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <textarea
                    className="textarea"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <div className="contact-actions">
                  <button className="contact-submit" type="button">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-footer-help">
              <h2>We’re here to help</h2>
              <p>
                Whether you are exploring programs, looking for community support
                options, or need help with your next step, Club Ability is ready
                to connect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}