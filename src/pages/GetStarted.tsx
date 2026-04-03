import { useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const [showCityOptions, setShowCityOptions] = useState(false);

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

  const courses = ["AI Innovation", "Marketing", "Canva Basics", "3D Design"];
  const cities = ["Bountiful", "Salt Lake City", "West Valley", "Ogden", "Kearns"];
  const timeOptions = [
    "Morning (9am–12pm)",
    "Noon (12pm–2pm)",
    "Afternoon (2pm–6pm)",
    "Evening (6pm–9pm)",
  ];
  const dayOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const languageOptions = ["Spanish", "English"];
  const modalityOptions = ["In Person", "Online / Virtual"];

  return (
    <div className="get-started-page">
      <style>
        {`
          .get-started-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .gs-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .gs-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .gs-banner {
            background: #0c3a4a;
            padding: 28px 0 30px;
          }

          .gs-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
          }

          .gs-intro {
            background: #ffffff;
            padding: 12px 0 14px;
          }

          .gs-intro-copy {
            max-width: 760px;
            margin: 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .gs-content {
            padding: 42px 0 68px;
          }

          .gs-form-title {
            margin: 0 0 34px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .gs-stack {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .gs-panel {
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 18px 14px 16px;
          }

          .gs-panel-title {
            margin: 0 0 18px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .gs-label {
            display: block;
            margin: 0 0 8px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.15;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .gs-field {
            margin-bottom: 14px;
          }

          .gs-field:last-child {
            margin-bottom: 0;
          }

          .gs-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .gs-input,
          .gs-textarea,
          .gs-select-trigger {
            width: 100%;
            border-radius: 8px;
            border: 1.5px solid #bdd6df;
            background: #ffffff;
            box-sizing: border-box;
            outline: none;
            font-family: Roboto, sans-serif;
            color: #6b7f89;
          }

          .gs-input {
            height: 42px;
            padding: 0 12px;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
          }

          .gs-input:focus,
          .gs-textarea:focus {
            border-color: #4a7a8a;
          }

          .gs-check-grid {
            display: grid;
            gap: 12px;
            margin-top: 4px;
          }

          .gs-check-row {
            display: flex;
            flex-wrap: wrap;
            gap: 18px 26px;
          }

          .gs-checkbox {
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

          .gs-checkbox input {
            width: 14px;
            height: 14px;
            margin: 0;
            accent-color: #c23368;
          }

          .gs-inline-other {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 2px;
            flex-wrap: wrap;
          }

          .gs-inline-other .gs-input {
            width: 160px;
            height: 34px;
          }

          .gs-select-area {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }

          .gs-free-input {
            flex: 1;
            min-width: 280px;
          }

          .gs-select-wrap {
            position: relative;
            width: 180px;
          }

          .gs-select-trigger {
            height: 28px;
            padding: 0 28px 0 10px;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            text-align: left;
            cursor: pointer;
          }

          .gs-select-icon {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #1d3340;
          }

          .gs-option-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 8px;
          }

          .gs-textarea {
            min-height: 160px;
            padding: 12px;
            resize: vertical;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
          }

          .gs-submit-wrap {
            display: flex;
            justify-content: center;
            padding-top: 14px;
          }

          .gs-submit-btn {
            border: none;
            border-radius: 8px;
            background: #c23368;
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

          .gs-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .gs-help {
            padding-top: 34px;
          }

          .gs-help-title {
            margin: 0 0 20px 0;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .gs-help-body {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
            text-align: left;
          }

          .gs-help-copy {
            margin: 0 0 18px 0;
            max-width: 520px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .gs-help-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }

          .gs-help-item {
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

          .gs-help-item svg {
            flex-shrink: 0;
            color: #1b2e38;
          }

          @media (max-width: 900px) {
            .gs-shell {
              padding: 0 16px;
            }

            .gs-banner h1 {
              font-size: 42px;
              line-height: 1.05;
            }

            .gs-intro-copy {
              font-size: 22px;
              line-height: 1.2;
            }

            .gs-form-title {
              font-size: 30px;
              line-height: 1.1;
            }

            .gs-panel-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .gs-grid-2 {
              grid-template-columns: 1fr;
            }

            .gs-select-area {
              flex-direction: column;
              align-items: stretch;
            }

            .gs-free-input {
              min-width: 0;
            }

            .gs-select-wrap {
              width: 100%;
            }
          }
        `}
      </style>

      <section className="gs-banner">
        <div className="gs-shell">
          <div className="gs-inner">
            <h1>Get Started</h1>
          </div>
        </div>
      </section>

      <section className="gs-intro">
        <div className="gs-shell">
          <div className="gs-inner">
            <div className="gs-intro-copy">
              Tell us about your student and the programs you're interested in.
              <br />
              We'll follow up with the next steps.
            </div>
          </div>
        </div>
      </section>

      <section className="gs-content">
        <div className="gs-shell">
          <div className="gs-inner">
            <h2 className="gs-form-title">Student Interest Form</h2>

            <div className="gs-stack">
              <div className="gs-panel">
                <h3 className="gs-panel-title">Your info</h3>

                <div className="gs-grid-2">
                  <div className="gs-field">
                    <label className="gs-label">First name</label>
                    <input className="gs-input" defaultValue="Jane" />
                  </div>

                  <div className="gs-field">
                    <label className="gs-label">Last name</label>
                    <input className="gs-input" defaultValue="Smith" />
                  </div>
                </div>

                <div className="gs-field">
                  <label className="gs-label">Email address</label>
                  <input className="gs-input" defaultValue="example@email.com" />
                </div>

                <div className="gs-field">
                  <label className="gs-label">Phone number</label>
                  <input className="gs-input" defaultValue="(801) 555-1234" />
                </div>
              </div>

              <div className="gs-panel">
                <h3 className="gs-panel-title">Time &amp; Day Preference</h3>

                <div className="gs-check-grid">
                  {timeOptions.map((option) => (
                    <label key={option} className="gs-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedTimes.includes(option)}
                        onChange={() => toggleItem(option, selectedTimes, setSelectedTimes)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}

                  <div className="gs-inline-other">
                    <label className="gs-checkbox">
                      <input type="checkbox" />
                      <span>Other:</span>
                    </label>
                    <input className="gs-input" placeholder="Type Here" />
                  </div>

                  <div className="gs-check-row">
                    {dayOptions.map((day) => (
                      <label key={day} className="gs-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedDays.includes(day)}
                          onChange={() => toggleItem(day, selectedDays, setSelectedDays)}
                        />
                        <span>{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="gs-panel">
                <h3 className="gs-panel-title">Courses Interested In</h3>

                <div className="gs-select-area">
                  <input
                    className="gs-input gs-free-input"
                    placeholder="Type Here Or Manually Select Courses"
                  />

                  <div className="gs-select-wrap">
                    <button
                      type="button"
                      className="gs-select-trigger"
                      onClick={() => setShowCourseOptions((prev) => !prev)}
                    >
                      Select Courses
                    </button>
                    <ChevronDown size={14} className="gs-select-icon" />
                  </div>
                </div>

                {(showCourseOptions || selectedCourses.length > 0) && (
                  <div className="gs-option-list">
                    {courses.map((course) => (
                      <label key={course} className="gs-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedCourses.includes(course)}
                          onChange={() =>
                            toggleItem(course, selectedCourses, setSelectedCourses)
                          }
                        />
                        <span>{course}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="gs-panel">
                <h3 className="gs-panel-title">Language / Idioma</h3>

                <div className="gs-check-grid">
                  {languageOptions.map((option) => (
                    <label key={option} className="gs-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedLanguages.includes(option)}
                        onChange={() =>
                          toggleItem(option, selectedLanguages, setSelectedLanguages)
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}

                  <div className="gs-inline-other">
                    <label className="gs-checkbox">
                      <input type="checkbox" />
                      <span>Other:</span>
                    </label>
                    <input className="gs-input" placeholder="Type Here" />
                  </div>
                </div>
              </div>

              <div className="gs-panel">
                <h3 className="gs-panel-title">Modality Preference</h3>

                <div className="gs-check-grid" style={{ marginBottom: "16px" }}>
                  {modalityOptions.map((option) => (
                    <label key={option} className="gs-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedModalities.includes(option)}
                        onChange={() =>
                          toggleItem(option, selectedModalities, setSelectedModalities)
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}

                  <div className="gs-inline-other">
                    <label className="gs-checkbox">
                      <input type="checkbox" />
                      <span>Other:</span>
                    </label>
                    <input className="gs-input" placeholder="Type Here" />
                  </div>
                </div>

                <div className="gs-field">
                  <label className="gs-label">Select City If In Person</label>

                  <div className="gs-select-area" style={{ marginBottom: "10px" }}>
                    <input
                      className="gs-input gs-free-input"
                      placeholder="Type Here Or Manually Select A City"
                    />

                    <div className="gs-select-wrap">
                      <button
                        type="button"
                        className="gs-select-trigger"
                        onClick={() => setShowCityOptions((prev) => !prev)}
                      >
                        Select City
                      </button>
                      <ChevronDown size={14} className="gs-select-icon" />
                    </div>
                  </div>

                  {(showCityOptions || selectedCities.length > 0) && (
                    <div className="gs-option-list">
                      {cities.map((city) => (
                        <label key={city} className="gs-checkbox">
                          <input
                            type="checkbox"
                            checked={selectedCities.includes(city)}
                            onChange={() =>
                              toggleItem(city, selectedCities, setSelectedCities)
                            }
                          />
                          <span>{city}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="gs-panel">
                <h3 className="gs-panel-title">Additional Notes (Optional)</h3>
                <textarea
                  className="gs-textarea"
                  placeholder="Type Here to Form Message"
                />
              </div>

              <div className="gs-submit-wrap">
                <button
                  className="gs-submit-btn"
                  type="button"
                  onClick={() => navigate("/thank-you")}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="gs-help">
              <h3 className="gs-help-title">Need Help?</h3>

              <div className="gs-help-body">
                <p className="gs-help-copy">
                  Have questions about programs or enrollment?
                  <br />
                  Contact our team and we'll be happy to assist you.
                </p>

                <div className="gs-help-list">
                  <div className="gs-help-item">
                    <Phone size={14} />
                    <span>+1 (385) 217-1791</span>
                  </div>

                  <div className="gs-help-item">
                    <MapPin size={14} />
                    <span>845 S Main St B8, Bountiful, UT 84010</span>
                  </div>

                  <div className="gs-help-item">
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