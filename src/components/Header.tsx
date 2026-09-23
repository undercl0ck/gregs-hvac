import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { getSession } from "../lib/auth";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onPortal =
    location.pathname === "/login" || location.pathname === "/account";
  const signedIn = getSession() !== null;

  const closeMenu = () => setMenuOpen(false);

  // CTA floor: while already on the portal (login/account), omit the
  // header "Login for customers" link entirely.
  const showLoginLink = !onPortal;

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand-link" onClick={closeMenu} aria-label="Greg's HVAC home">
          <Logo size={40} />
        </Link>

        <nav className="main-nav" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          {showLoginLink && (
            <Link to={signedIn ? "/account" : "/login"} className="login-link">
              {signedIn ? "My account" : "Login for customers"}
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path
                d="M5 5 L17 17 M17 5 L5 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path
                d="M3 6 H19 M3 11 H19 M3 16 H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          {showLoginLink && (
            <Link
              to={signedIn ? "/account" : "/login"}
              className="login-link-mobile"
              onClick={closeMenu}
            >
              {signedIn ? "My account" : "Login for customers"}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
