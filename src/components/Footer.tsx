import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="footer-brand">
              <LogoMark size={32} />
              Greg's HVAC
            </span>
            <p>
              Family-owned heating, cooling, and air quality service. Licensed,
              bonded, and insured. Serving Washtenaw County and nearby Michigan
              towns.
            </p>
            <p>
              Emergencies: <Link to="/contact">Call for service</Link>
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Greg</Link>
              </li>
              <li>
                <Link to="/contact">Request service</Link>
              </li>
              <li>
                <Link to="/login">Customer portal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul className="footer-links">
              <li>Mon–Fri · 7am–6pm</li>
              <li>Saturday · 8am–2pm</li>
              <li>Sunday · Emergencies only</li>
              <li>Emergencies · Same-day when we can</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Greg's HVAC. All rights reserved.</span>
          <span>License #HVAC-048291 · Static demo site</span>
        </div>
      </div>
    </footer>
  );
}
