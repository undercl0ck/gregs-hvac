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
              bonded, and insured. Serving the metro area since 1998.
            </p>
            <p>
              24/7 emergency line:{" "}
              <a href="tel:+15550124747">(555) 012-4747</a>
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
              <li>Sunday · Emergency only</li>
              <li>Emergency · 24/7</li>
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
