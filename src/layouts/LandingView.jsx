import Header from "../components/navs/Header";
import Footer from "../components/navs/Footer";
import SkipLink from "../components/common/SkipLink";
import useLenis from "../hooks/useLenis";
import { Outlet } from "react-router";
export default function LandingView() {
  useLenis();
  return <>
    <SkipLink />
    <Header />
    <main id="main-content">
      <Outlet />
    </main>
    <Footer />

  </>;
}
