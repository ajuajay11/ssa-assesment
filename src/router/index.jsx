import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App.jsx";

const LandingLayout = lazy(() => import("../layouts/LandingView.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const ApplicationForm = lazy(() => import("../pages/ApplicationForm.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <LandingLayout />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "apply",
            element: (
              <Suspense fallback={<Loading />}>
                <ApplicationForm />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
