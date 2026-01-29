import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";
import FeatureCard from "../components/common/FeatureCard";
import "./Home.css";

export default function Home() {
  const { t: $t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      gradient: "var(--gradient-primary)",
      titleKey: "home.features.wizard.title",
      descKey: "home.features.wizard.desc",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.663 17H4C2.89543 17 2 16.1046 2 15V4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V9.663M12 22L15.5355 18.4645M15.5355 18.4645L19.071 14.929C20.2426 13.7574 20.2426 11.8995 19.071 10.7279C17.8995 9.55635 16.0416 9.55635 14.87 10.7279L11.3345 14.2635M15.5355 18.4645L11.3345 14.2635M11.3345 14.2635L9 22L16.7365 19.6655"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      gradient: "var(--gradient-accent)",
      titleKey: "home.features.ai.title",
      descKey: "home.features.ai.desc",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H21M3 10H21M3 15H21M3 20H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5V20M17 5V20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      gradient: "var(--color-secondary)",
      titleKey: "home.features.bilingual.title",
      descKey: "home.features.bilingual.desc",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
            fill="white"
          />
        </svg>
      ),
      gradient: "var(--color-black)",
      titleKey: "home.features.save.title",
      descKey: "home.features.save.desc",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
      titleKey: "home.features.responsive.title",
      descKey: "home.features.responsive.desc",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      titleKey: "home.features.accessibility.title",
      descKey: "home.features.accessibility.desc",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {$t("home.hero.title")}
              <span className="text-gradient">
                {" "}
                {$t("home.hero.titleSpan")}
              </span>
            </h1>
            <p className="hero-description">{$t("home.hero.description")}</p>
            <div className="hero-actions">
              <Button onClick={() => navigate("/apply")}>
                {$t("home.hero.startBtn")}
              </Button>
              <Button
                variant="secondary"
                showIcon={false}
                onClick={() => navigate("/about")}
              >
                {$t("home.hero.learnMore")}
              </Button>
            </div>

            <div className="hero-stats">
              {[
                { number: "10K+", label: "home.stats.applications" },
                { number: "95%", label: "home.stats.successRate" },
                { number: "24/7", label: "home.stats.aiAssistance" },
              ].map(({ number, label }, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{$t(label)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <div
                className="card-icon"
                style={{ background: "var(--gradient-primary)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title">{$t("home.floating.approval")}</div>
                <div className="card-subtitle">
                  {$t("home.floating.approvalSub")}
                </div>
              </div>
            </div>

            <div className="floating-card card-2">
              <div
                className="card-icon"
                style={{ background: "var(--gradient-accent)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title">{$t("home.floating.ai")}</div>
                <div className="card-subtitle">{$t("home.floating.aiSub")}</div>
              </div>
            </div>

            <div className="floating-card card-3">
              <div
                className="card-icon"
                style={{ background: "var(--gradient-dark)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title">{$t("home.floating.secure")}</div>
                <div className="card-subtitle">
                  {$t("home.floating.secureSub")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{$t("home.features.title")}</h2>
            <p className="section-description">
              {$t("home.features.subtitle")}
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={$t(feature.titleKey)}
                description={$t(feature.descKey)}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
