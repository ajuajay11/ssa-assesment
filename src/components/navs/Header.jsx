import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store/settings/settingSlice";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import "./Header.css";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

export default function Header() {
  const { t: $t, i18n } = useTranslation();
  const getLang = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLanguageSwitch() {
    const newLang = getLang === "en" ? "ar" : "en";
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  }

  const isActive = (path) => location.pathname === path;

  const handleDrawerLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <div className="logo-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="logo-text">SSA</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            {$t("nav.home")}
          </Link>
          <Link
            to="/apply"
            className={`nav-link ${isActive("/apply") ? "active" : ""}`}
          >
            {$t("nav.apply")}
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            {$t("nav.about")}
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="lang-switch"
            onClick={handleLanguageSwitch}
            aria-label="Switch Language"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{getLang === "en" ? "العربية" : "English"}</span>
          </button>

          <button
            onClick={toggleDrawer(true)}
            className="mobile-menu-btn"
            aria-label="Open Mobile Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Drawer
        anchor={getLang === "ar" ? "right" : "left"}
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
          role="presentation"
        >
          {/* Header with logo and close button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 3,
              pb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <div className="logo-icon" style={{ color: "white" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>SSA</span>
            </Box>

            <IconButton
              onClick={toggleDrawer(false)}
              aria-label="Close menu"
              sx={{ color: "white" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

          {/* Navigation links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              p: 2,
              flex: 1,
            }}
          >
            <Link
              to="/"
              onClick={handleDrawerLinkClick}
              style={{
                padding: "14px 16px",
                textDecoration: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "16px",
                fontWeight: isActive("/") ? "600" : "500",
                backgroundColor: isActive("/")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                transition: "all 0.2s ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                if (!isActive("/")) {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive("/")) {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {$t("nav.home")}
            </Link>
            <Link
              to="/apply"
              onClick={handleDrawerLinkClick}
              style={{
                padding: "14px 16px",
                textDecoration: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "16px",
                fontWeight: isActive("/apply") ? "600" : "500",
                backgroundColor: isActive("/apply")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                transition: "all 0.2s ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                if (!isActive("/apply")) {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive("/apply")) {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {$t("nav.apply")}
            </Link>
            <Link
              to="/about"
              onClick={handleDrawerLinkClick}
              style={{
                padding: "14px 16px",
                textDecoration: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "16px",
                fontWeight: isActive("/about") ? "600" : "500",
                backgroundColor: isActive("/about")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                transition: "all 0.2s ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                if (!isActive("/about")) {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive("/about")) {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {$t("nav.about")}
            </Link>
          </Box>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

          {/* Language switcher in drawer */}
          <Box sx={{ p: 3 }}>
            <button
              onClick={() => {
                handleLanguageSwitch();
                setOpen(false);
              }}
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {getLang === "en" ? "العربية" : "English"}
            </button>
          </Box>
        </Box>
      </Drawer>
    </header>
  );
}