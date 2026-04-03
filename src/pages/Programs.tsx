import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import programImg from "../assets/clubability/programs/Img.svg";

type SortOption = "name-asc" | "name-desc";

type ProgramCard = {
  id: number;
  category: string;
  ageGroup: string;
  name: string;
  description: string;
  startDate: string;
};

export default function Programs() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [age, setAge] = useState("All Ages");
  const [sort, setSort] = useState<SortOption>("name-asc");

  const programs: ProgramCard[] = [
    {
      id: 1,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 2,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 3,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 4,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 5,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 6,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 7,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 8,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
    {
      id: 9,
      category: "Category Tag",
      ageGroup: "Age Group Tag",
      name: "Program Name",
      description:
        "Program information... Lorem ipsum dolor sit amet consectetur. Nascetur nulla senectus amet porttitor mauris orci lorem convallis convallis.",
      startDate: "Starts Apr. 7",
    },
  ];

  const visiblePrograms = useMemo(() => {
    let filtered = [...programs];

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (program) =>
          program.name.toLowerCase().includes(q) ||
          program.description.toLowerCase().includes(q) ||
          program.category.toLowerCase().includes(q) ||
          program.ageGroup.toLowerCase().includes(q),
      );
    }

    if (category !== "All Categories") {
      filtered = filtered.filter((program) => program.category === category);
    }

    if (age !== "All Ages") {
      filtered = filtered.filter((program) => program.ageGroup === age);
    }

    filtered.sort((a, b) => {
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return a.name.localeCompare(b.name);
    });

    return filtered;
  }, [search, category, age, sort]);

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
            padding: 34px 0 36px;
          }

          .programs-banner-row {
            display: flex;
            align-items: center;
            gap: 18px;
          }

          .programs-banner h1 {
            margin: 0;
            color: white;
            font-family: Poppins, sans-serif;
            font-size: 57px;
            line-height: 57px;
            font-weight: 700;
            white-space: nowrap;
          }

          .programs-banner-line {
            height: 4px;
            background: #e8206a;
            flex: 1;
            border-radius: 999px;
            margin-top: 10px;
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
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              filter 0.2s ease;
          }

          .program-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 22px rgba(0,0,0,0.16);
          }

          .program-card-image {
            width: 100%;
            height: 128px;
            object-fit: cover;
            display: block;
          }

          .program-card-body {
            padding: 14px 16px 14px;
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
            font-size: 35px;
            line-height: 35px;
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
            min-height: 86px;
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
            font-size: 35px;
            line-height: 35px;
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
              font-size: 42px;
              line-height: 1.05;
              white-space: normal;
            }

            .filters-row {
              gap: 12px;
            }

            .program-grid {
              grid-template-columns: 1fr;
            }

            .program-card-title {
              font-size: 28px;
              line-height: 1.1;
            }

            .program-card-copy {
              min-height: unset;
            }

            .interest-cta {
              padding: 24px 18px 26px;
            }

            .interest-cta-title {
              font-size: 28px;
              line-height: 1.1;
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
          <div className="programs-banner-row">
            <h1>Programs</h1>
            <div className="programs-banner-line" />
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
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search programs"
              />
            </div>

            <div className="filters-row">
              <div className="filter-wrap">
                <select
                  className="filter-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  aria-label="Filter by category"
                >
                  <option>All Categories</option>
                  <option>Category Tag</option>
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>

              <div className="filter-wrap">
                <select
                  className="filter-select"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  aria-label="Filter by age"
                >
                  <option>All Ages</option>
                  <option>Age Group Tag</option>
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>

              <div className="filter-wrap">
                <select
                  className="filter-select sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  aria-label="Sort programs"
                >
                  <option value="name-asc">Sort: By Name A-Z</option>
                  <option value="name-desc">Sort: By Name Z-A</option>
                </select>
                <ChevronDown size={18} className="filter-icon" />
              </div>
            </div>

            <div className="divider" />

            {visiblePrograms.length === 0 ? (
              <div className="empty-state">No programs match your search.</div>
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

                        <div className="program-card-divider" />

                        <p className="program-start">{program.startDate}</p>

                        <button
                          className="learn-more-btn"
                          onClick={() => navigate("/program-detail")}
                          type="button"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="interest-cta">
                  <h2 className="interest-cta-title">
                    Didn’t find what you were looking for?
                  </h2>
                  <p className="interest-cta-copy">
                    Fill out this class interest form and we’ll follow up with the next steps.
                  </p>
                  <button
                    className="interest-form-btn"
                    type="button"
                    onClick={() => navigate("/get-started")}
                  >
                    Class Interest Form
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