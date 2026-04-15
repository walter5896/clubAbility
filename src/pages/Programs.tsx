import { useMemo, useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import programImg from "../assets/clubability/programs/Img.svg";

type SortOption = "name-asc" | "name-desc";

type CategoryValue =
  | "all"
  | "computing"
  | "special-event"
  | "artificial-intelligence"
  | "design"
  | "marketing"
  | "3d-design"
  | "coding"
  | "creative-tech"
  | "stem";

type AgeValue = "all" | "ages-9" | "ages-10" | "ages-11" | "ages-12";

type ProgramCard = {
  id: number;
  categoryValue: Exclude<CategoryValue, "all">;
  ageValue: Exclude<AgeValue, "all"> | "all-ages";
  category: string;
  ageGroup: string;
  name: string;
  description: string;
  startDate: string;
};

export default function Programs() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const copy = {
    en: {
      bannerTitle: "Programs",
      searchPlaceholder: "Search",
      searchAria: "Search programs",
      filterCategoryAria: "Filter by category",
      filterAgeAria: "Filter by age",
      sortAria: "Sort programs",
      allCategories: "All Categories",
      allAges: "All Ages",
      sortAZ: "Sort: By Name A-Z",
      sortZA: "Sort: By Name Z-A",
      noResults: "No programs match your search.",
      learnMore: "Learn More",
      ctaTitle: "Didn’t find what you were looking for?",
      ctaCopy: "Fill out this class interest form and we’ll follow up with the next steps.",
      ctaButton: "Class Interest Form",
      categories: {
        computing: "Computing",
        specialEvent: "Special Event",
        artificialIntelligence: "Artificial Intelligence",
        design: "Design",
        marketing: "Marketing",
        threeDDesign: "3D Design",
        coding: "Coding",
        creativeTech: "Creative Tech",
        stem: "STEM",
      },
      ages: {
        allAges: "All Ages",
        ages9: "Ages 9+",
        ages10: "Ages 10+",
        ages11: "Ages 11+",
        ages12: "Ages 12+",
      },
      programs: [
        {
          categoryValue: "computing" as const,
          ageValue: "ages-9" as const,
          category: "Computing",
          ageGroup: "Ages 9+",
          name: "Computing",
          description:
            "Build foundational computer skills in a hands-on class for students ages 9 and up. Learn in a supportive environment while strengthening creativity, problem-solving, and confidence with technology.",
          startDate: "Starts Apr. 4",
        },
        {
          categoryValue: "special-event" as const,
          ageValue: "all-ages" as const,
          category: "Special Event",
          ageGroup: "All Ages",
          name: "Adobe Experience",
          description:
            "Join a free Adobe experience event with professionals and explore generative AI, creative tools, and real-world technology careers. Great for students and families interested in digital creativity.",
          startDate: "Starts Apr. 29",
        },
        {
          categoryValue: "artificial-intelligence" as const,
          ageValue: "ages-12" as const,
          category: "Artificial Intelligence",
          ageGroup: "Ages 12+",
          name: "AI Innovation Lab",
          description:
            "Discover how artificial intelligence works through guided activities and interactive projects. Students explore prompt writing, creative problem-solving, and practical AI tools in a beginner-friendly setting.",
          startDate: "Starts May 3",
        },
        {
          categoryValue: "design" as const,
          ageValue: "ages-10" as const,
          category: "Design",
          ageGroup: "Ages 10+",
          name: "Canva Design Basics",
          description:
            "Learn the fundamentals of digital design using Canva to create flyers, social graphics, and presentations. This course helps students build confidence with layout, color, and visual communication.",
          startDate: "Starts Apr. 12",
        },
        {
          categoryValue: "marketing" as const,
          ageValue: "ages-12" as const,
          category: "Marketing",
          ageGroup: "Ages 12+",
          name: "Marketing Essentials",
          description:
            "Explore branding, promotion, and digital communication through fun, real-world examples. Students learn how businesses and creators use design, messaging, and strategy to connect with audiences.",
          startDate: "Starts Apr. 19",
        },
        {
          categoryValue: "3d-design" as const,
          ageValue: "ages-11" as const,
          category: "3D Design",
          ageGroup: "Ages 11+",
          name: "3D Design Studio",
          description:
            "Create imaginative 3D projects while learning the basics of modeling, spatial thinking, and digital design tools. Perfect for students who enjoy creativity, technology, and building things from scratch.",
          startDate: "Starts May 10",
        },
        {
          categoryValue: "coding" as const,
          ageValue: "ages-10" as const,
          category: "Coding",
          ageGroup: "Ages 10+",
          name: "Intro to Coding",
          description:
            "Get started with coding concepts in a fun and approachable way through beginner-friendly activities and projects. Students practice logic, sequencing, and problem-solving while building real confidence.",
          startDate: "Starts Apr. 26",
        },
        {
          categoryValue: "creative-tech" as const,
          ageValue: "ages-9" as const,
          category: "Creative Tech",
          ageGroup: "Ages 9+",
          name: "Digital Creativity",
          description:
            "Combine technology and imagination through projects that introduce students to creative software, digital storytelling, and design thinking. A great entry point for learners who love making and exploring.",
          startDate: "Starts May 17",
        },
        {
          categoryValue: "stem" as const,
          ageValue: "all-ages" as const,
          category: "STEM",
          ageGroup: "All Ages",
          name: "Future Tech Exploration",
          description:
            "Explore exciting pathways in STEM through hands-on experiences that introduce students to emerging tools and ideas. This class encourages curiosity, experimentation, and confidence in learning technology.",
          startDate: "Starts Soon",
        },
      ],
    },
    es: {
      bannerTitle: "Programas",
      searchPlaceholder: "Buscar",
      searchAria: "Buscar programas",
      filterCategoryAria: "Filtrar por categoría",
      filterAgeAria: "Filtrar por edad",
      sortAria: "Ordenar programas",
      allCategories: "Todas las Categorías",
      allAges: "Todas las Edades",
      sortAZ: "Ordenar: Nombre A-Z",
      sortZA: "Ordenar: Nombre Z-A",
      noResults: "Ningún programa coincide con tu búsqueda.",
      learnMore: "Más Información",
      ctaTitle: "¿No encontraste lo que buscabas?",
      ctaCopy: "Completa este formulario de interés de clase y te daremos seguimiento con los próximos pasos.",
      ctaButton: "Formulario de Interés de Clase",
      categories: {
        computing: "Computación",
        specialEvent: "Evento Especial",
        artificialIntelligence: "Inteligencia Artificial",
        design: "Diseño",
        marketing: "Marketing",
        threeDDesign: "Diseño 3D",
        coding: "Programación",
        creativeTech: "Tecnología Creativa",
        stem: "STEM",
      },
      ages: {
        allAges: "Todas las Edades",
        ages9: "Edades 9+",
        ages10: "Edades 10+",
        ages11: "Edades 11+",
        ages12: "Edades 12+",
      },
      programs: [
        {
          categoryValue: "computing" as const,
          ageValue: "ages-9" as const,
          category: "Computación",
          ageGroup: "Edades 9+",
          name: "Computación",
          description:
            "Desarrolla habilidades fundamentales de computación en una clase práctica para estudiantes de 9 años en adelante. Aprende en un entorno de apoyo mientras fortaleces la creatividad, la resolución de problemas y la confianza con la tecnología.",
          startDate: "Comienza el 4 de abril",
        },
        {
          categoryValue: "special-event" as const,
          ageValue: "all-ages" as const,
          category: "Evento Especial",
          ageGroup: "Todas las Edades",
          name: "Experiencia Adobe",
          description:
            "Únete a un evento gratuito de Adobe con profesionales y explora IA generativa, herramientas creativas y carreras tecnológicas del mundo real. Ideal para estudiantes y familias interesadas en la creatividad digital.",
          startDate: "Comienza el 29 de abril",
        },
        {
          categoryValue: "artificial-intelligence" as const,
          ageValue: "ages-12" as const,
          category: "Inteligencia Artificial",
          ageGroup: "Edades 12+",
          name: "Laboratorio de Innovación en IA",
          description:
            "Descubre cómo funciona la inteligencia artificial a través de actividades guiadas y proyectos interactivos. Los estudiantes exploran escritura de prompts, resolución creativa de problemas y herramientas prácticas de IA en un entorno accesible para principiantes.",
          startDate: "Comienza el 3 de mayo",
        },
        {
          categoryValue: "design" as const,
          ageValue: "ages-10" as const,
          category: "Diseño",
          ageGroup: "Edades 10+",
          name: "Conceptos Básicos de Canva",
          description:
            "Aprende los fundamentos del diseño digital usando Canva para crear volantes, gráficos para redes sociales y presentaciones. Este curso ayuda a los estudiantes a ganar confianza con composición, color y comunicación visual.",
          startDate: "Comienza el 12 de abril",
        },
        {
          categoryValue: "marketing" as const,
          ageValue: "ages-12" as const,
          category: "Marketing",
          ageGroup: "Edades 12+",
          name: "Fundamentos de Marketing",
          description:
            "Explora branding, promoción y comunicación digital mediante ejemplos divertidos y del mundo real. Los estudiantes aprenden cómo negocios y creadores usan diseño, mensajes y estrategia para conectar con audiencias.",
          startDate: "Comienza el 19 de abril",
        },
        {
          categoryValue: "3d-design" as const,
          ageValue: "ages-11" as const,
          category: "Diseño 3D",
          ageGroup: "Edades 11+",
          name: "Estudio de Diseño 3D",
          description:
            "Crea proyectos imaginativos en 3D mientras aprendes fundamentos de modelado, pensamiento espacial y herramientas de diseño digital. Perfecto para estudiantes que disfrutan la creatividad, la tecnología y construir desde cero.",
          startDate: "Comienza el 10 de mayo",
        },
        {
          categoryValue: "coding" as const,
          ageValue: "ages-10" as const,
          category: "Programación",
          ageGroup: "Edades 10+",
          name: "Introducción a la Programación",
          description:
            "Comienza con conceptos de programación de una forma divertida y accesible mediante actividades y proyectos para principiantes. Los estudiantes practican lógica, secuenciación y resolución de problemas mientras desarrollan confianza real.",
          startDate: "Comienza el 26 de abril",
        },
        {
          categoryValue: "creative-tech" as const,
          ageValue: "ages-9" as const,
          category: "Tecnología Creativa",
          ageGroup: "Edades 9+",
          name: "Creatividad Digital",
          description:
            "Combina tecnología e imaginación mediante proyectos que introducen a los estudiantes al software creativo, la narración digital y el pensamiento de diseño. Un excelente punto de entrada para quienes aman crear y explorar.",
          startDate: "Comienza el 17 de mayo",
        },
        {
          categoryValue: "stem" as const,
          ageValue: "all-ages" as const,
          category: "STEM",
          ageGroup: "Todas las Edades",
          name: "Exploración de Tecnología del Futuro",
          description:
            "Explora caminos emocionantes en STEM mediante experiencias prácticas que introducen a los estudiantes a herramientas e ideas emergentes. Esta clase fomenta la curiosidad, la experimentación y la confianza para aprender tecnología.",
          startDate: "Comienza pronto",
        },
      ],
    },
  } as const;

  const t = copy[language];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryValue>("all");
  const [age, setAge] = useState<AgeValue>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");

  useEffect(() => {
    setCategory("all");
    setAge("all");
  }, [language]);

  const categoryOptions = [
    { value: "all" as const, label: t.allCategories },
    { value: "computing" as const, label: t.categories.computing },
    { value: "special-event" as const, label: t.categories.specialEvent },
    { value: "artificial-intelligence" as const, label: t.categories.artificialIntelligence },
    { value: "design" as const, label: t.categories.design },
    { value: "marketing" as const, label: t.categories.marketing },
    { value: "3d-design" as const, label: t.categories.threeDDesign },
    { value: "coding" as const, label: t.categories.coding },
    { value: "creative-tech" as const, label: t.categories.creativeTech },
    { value: "stem" as const, label: t.categories.stem },
  ];

  const ageOptions = [
    { value: "all" as const, label: t.allAges },
    { value: "ages-9" as const, label: t.ages.ages9 },
    { value: "ages-10" as const, label: t.ages.ages10 },
    { value: "ages-11" as const, label: t.ages.ages11 },
    { value: "ages-12" as const, label: t.ages.ages12 },
  ];

  const programs: ProgramCard[] = t.programs.map((program, index) => ({
    id: index + 1,
    ...program,
  }));

  const visiblePrograms = useMemo(() => {
    let filtered = [...programs];

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (program) =>
          program.name.toLowerCase().includes(q) ||
          program.description.toLowerCase().includes(q) ||
          program.category.toLowerCase().includes(q) ||
          program.ageGroup.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((program) => program.categoryValue === category);
    }

    if (age !== "all") {
      filtered = filtered.filter((program) => program.ageValue === age);
    }

    filtered.sort((a, b) => {
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return a.name.localeCompare(b.name);
    });

    return filtered;
  }, [programs, search, category, age, sort]);

  return (
    <div className="programs-page">
      <style>
        {`
          .programs-page {
            background: #f2f8fa;
            min-height: 100vh;
            font-family: Roboto, sans-serif;
          }

          .programs-shell {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          .programs-inner {
            max-width: 1180px;
            margin: 0 auto;
          }

          .programs-banner {
            background: #0c3a4a;
            padding: 22px 0 24px;
          }

          .programs-banner-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .programs-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 40px;
            line-height: 40px;
            font-weight: 600;
            white-space: nowrap;
          }

          .programs-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 4px;
          }

          .programs-content {
            padding: 28px 0 64px;
          }

          .search-wrap {
            position: relative;
            margin-bottom: 18px;
          }

          .search-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #111111;
            opacity: 0.85;
            pointer-events: none;
          }

          .search-input {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1.5px solid #c7d5dc;
            background: #ffffff;
            padding: 0 16px 0 44px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            color: #111111;
            box-sizing: border-box;
            outline: none;
          }

          .search-input:focus,
          .filter-select:focus {
            border-color: #7ea7b6;
          }

          .filters-row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 22px;
          }

          .filter-wrap {
            position: relative;
          }

          .filter-select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            height: 48px;
            min-width: 146px;
            border-radius: 8px;
            border: 1.5px solid #c7d5dc;
            background: #ffffff;
            padding: 0 40px 0 14px;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1;
            font-weight: 400;
            color: #1d3340;
            outline: none;
            cursor: pointer;
          }

          .filter-select.sort-select {
            min-width: 180px;
          }

          .filter-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #2f4f5d;
          }

          .divider {
            height: 1px;
            background: #b7c7cf;
            margin-bottom: 24px;
          }

          .program-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px 22px;
            margin-bottom: 42px;
          }

          .program-card {
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.14);
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .program-card-image {
            width: 100%;
            height: 128px;
            object-fit: cover;
            display: block;
          }

          .program-card-body {
            padding: 14px 16px 14px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .tag-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 10px;
          }

          .tag {
            display: inline-flex;
            align-items: center;
            height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            font-family: Roboto, sans-serif;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
          }

          .tag-pink {
            background: #f9dfe8;
            color: #c14c74;
          }

          .tag-blue {
            background: #d7edf4;
            color: #4d7d8c;
          }

          .program-card-title {
            margin: 0 0 12px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
            text-align: left;
          }

          .program-card-copy {
            margin: 0 0 14px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .program-card-footer {
            margin-top: auto;
          }

          .program-card-divider {
            height: 1.5px;
            background: rgba(6, 36, 48, 0.45);
            margin-bottom: 10px;
          }

          .program-start {
            margin: 0 0 10px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 400;
            color: #4a7a8a;
            text-align: left;
          }

          .learn-more-btn {
            width: 100%;
            height: 42px;
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.14);
          }

          .learn-more-btn:hover,
          .interest-form-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.16);
            filter: brightness(0.98);
          }

          .interest-cta {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            padding: 28px 24px 30px;
            text-align: center;
            max-width: 760px;
            margin: 0 auto;
          }

          .interest-cta-title {
            margin: 0 0 10px 0;
            font-family: Poppins, sans-serif;
            font-size: 30px;
            line-height: 30px;
            font-weight: 600;
            color: #062430;
          }

          .interest-cta-copy {
            margin: 0 0 22px 0;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
            color: #4a7a8a;
          }

          .interest-form-btn {
            border: none;
            border-radius: 8px;
            background: #cb356e;
            color: white;
            min-width: 270px;
            height: 52px;
            padding: 0 28px;
            font-family: Poppins, sans-serif;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              filter 0.18s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.14);
          }

          .empty-state {
            padding: 48px 16px;
            text-align: center;
            color: #4a7a8a;
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 400;
          }

          @media (max-width: 1100px) {
            .program-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 900px) {
            .programs-shell {
              padding: 0 16px;
            }

            .programs-banner h1 {
              font-size: 32px;
              line-height: 36px;
              white-space: normal;
            }

            .filters-row {
              gap: 12px;
            }

            .program-grid {
              grid-template-columns: 1fr;
            }

            .program-card-title {
              font-size: 26px;
              line-height: 30px;
            }

            .interest-cta {
              padding: 24px 18px 26px;
            }

            .interest-cta-title {
              font-size: 26px;
              line-height: 30px;
            }

            .interest-cta-copy {
              font-size: 16px;
            }

            .interest-form-btn {
              width: 100%;
              min-width: 0;
              font-size: 18px;
            }

            .learn-more-btn {
              font-size: 18px;
            }
          }
        `}
      </style>

      <section className="programs-banner">
        <div className="programs-shell">
          <div className="programs-inner">
            <div className="programs-banner-row">
              <h1>{t.bannerTitle}</h1>
              <div className="programs-banner-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="programs-content">
        <div className="programs-shell">
          <div className="programs-inner">
            <div className="search-wrap">
              <Search size={20} className="search-icon" />
              <input
                className="search-input"
                type="text"
                placeholder={t.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label={t.searchAria}
              />
            </div>

            <div className="filters-row">
              <div className="filter-wrap">
                <select
                  className="filter-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CategoryValue)}
                  aria-label={t.filterCategoryAria}
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>

              <div className="filter-wrap">
                <select
                  className="filter-select"
                  value={age}
                  onChange={(e) => setAge(e.target.value as AgeValue)}
                  aria-label={t.filterAgeAria}
                >
                  {ageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>

              <div className="filter-wrap">
                <select
                  className="filter-select sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  aria-label={t.sortAria}
                >
                  <option value="name-asc">{t.sortAZ}</option>
                  <option value="name-desc">{t.sortZA}</option>
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>
            </div>

            <div className="divider" />

            {visiblePrograms.length === 0 ? (
              <div className="empty-state">{t.noResults}</div>
            ) : (
              <>
                <div className="program-grid">
                  {visiblePrograms.map((program) => (
                    <div key={program.id} className="program-card">
                      <img
                        className="program-card-image"
                        src={programImg}
                        alt={program.name}
                      />

                      <div className="program-card-body">
                        <div className="tag-row">
                          <span className="tag tag-pink">{program.category}</span>
                          <span className="tag tag-blue">{program.ageGroup}</span>
                        </div>

                        <h3 className="program-card-title">{program.name}</h3>

                        <p className="program-card-copy">{program.description}</p>

                        <div className="program-card-footer">
                          <div className="program-card-divider" />

                          <p className="program-start">{program.startDate}</p>

                          <button
                            className="learn-more-btn"
                            onClick={() => navigate("/program-detail")}
                            type="button"
                          >
                            {t.learnMore}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="interest-cta">
                  <h2 className="interest-cta-title">{t.ctaTitle}</h2>
                  <p className="interest-cta-copy">{t.ctaCopy}</p>
                  <button
                    className="interest-form-btn"
                    type="button"
                    onClick={() => navigate("/get-started")}
                  >
                    {t.ctaButton}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}