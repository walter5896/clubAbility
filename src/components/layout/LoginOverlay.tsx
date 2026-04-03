import { X } from "lucide-react";

type LoginOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginOverlay({
  isOpen,
  onClose,
}: LoginOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="login-overlay-root" onClick={onClose}>
      <style>
        {`
          .login-overlay-root {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.34);
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            padding: 58px 52px 24px 24px;
            box-sizing: border-box;
          }

          .login-overlay-panel {
            width: 370px;
            background: #f7f7f7;
            border-radius: 10px;
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
            position: relative;
            padding: 22px 18px 18px;
            box-sizing: border-box;
          }

          .login-overlay-close {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: transparent;
            color: #062430;
            cursor: pointer;
            padding: 0;
            line-height: 0;
            transition: transform 0.18s ease, opacity 0.18s ease;
          }

          .login-overlay-close:hover {
            transform: scale(1.06);
            opacity: 0.9;
          }

          .login-overlay-icon-wrap {
            display: flex;
            justify-content: center;
            margin: 8px 0 12px;
          }

          .login-overlay-icon {
            width: 86px;
            height: 86px;
            display: block;
          }

          .login-overlay-title {
            margin: 0 0 12px 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1;
            font-weight: 700;
            color: #062430;
            text-align: left;
          }

          .login-overlay-field {
            margin-bottom: 12px;
          }

          .login-overlay-label {
            display: block;
            margin: 0 0 6px 0;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 1.2;
            font-weight: 700;
            color: #062430;
            text-align: left;
          }

          .login-overlay-input {
            width: 100%;
            height: 32px;
            border-radius: 4px;
            border: 1.5px solid #c7dbe3;
            background: #f7f7f7;
            padding: 0 10px;
            box-sizing: border-box;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
            color: #6f7f89;
            outline: none;
          }

          .login-overlay-input::placeholder {
            color: #6f7f89;
            opacity: 1;
          }

          .login-overlay-input:focus {
            border-color: #8cb5c4;
          }

          .login-overlay-divider {
            height: 1.5px;
            background: #062430;
            margin: 10px 0 10px;
          }

          .login-overlay-footer {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
          }

          .login-overlay-links {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex: 1;
          }

          .login-overlay-link {
            border: none;
            background: transparent;
            padding: 0;
            font-family: Roboto, sans-serif;
            font-size: 8px;
            line-height: 1.1;
            font-weight: 400;
            color: #062430;
            text-decoration: underline;
            cursor: pointer;
            white-space: nowrap;
          }

          .login-overlay-submit {
            border: none;
            background: #cb356e;
            color: white;
            border-radius: 6px;
            height: 28px;
            min-width: 72px;
            padding: 0 14px;
            font-family: Roboto, sans-serif;
            font-size: 11px;
            line-height: 1;
            font-weight: 700;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.16);
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
          }

          .login-overlay-submit:hover {
            transform: translateY(-1px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          @media (max-width: 768px) {
            .login-overlay-root {
              justify-content: center;
              align-items: flex-start;
              padding: 72px 16px 16px;
            }

            .login-overlay-panel {
              width: min(370px, 100%);
            }
          }
        `}
      </style>

      <div
        className="login-overlay-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="login-overlay-close"
          type="button"
          onClick={onClose}
          aria-label="Close login overlay"
        >
          <X size={28} strokeWidth={2.4} />
        </button>

        <div className="login-overlay-icon-wrap">
          <svg
            className="login-overlay-icon"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="42" stroke="#062430" strokeWidth="10" />
            <circle cx="60" cy="48" r="12" fill="#062430" />
            <path
              d="M31 79C37 67 47 61 60 61C73 61 83 67 89 79"
              fill="#062430"
            />
          </svg>
        </div>

        <h2 className="login-overlay-title">Login</h2>

        <div className="login-overlay-field">
          <label className="login-overlay-label" htmlFor="overlay-username">
            Username
          </label>
          <input
            id="overlay-username"
            className="login-overlay-input"
            type="email"
            placeholder="example@email.com"
          />
        </div>

        <div className="login-overlay-field">
          <label className="login-overlay-label" htmlFor="overlay-password">
            Password
          </label>
          <input
            id="overlay-password"
            className="login-overlay-input"
            type="password"
            placeholder="****************"
          />
        </div>

        <div className="login-overlay-divider" />

        <div className="login-overlay-footer">
          <div className="login-overlay-links">
            <button className="login-overlay-link" type="button">
              Forgot your password?
            </button>

            <button className="login-overlay-link" type="button">
              Sign up?
            </button>
          </div>

          <button className="login-overlay-submit" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}