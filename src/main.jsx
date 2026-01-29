import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router/index.jsx";

import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n.js";
import i18next from "i18next";

const root = document.getElementById("root");

if (localStorage.getItem("persist:root")) {
  const lang = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).settings,
  ).language;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  const newLang = lang === "en" ? "en" : "ar";
  i18next.changeLanguage(newLang);
}

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
