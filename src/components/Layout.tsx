import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      {/* Sticky tel: emergency number, above the fold on mobile */}
      <div className="emergency-bar">
        24/7 emergency service —{" "}
        <a href="tel:+15550124747">Call (555) 012-4747</a>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
