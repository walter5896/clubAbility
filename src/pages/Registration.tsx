import { ChevronLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import summaryImg from "../assets/clubability/registration/Rectangle 9.svg";
import appleIcon from "../assets/clubability/shared/apple.svg";
import googleIcon from "../assets/clubability/shared/google.svg";

export default function Registration() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Registration",
      breadcrumbProgram: "Computing",
      breadcrumbPrograms: "Programs",
      yourInfo: "Your info",
      payment: "Payment",
      billingAddress: "Billing address",
      registrationSummary: "Registration summary",
      firstName: "First name",
      lastName: "Last name",
      emailAddress: "Email address",
      phoneNumber: "Phone number",
      registeringForSomeoneElse: "I am registering someone else",
      registeringForSomeoneElseAria: "I am registering someone else",
      cardNumber: "Card number",
      expirationDate: "Expiration date",
      securityCode: "Security code",
      nameOnCard: "Name on card",
      countryRegion: "Country/region",
      address: "Address",
      apartment: "Apartment, suite, etc.",
      zipCode: "ZIP code",
      summaryAlt: "Computing class",
      program: "Program",
      date: "Date",
      classes: "Classes",
      total: "Total",
      register: "Register",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      helpText: "Need any help with registration? We’re happy to assist.",
      firstNameDefault: "Jane",
      lastNameDefault: "Smith",
      emailDefault: "example@email.com",
      phoneDefault: "(801) 555-1234",
      cardNumberDefault: "0000 0000 0000 0000",
      expirationDefault: "MM / YY",
      securityDefault: "000",
      cardNameDefault: "Jane Smith",
      countryDefault: "United States",
      addressDefault: "123 Main Street",
      apartmentDefault: "(optional)",
      zipDefault: "00000",
      summaryProgram: "Computing",
      summaryDate: "Mar 7, 2026",
      summaryClasses: "1 Class",
      summaryTotal: "$90",
    },
    es: {
      bannerTitle: "Registro",
      breadcrumbProgram: "Computación",
      breadcrumbPrograms: "Programas",
      yourInfo: "Tu información",
      payment: "Pago",
      billingAddress: "Dirección de facturación",
      registrationSummary: "Resumen de registro",
      firstName: "Nombre",
      lastName: "Apellido",
      emailAddress: "Correo electrónico",
      phoneNumber: "Número de teléfono",
      registeringForSomeoneElse: "Estoy registrando a otra persona",
      registeringForSomeoneElseAria: "Estoy registrando a otra persona",
      cardNumber: "Número de tarjeta",
      expirationDate: "Fecha de vencimiento",
      securityCode: "Código de seguridad",
      nameOnCard: "Nombre en la tarjeta",
      countryRegion: "País/región",
      address: "Dirección",
      apartment: "Apartamento, suite, etc.",
      zipCode: "Código postal",
      summaryAlt: "Clase de computación",
      program: "Programa",
      date: "Fecha",
      classes: "Clases",
      total: "Total",
      register: "Registrar",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      helpText: "¿Necesitas ayuda con el registro? Con gusto te ayudamos.",
      firstNameDefault: "Juana",
      lastNameDefault: "Pérez",
      emailDefault: "ejemplo@correo.com",
      phoneDefault: "(801) 555-1234",
      cardNumberDefault: "0000 0000 0000 0000",
      expirationDefault: "MM / AA",
      securityDefault: "000",
      cardNameDefault: "Juana Pérez",
      countryDefault: "Estados Unidos",
      addressDefault: "123 Main Street",
      apartmentDefault: "(opcional)",
      zipDefault: "00000",
      summaryProgram: "Computación",
      summaryDate: "7 mar, 2026",
      summaryClasses: "1 Clase",
      summaryTotal: "$90",
    },
  } as const;

  const t = copy[language];

  const [registeringForSomeoneElse, setRegisteringForSomeoneElse] = useState(false);
  const [country, setCountry] = useState<string>(t.countryDefault);

  const countryOptions: string[] = [t.countryDefault];
  const countryValue = countryOptions.includes(country) ? country : countryOptions[0];

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
            font-size: 40px;
            line-height: 40px;
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
            font-size: 30px;
            line-height: 30px;
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

            .registration-banner-title {
              font-size: 32px;
              line-height: 36px;
            }

            .panel-title {
              font-size: 26px;
              line-height: 30px;
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
              <h2 className="registration-banner-title">{t.bannerTitle}</h2>

              <button
                className="registration-breadcrumb"
                onClick={() => navigate("/program-detail")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>{t.breadcrumbProgram}</span>
              </button>

              <button
                className="registration-breadcrumb"
                onClick={() => navigate("/programs")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>{t.breadcrumbPrograms}</span>
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
                  <h2 className="panel-title">{t.yourInfo}</h2>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">{t.firstName}</label>
                      <input className="input" defaultValue={t.firstNameDefault} />
                    </div>

                    <div className="field">
                      <label className="label">{t.lastName}</label>
                      <input className="input" defaultValue={t.lastNameDefault} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{t.emailAddress}</label>
                    <input className="input" defaultValue={t.emailDefault} />
                  </div>

                  <div className="field">
                    <label className="label">{t.phoneNumber}</label>
                    <input className="input" defaultValue={t.phoneDefault} />
                  </div>

                  <div className="panel-divider" />

                  <div className="checkbox-row">
                    <button
                      type="button"
                      className={`checkbox ${registeringForSomeoneElse ? "checked" : ""}`}
                      onClick={() => setRegisteringForSomeoneElse((prev) => !prev)}
                      aria-label={t.registeringForSomeoneElseAria}
                      aria-pressed={registeringForSomeoneElse}
                    />
                    <div className="checkbox-label">{t.registeringForSomeoneElse}</div>
                  </div>
                </div>

                <div className="panel">
                  <h2 className="panel-title">{t.payment}</h2>

                  <div className="field">
                    <label className="label">{t.cardNumber}</label>
                    <input className="input" defaultValue={t.cardNumberDefault} />
                  </div>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">{t.expirationDate}</label>
                      <input className="input" defaultValue={t.expirationDefault} />
                    </div>

                    <div className="field">
                      <label className="label">{t.securityCode}</label>
                      <input className="input" defaultValue={t.securityDefault} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{t.nameOnCard}</label>
                    <input className="input" defaultValue={t.cardNameDefault} />
                  </div>
                </div>

                <div className="panel">
                  <h2 className="panel-title">{t.billingAddress}</h2>

                  <div className="field">
                    <label className="label">{t.countryRegion}</label>
                    <div className="select-wrap">
                      <select
                        className="select"
                        value={countryValue}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countryOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="select-icon" />
                    </div>
                  </div>

                  <div className="field-grid-2">
                    <div className="field">
                      <label className="label">{t.firstName}</label>
                      <input className="input" defaultValue={t.firstNameDefault} />
                    </div>

                    <div className="field">
                      <label className="label">{t.lastName}</label>
                      <input className="input" defaultValue={t.lastNameDefault} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">{t.address}</label>
                    <input className="input" defaultValue={t.addressDefault} />
                  </div>

                  <div className="field">
                    <label className="label">{t.apartment}</label>
                    <input className="input" defaultValue={t.apartmentDefault} />
                  </div>

                  <div className="field">
                    <label className="label">{t.zipCode}</label>
                    <input className="input" defaultValue={t.zipDefault} />
                  </div>
                </div>
              </div>

              <div className="right-stack">
                <div className="panel">
                  <h2 className="panel-title">{t.registrationSummary}</h2>

                  <div className="summary-image-wrap">
                    <img className="summary-image" src={summaryImg} alt={t.summaryAlt} />
                  </div>

                  <div className="summary-rows">
                    <div className="summary-row">
                      <span>{t.program}</span>
                      <span className="value">{t.summaryProgram}</span>
                    </div>

                    <div className="summary-row">
                      <span>{t.date}</span>
                      <span className="value">{t.summaryDate}</span>
                    </div>

                    <div className="summary-row">
                      <span>{t.classes}</span>
                      <span className="value">{t.summaryClasses}</span>
                    </div>
                  </div>

                  <div className="summary-divider" />

                  <div className="summary-total">
                    <span>{t.total}</span>
                    <span>{t.summaryTotal}</span>
                  </div>

                  <button
                    className="btn register-btn"
                    type="button"
                    onClick={() => navigate("/thank-you")}
                  >
                    {t.register}
                  </button>

                  <div className="pay-row">
                    <button className="btn pay-btn" type="button">
                      <img className="pay-icon" src={appleIcon} alt={t.applePay} />
                      <span>{t.applePay}</span>
                    </button>

                    <button className="btn pay-btn" type="button">
                      <img className="pay-icon" src={googleIcon} alt={t.googlePay} />
                      <span>{t.googlePay}</span>
                    </button>
                  </div>
                </div>

                <div className="help-card">
                  <p>{t.helpText}</p>
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