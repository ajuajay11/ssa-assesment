import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";

export default function About() {
  const { t: $t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>{$t("about.title")}</h1>
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
        <Button onClick={() => navigate("/")}>
          {$t("about.toHome")}
        </Button>
      </div>
    </div>
  );
}
