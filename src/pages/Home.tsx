import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Hand,
  UserRound,
  Keyboard,
  Accessibility,
  SquareCheckBig,
} from "lucide-react";

import heroImg from "../assets/clubability/home/heroimg.png";

import programmingImg from "../assets/clubability/home/programming.svg";
import marketingImg from "../assets/clubability/home/marketing.svg";
import artificialIntelligenceImg from "../assets/clubability/home/artificialintelligence.svg";

import avatarMaria from "../assets/clubability/home/avatar-maria.svg";
import avatarJames from "../assets/clubability/home/avatar-james.svg";
import avatarOlivia from "../assets/clubability/home/avatar-olivia.svg";

import whyFamiliesHandsOn from "../assets/clubability/home/why-families-hands-on.svg";
import whyFamiliesAccessible from "../assets/clubability/home/why-families-accessible.svg";
import whyFamiliesImpact from "../assets/clubability/home/why-families-impact.svg";

export default function Home() {
  const navigate = useNavigate();

  const whyCards = [
    {
      title: "Hands-On Learning",
      text: "Students build real tech projects using coding, design, and AI tools.",
      stat: "3000+ Experiences",
      bg: whyFamiliesHandsOn,
      icon: <Keyboard size={20} color="#062430" strokeWidth={2.2} />,
    },
    {
      title: "Accessible Opportunities",
      text: "Scholarships and affordable programs make technology education available to all families.",
      stat: "Over 150 Donated Devices",
      bg: whyFamiliesAccessible,
      icon: <Accessibility size={20} color="#062430" strokeWidth={2.2} />,
    },
    {
      title: "Proven Impact",
      text: "Serving thousands of students and helping families build real-world technology skills.",
      stat: "98% Satisfaction",
      bg: whyFamiliesImpact,
      icon: <SquareCheckBig size={20} color="#062430" strokeWidth={2.2} />,
    },
  ];

  const programCards = [
    {
      title: "Programming",
      text: "Explore coding, game design, and creative technology.",
      img: programmingImg,
    },
    {
      title: "Marketing",
      text: "Learn branding, design, and digital communication skills.",
      img: marketingImg,
    },
    {
      title: "Artificial Intelligence",
      text: "Discover how AI works and create intelligent projects.",
      img: artificialIntelligenceImg,
    },
  ];

  const storyCards = [
    {
      name: "Maria R.",
      text: '"My son learned coding and now wants to be a software engineer."',
      avatar: avatarMaria,
      bg: "#f6dce7",
    },
    {
      name: "James T.",
      text: '"The teachers are amazing and make technology fun and engaging."',
      avatar: avatarJames,
      bg: "#dceff5",
    },
    {
      name: "Olivia G.",
      text: '"My daughter gained confidence and real tech skills."',
      avatar: avatarOlivia,
      bg: "#eef7fa",
    },
  ];

  const getInvolvedCards = [
    {
      title: "Donors",
      text: "Support students and help expand access to technology education.",
      cta: "Donate",
      bg: "#0c495d",
      icon: <Heart size={30} color="white" strokeWidth={2.2} />,
      onClick: () => navigate("/donate"),
    },
    {
      title: "Volunteer",
      text: "Share your knowledge and mentor students interested in technology.",
      cta: "Volunteer",
      bg: "#062c3a",
      icon: <Hand size={30} color="white" strokeWidth={2.2} />,
      onClick: () => navigate("/volunteer"),
    },
    {
      title: "Become a Sponsor",
      text: "Partner with Club Ability to support STEM education programs.",
      cta: "Sponsor",
      bg: "#78a5b6",
      icon: <UserRound size={30} color="white" strokeWidth={2.2} />,
      onClick: () => navigate("/sponsors"),
    },
  ];

  return (
    <div className="home-page">
      <style>
        {`
          .home-page {
            background: #f2f8fa;
          }

          .home-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .home-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .home-title {
            margin: 0 0 28px 0;
            text-align: center;
            font-family: Poppins, sans-serif;
            font-size: 35px;
            line-height: 35px;
            font-weight: 600;
            color: #062430;
          }

          .hero-section {
            position: relative;
            min-height: 620px;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
          }

          .hero-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(6, 36, 48, 0.38);
          }

          .hero-content {
            position: relative;
            z-index: 2;
            min-height: 620px;
            display: flex;
            align-items: center;
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .hero-copy {
            max-width: 560px;
            text-align: left;
          }

          .hero-copy h1 {
            margin: 0 0 28px 0;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            color: white;
            text-align: left;
          }

          .hero-copy p {
            margin: 0 0 24px 0;
            max-width: 520px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 400;
            color: white;
            text-align: left;
          }

          .hero-actions {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .btn-primary,
          .btn-light {
            border: none;
            border-radius: 8px;
            padding: 14px 22px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease,
              opacity 0.18s ease;
          }

          .btn-primary {
            background: #c23368;
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.18);
          }

          .btn-light {
            background: #e0f5fc;
            color: #062430;
            box-shadow: 0 4px 10px rgba(0,0,0,0.16);
          }

          .btn-primary:hover,
          .btn-light:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.18);
            filter: brightness(0.98);
          }

          .btn-primary:active,
          .btn-light:active {
            transform: translateY(0);
          }

          .hero-note {
            margin: 4px 0 0 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: rgba(255,255,255,0.9);
          }

          .content-section {
            padding: 72px 0 0 0;
            background: #f2f8fa;
          }

          .group-wrap {
            border-radius: 8px;
            padding: 18px;
          }

          .why-wrap { background: #4c8192; }
          .program-wrap { background: #dff1f7; }
          .stories-wrap { background: #4c8192; }
          .involved-wrap { background: #fde8f0; }

          .equal-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .why-card,
          .program-card,
          .story-card,
          .involved-card {
            height: 250px;
            border-radius: 8px;
            overflow: hidden;
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              filter 0.2s ease;
          }

          .program-card:hover,
          .story-card:hover,
          .involved-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 22px rgba(0,0,0,0.16);
          }

          .why-card {
            position: relative;
            box-shadow: 0 2px 6px rgba(0,0,0,0.10);
            isolation: isolate;
          }

          .why-card-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border-radius: 8px;
          }

          .why-card-body {
            position: relative;
            z-index: 2;
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
          }

          .why-top {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 42px;
          }

          .why-icon-box {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(255,255,255,0.92);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            flex-shrink: 0;
          }

          .why-heading {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 400;
            color: #062430;
            text-align: left;
          }

          .why-text {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.28;
            font-weight: 400;
            color: #27414b;
            text-align: left;
            max-width: 240px;
          }

          .why-stat {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: #062430;
            text-align: left;
          }

          .program-card {
            position: relative;
            border: none;
            padding: 0;
            background: transparent;
            cursor: pointer;
            text-align: left;
            box-shadow: 0 3px 8px rgba(0,0,0,0.14);
          }

          .program-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }

          .program-overlay {
            position: absolute;
            inset: 0;
            background: rgba(6, 36, 48, 0.58);
            border-radius: 8px;
          }

          .program-body {
            position: relative;
            z-index: 2;
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            color: white;
          }

          .program-title {
            margin: 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 600;
            color: white;
            text-align: left;
          }

          .program-text {
            margin: 0 0 16px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.3;
            font-weight: 400;
            color: white;
            text-align: left;
            max-width: 220px;
          }

          .program-link {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 6px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: white;
          }

          .story-card {
            background: white;
            padding: 18px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.10);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .story-top {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }

          .story-avatar {
            width: 52px;
            height: 52px;
            border-radius: 999px;
            object-fit: cover;
            flex-shrink: 0;
          }

          .story-name {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.15;
            font-weight: 400;
            color: #062430;
            text-align: left;
          }

          .story-text {
            margin: 0 0 12px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.28;
            font-weight: 400;
            color: #27414b;
            text-align: left;
          }

          .story-stars {
            margin: 0 0 10px 0;
            font-size: 16px;
            color: #f2b300;
            letter-spacing: 1px;
            text-align: left;
          }

          .story-link {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 6px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: #062430;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
          }

          .involved-card {
            border: none;
            padding: 22px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.14);
            cursor: pointer;
            text-align: left;
            color: white;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .involved-title {
            margin: 0 0 16px 0;
            font-family: Poppins, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 600;
            color: white;
            text-align: left;
          }

          .involved-text {
            margin: 0 0 24px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.28;
            font-weight: 400;
            color: rgba(255,255,255,0.92);
            text-align: left;
            max-width: 220px;
          }

          .involved-link {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 6px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.2;
            font-weight: 400;
            color: white;
          }

          .section-cta {
            margin-top: 26px;
            text-align: center;
          }

          @media (max-width: 900px) {
            .home-shell {
              padding: 0 16px;
            }

            .hero-section {
              min-height: 520px;
            }

            .hero-content {
              min-height: 520px;
              padding-top: 40px;
              padding-bottom: 40px;
            }

            .hero-copy {
              max-width: 430px;
            }

            .hero-copy h1 {
              font-size: 40px;
              line-height: 1.05;
            }

            .hero-copy p {
              font-size: 16px;
            }

            .equal-grid {
              grid-template-columns: 1fr;
            }

            .why-card,
            .program-card,
            .story-card,
            .involved-card {
              height: auto;
              min-height: 220px;
            }

            .home-title {
              font-size: 28px;
              line-height: 1.1;
            }
          }
        `}
      </style>

      <section className="hero-section">
        <div className="hero-bg">
          <img src={heroImg} alt="Students learning technology" />
          <div className="hero-overlay" />
        </div>

        <div className="home-shell hero-content">
          <div className="hero-copy">
            <h1>Hands-On Technology Programs for Kids &amp; Teens</h1>
            <p>
              Learn coding, design, and real-world tech skills in a fun and supportive environment.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate("/programs")}>
                View Programs
              </button>

              <button className="btn-light" onClick={() => navigate("/get-involved")}>
                Get Involved
              </button>

              <p className="hero-note">Trusted by 3,000+ students and families.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="home-shell">
          <h2 className="home-title">Why Families Choose Club Ability</h2>
          <div className="home-inner group-wrap why-wrap">
            <div className="equal-grid">
              {whyCards.map((card) => (
                <div key={card.title} className="why-card">
                  <img className="why-card-bg" src={card.bg} alt={card.title} />
                  <div className="why-card-body">
                    <div>
                      <div className="why-top">
                        <div className="why-icon-box">{card.icon}</div>
                        <h3 className="why-heading">{card.title}</h3>
                      </div>
                      <p className="why-text">{card.text}</p>
                    </div>
                    <p className="why-stat">{card.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="home-shell">
          <h2 className="home-title">Our Programs</h2>
          <div className="home-inner group-wrap program-wrap">
            <div className="equal-grid">
              {programCards.map((program) => (
                <button
                  key={program.title}
                  className="program-card"
                  onClick={() => navigate("/program-detail")}
                >
                  <img className="program-img" src={program.img} alt={program.title} />
                  <div className="program-overlay" />
                  <div className="program-body">
                    <h3 className="program-title">{program.title}</h3>
                    <div>
                      <p className="program-text">{program.text}</p>
                      <div className="program-link">
                        <span>Learn More</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="section-cta">
            <button className="btn-primary" onClick={() => navigate("/programs")}>
              View All Programs
            </button>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="home-shell">
          <h2 className="home-title">Student Success Stories</h2>
          <div className="home-inner group-wrap stories-wrap">
            <div className="equal-grid">
              {storyCards.map((story) => (
                <div key={story.name} className="story-card" style={{ background: story.bg }}>
                  <div>
                    <div className="story-top">
                      <img className="story-avatar" src={story.avatar} alt={story.name} />
                      <h3 className="story-name">{story.name}</h3>
                    </div>
                    <p className="story-text">{story.text}</p>
                  </div>

                  <div>
                    <div className="story-stars">★★★★★</div>
                    <button className="story-link" onClick={() => navigate("/stories")}>
                      <span>Read Full Story</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-cta">
            <button className="btn-light" onClick={() => navigate("/stories")}>
              View More Stories
            </button>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ paddingBottom: "72px" }}>
        <div className="home-shell">
          <h2 className="home-title" style={{ color: "#111111" }}>
            Get Involved
          </h2>

          <div className="home-inner group-wrap involved-wrap">
            <div className="equal-grid">
              {getInvolvedCards.map((card) => (
                <button
                  key={card.title}
                  className="involved-card"
                  style={{ background: card.bg }}
                  onClick={card.onClick}
                >
                  <div>
                    <div style={{ marginBottom: "18px", width: "32px", height: "32px" }}>
                      {card.icon}
                    </div>
                    <h3 className="involved-title">{card.title}</h3>
                    <p className="involved-text">{card.text}</p>
                  </div>

                  <div className="involved-link">
                    <span>{card.cta}</span>
                    <ArrowRight size={14} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="section-cta">
            <button className="btn-light" onClick={() => navigate("/get-involved")}>
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}