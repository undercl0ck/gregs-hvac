import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      {/* Sticky emergency strip, above the fold on mobile. No tel: digits
          until a real business number exists. */}
      <div className="emergency-bar">
        Emergency? <Link to="/contact">Call for service</Link> — answered same
        day when we can.
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
