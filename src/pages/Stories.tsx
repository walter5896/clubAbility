import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import anabellaImg from "../assets/clubability/stories/anabella.svg";
import jancarlosImg from "../assets/clubability/stories/juancarlos.svg";
import madelayneImg from "../assets/clubability/stories/madelayne.svg";
import ricardoImg from "../assets/clubability/stories/ricardo.svg";

export default function Stories() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Student Success Stories",
      introTitle: "Sign up for Courses today!",
      introText: "Be one of our future success stories",
      enrollNow: "Enroll Now",
      stories: [
        {
          name: "Anabella",
          image: anabellaImg,
          band: "blue" as const,
          layout: "image-left" as const,
          text:
            "Anabella won the 2025 Utah Science Fair thanks to her talent and commitment to the environment. She presented two innovative projects made entirely from recycled materials: a fire truck that detects and puts out fires automatically, and a self-driving car that collects trash. Her creativity and problem-solving mindset stood out among the participants. Without a doubt, she is a rising star in science and sustainability.",
        },
        {
          name: "Madelayne",
          image: madelayneImg,
          band: "pink" as const,
          layout: "image-right" as const,
          text:
            "Madelayne is a 12-year-old Tech Creator, bilingual, and full of initiative when it comes to proposing ideas. She stands out for actively participating in classes.\n\nShe has been a student at Club Ability since 2022, where she discovered her passion for programming, with Minecraft Education being her favorite subject. Additionally, she has served as a volunteer in various Club Ability activities.",
        },
        {
          name: "Jancarlos",
          image: jancarlosImg,
          band: "blue" as const,
          layout: "image-left" as const,
          text:
            "Jancarlos is a 14-year-old tech creator born in Utah, the son of Hispanic parents, and bilingual. Despite his young age, he has shown the courage to seize the opportunities that have come his way. Committed and passionate about science and technology, he has been a student at Club Ability since 2020, where he discovered his love for 3D Design. In recognition of his dedication, we awarded his talent with a monitor, a laptop, and a tablet.",
        },
        {
          name: "Ricardo",
          image: ricardoImg,
          band: "white" as const,
          layout: "image-right" as const,
          text:
            "Ricardo's vision deteriorated due to his work, leading to the loss of one eye and eventually the other. The darkness surrounding him seemed to strip away not just his sight but also his hope.\n\nThanks to Club Ability, Ricardo found a new opportunity to start again. Here, he learned to use technology, regained his independence, and, motivated by his achievements, decided to keep growing: he enrolled in a Braille course and began English classes.",
        },
      ],
    },
    es: {
      bannerTitle: "Historias de Éxito Estudiantil",
      introTitle: "¡Inscríbete en cursos hoy!",
      introText: "Sé una de nuestras futuras historias de éxito",
      enrollNow: "Inscríbete Ahora",
      stories: [
        {
          name: "Anabella",
          image: anabellaImg,
          band: "blue" as const,
          layout: "image-left" as const,
          text:
            "Anabella ganó la Feria de Ciencias de Utah 2025 gracias a su talento y compromiso con el medio ambiente. Presentó dos proyectos innovadores hechos completamente con materiales reciclados: un camión de bomberos que detecta y apaga incendios automáticamente, y un automóvil autónomo que recoge basura. Su creatividad y mentalidad para resolver problemas destacaron entre los participantes. Sin duda, es una estrella en ascenso en la ciencia y la sostenibilidad.",
        },
        {
          name: "Madelayne",
          image: madelayneImg,
          band: "pink" as const,
          layout: "image-right" as const,
          text:
            "Madelayne es una Tech Creator de 12 años, bilingüe y llena de iniciativa al momento de proponer ideas. Destaca por participar activamente en clases.\n\nHa sido estudiante de Club Ability desde 2022, donde descubrió su pasión por la programación, siendo Minecraft Education su materia favorita. Además, ha servido como voluntaria en diversas actividades de Club Ability.",
        },
        {
          name: "Jancarlos",
          image: jancarlosImg,
          band: "blue" as const,
          layout: "image-left" as const,
          text:
            "Jancarlos es un creador tecnológico de 14 años nacido en Utah, hijo de padres hispanos y bilingüe. A pesar de su corta edad, ha demostrado valentía para aprovechar las oportunidades que se le han presentado. Comprometido y apasionado por la ciencia y la tecnología, ha sido estudiante de Club Ability desde 2020, donde descubrió su amor por el Diseño 3D. En reconocimiento a su dedicación, premiamos su talento con un monitor, una laptop y una tableta.",
        },
        {
          name: "Ricardo",
          image: ricardoImg,
          band: "white" as const,
          layout: "image-right" as const,
          text:
            "La visión de Ricardo se deterioró debido a su trabajo, lo que provocó la pérdida de un ojo y, finalmente, del otro. La oscuridad que lo rodeaba parecía arrebatarle no solo la vista, sino también la esperanza.\n\nGracias a Club Ability, Ricardo encontró una nueva oportunidad para comenzar de nuevo. Aquí aprendió a usar la tecnología, recuperó su independencia y, motivado por sus logros, decidió seguir creciendo: se inscribió en un curso de Braille y comenzó clases de inglés.",
        },
      ],
    },
  } as const;

  const t = copy[language];
  const stories = t.stories;

  return (
    <div className="stories-page">
      <style>
        {`
          .stories-page {
            background: #f2f8fa;
            font-family: Roboto, sans-serif;
          }

          .stories-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .stories-inner {
            max-width: 1240px;
            margin: 0 auto;
          }

          .stories-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .stories-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .stories-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .stories-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .stories-content {
            padding: 48px 0 70px;
          }

          .stories-intro {
            margin-bottom: 54px;
          }

          .stories-intro h2 {
            margin: 0 0 8px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .stories-intro p {
            margin: 0 0 22px 0;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1.2;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .enroll-btn {
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

          .enroll-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,0.18);
            filter: brightness(0.98);
          }

          .stories-stack {
            display: flex;
            flex-direction: column;
            gap: 22px;
          }

          .story-band {
            border-radius: 8px;
            padding: 22px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.12);
          }

          .story-band.blue {
            background: #cfe4ed;
          }

          .story-band.pink {
            background: #f3dfe8;
          }

          .story-band.white {
            background: #ffffff;
          }

          .story-grid {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 16px;
            align-items: stretch;
          }

          .story-grid.image-right {
            grid-template-columns: 1fr 300px;
          }

          .story-side {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .story-image-wrap,
          .story-name-wrap,
          .story-copy-wrap {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.10);
            background: #ffffff;
          }

          .story-image-wrap {
            height: 170px;
          }

          .story-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .story-name-wrap {
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
          }

          .story-name-wrap.blue-name {
            background: #b8d7e3;
          }

          .story-name {
            margin: 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: center;
          }

          .story-copy-wrap {
            min-height: 234px;
            padding: 24px 26px;
            box-sizing: border-box;
            border: 2px solid #5f95a6;
            background: #ffffff;
          }

          .story-copy-wrap.soft-border {
            border: 1px solid rgba(6, 36, 48, 0.12);
          }

          .story-copy-text {
            margin: 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #111111;
            text-align: left;
            white-space: pre-line;
          }

          @media (max-width: 900px) {
            .stories-shell {
              padding: 0 16px;
            }

            .stories-banner h1 {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .stories-intro h2 {
              font-size: 26px;
              line-height: 30px;
            }

            .stories-intro p {
              font-size: 18px;
            }

            .enroll-btn {
              font-size: 18px;
            }

            .story-grid,
            .story-grid.image-right {
              grid-template-columns: 1fr;
            }

            .story-image-wrap {
              height: 220px;
            }

            .story-copy-wrap {
              min-height: unset;
            }

            .story-name {
              font-size: 26px;
              line-height: 30px;
            }
          }
        `}
      </style>

      <section className="stories-banner">
        <div className="stories-shell">
          <div className="stories-inner">
            <div className="stories-banner-row">
              <h1>{t.bannerTitle}</h1>
              <div className="stories-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="stories-content">
        <div className="stories-shell">
          <div className="stories-inner">
            <div className="stories-intro">
              <h2>{t.introTitle}</h2>
              <p>{t.introText}</p>
              <button
                className="enroll-btn"
                type="button"
                onClick={() => navigate("/programs")}
              >
                {t.enrollNow}
              </button>
            </div>

            <div className="stories-stack">
              {stories.map((story) => {
                const bandClass = `story-band ${story.band}`;
                const gridClass =
                  story.layout === "image-right"
                    ? "story-grid image-right"
                    : "story-grid";

                const nameWrapClass =
                  story.name === "Madelayne" || story.name === "Ricardo"
                    ? "story-name-wrap blue-name"
                    : "story-name-wrap";

                const copyWrapClass =
                  story.name === "Anabella" || story.name === "Jancarlos"
                    ? "story-copy-wrap soft-border"
                    : "story-copy-wrap";

                return (
                  <div key={story.name} className={bandClass}>
                    <div className={gridClass}>
                      {story.layout === "image-left" ? (
                        <>
                          <div className="story-side">
                            <div className="story-image-wrap">
                              <img
                                className="story-image"
                                src={story.image}
                                alt={story.name}
                              />
                            </div>
                            <div className={nameWrapClass}>
                              <h3 className="story-name">{story.name}</h3>
                            </div>
                          </div>

                          <div className={copyWrapClass}>
                            <p className="story-copy-text">{story.text}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={copyWrapClass}>
                            <p className="story-copy-text">{story.text}</p>
                          </div>

                          <div className="story-side">
                            <div className="story-image-wrap">
                              <img
                                className="story-image"
                                src={story.image}
                                alt={story.name}
                              />
                            </div>
                            <div className={nameWrapClass}>
                              <h3 className="story-name">{story.name}</h3>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}