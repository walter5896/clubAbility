import { ChevronLeft, ChevronDown, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Donate() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Donate",
      breadcrumb: "Get Involved",
      yourInfo: "Your info",
      billingAddress: "Billing address",
      payment: "Payment",
      donationSummary: "Donation summary",
      firstName: "First name",
      lastName: "Last name",
      emailAddress: "Email address",
      phoneNumber: "Phone number",
      countryRegion: "Country/region",
      address: "Address",
      apartment: "Apartment, suite, etc.",
      zipCode: "ZIP code",
      cardNumber: "Card number",
      expirationDate: "Expiration date",
      securityCode: "Security code",
      nameOnCard: "Name on card",
      pickDonation: "Pick a Donation",
      monthlyDonation: "Making this a monthly donation?",
      monthlyDonationAria: "Make this a monthly donation",
      donate: "Donate",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      helpText: "Need any help with registration? We’re happy to assist.",
      countryDefault: "United States",
      firstNameDefault: "Jane",
      lastNameDefault: "Smith",
      emailDefault: "example@email.com",
      phoneDefault: "(801) 555-1234",
      addressDefault: "123 Main Street",
      apartmentDefault: "(optional)",
      zipDefault: "00000",
      cardNumberDefault: "0000 0000 0000 0000",
      expirationDefault: "MM / YY",
      securityDefault: "000",
      cardNameDefault: "Jane Smith",
    },
    es: {
      bannerTitle: "Donar",
      breadcrumb: "Participa",
      yourInfo: "Tu información",
      billingAddress: "Dirección de facturación",
      payment: "Pago",
      donationSummary: "Resumen de donación",
      firstName: "Nombre",
      lastName: "Apellido",
      emailAddress: "Correo electrónico",
      phoneNumber: "Número de teléfono",
      countryRegion: "País/región",
      address: "Dirección",
      apartment: "Apartamento, suite, etc.",
      zipCode: "Código postal",
      cardNumber: "Número de tarjeta",
      expirationDate: "Fecha de vencimiento",
      securityCode: "Código de seguridad",
      nameOnCard: "Nombre en la tarjeta",
      pickDonation: "Elige una donación",
      monthlyDonation: "¿Hacer esto una donación mensual?",
      monthlyDonationAria: "Hacer esto una donación mensual",
      donate: "Donar",
      applePay: "Apple Pay",
      googlePay: "Google Pay",
      helpText: "¿Necesitas ayuda con el registro? Con gusto te ayudamos.",
      countryDefault: "Estados Unidos",
      firstNameDefault: "Juana",
      lastNameDefault: "Pérez",
      emailDefault: "ejemplo@correo.com",
      phoneDefault: "(801) 555-1234",
      addressDefault: "123 Main Street",
      apartmentDefault: "(opcional)",
      zipDefault: "00000",
      cardNumberDefault: "0000 0000 0000 0000",
      expirationDefault: "MM / AA",
      securityDefault: "000",
      cardNameDefault: "Juana Pérez",
    },
  } as const;

  const t = copy[language];

  const donationOptions: string[] = [t.pickDonation, "$25", "$50", "$100"];
  const countryOptions: string[] = [t.countryDefault];

  const [monthly, setMonthly] = useState(false);
  const [donationAmount, setDonationAmount] = useState<string>(donationOptions[0]);
  const [country, setCountry] = useState<string>(countryOptions[0]);

  const currentDonationOptions: string[] = donationOptions;
  const donationValue = currentDonationOptions.includes(donationAmount)
    ? donationAmount
    : currentDonationOptions[0];

  const currentCountryOptions: string[] = countryOptions;
  const countryValue = currentCountryOptions.includes(country)
    ? country
    : currentCountryOptions[0];

  return (
    <div className="donate-page">
      <style>
        {`
          .donate-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .donate-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .donate-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .donate-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .donate-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .donate-banner-title {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .donate-breadcrumb {
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

          .donate-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .donate-content {
            padding: 24px 0 56px;
          }

          .donate-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.85fr;
            gap: 18px;
            align-items: start;
          }

          .left-stack,
          .right-stack {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .panel {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 18px 18px 16px;
          }

          .panel-title {
            margin: 0 0 18px 0;
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
          .select {
            width: 100%;
            height: 42px;
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
            background: rgba(6, 36, 48, 0.5);
            margin-top: 10px;
          }

          .summary-box {
            background: #b9d3df;
            height: 176px;
            border-radius: 16px;
            margin-bottom: 18px;
          }

          .summary-select {
            margin-bottom: 14px;
          }

          .checkbox-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
          }

          .checkbox {
            width: 22px;
            height: 22px;
            border-radius: 8px;
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
            background: #c23368;
            border-color: #c23368;
          }

          .checkbox.checked::after {
            content: "";
            position: absolute;
            left: 6px;
            top: 2px;
            width: 6px;
            height: 12px;
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

          .summary-divider {
            height: 1.5px;
            background: rgba(6, 36, 48, 0.5);
            margin: 8px 0 18px;
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

          .donate-btn {
            width: 100%;
            height: 40px;
            background: #c23368;
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
            gap: 12px;
          }

          .pay-btn {
            height: 40px;
            background: white;
            color: #1b2e38;
            border: 2px solid rgba(6, 36, 48, 0.55);
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .help-card {
            background: #f3dfe8;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.10);
            padding: 18px;
          }

          .help-card p {
            margin: 0 0 18px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.3;
            font-weight: 400;
            color: #1b2e38;
            text-align: left;
          }

          .help-phone {
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.1;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          @media (max-width: 1050px) {
            .donate-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 900px) {
            .donate-shell {
              padding: 0 16px;
            }

            .donate-banner-row {
              flex-wrap: wrap;
            }

            .donate-banner-title {
              font-size: 32px;
              line-height: 36px;
            }

            .panel-title {
              font-size: 26px;
              line-height: 30px;
            }

            .field-grid-2,
            .pay-row {
              grid-template-columns: 1fr;
            }

            .donate-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="donate-banner">
        <div className="donate-shell">
          <div className="donate-inner">
            <div className="donate-banner-row">
              <h2 className="donate-banner-title">{t.bannerTitle}</h2>

              <button
                className="donate-breadcrumb"
                onClick={() => navigate("/get-involved")}
                type="button"
              >
                <ChevronLeft size={18} />
                <span>{t.breadcrumb}</span>
              </button>

              <div className="donate-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="donate-content">
        <div className="donate-shell">
          <div className="donate-inner">
            <div className="donate-grid">
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
                        {currentCountryOptions.map((option) => (
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
              </div>

              <div className="right-stack">
                <div className="panel">
                  <h2 className="panel-title">{t.donationSummary}</h2>

                  <div className="summary-box" />

                  <div className="select-wrap summary-select">
                    <select
                      className="select"
                      value={donationValue}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    >
                      {currentDonationOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="select-icon" />
                  </div>

                  <div className="checkbox-row">
                    <button
                      type="button"
                      className={`checkbox ${monthly ? "checked" : ""}`}
                      onClick={() => setMonthly((prev) => !prev)}
                      aria-label={t.monthlyDonationAria}
                      aria-pressed={monthly}
                    />
                    <div className="checkbox-label">{t.monthlyDonation}</div>
                  </div>

                  <div className="summary-divider" />

                  <button
                    className="btn donate-btn"
                    type="button"
                    onClick={() => navigate("/thank-you")}
                  >
                    {t.donate}
                  </button>

                  <div className="pay-row">
                    <button className="btn pay-btn" type="button">
                      <Apple size={18} />
                      <span>{t.applePay}</span>
                    </button>

                    <button className="btn pay-btn" type="button">
                      <span style={{ fontWeight: 700 }}>G</span>
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