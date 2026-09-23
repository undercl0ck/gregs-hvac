import { Link } from "react-router-dom";
import { LogoMark } from "../components/Logo";
import {
  AirIcon,
  CheckIcon,
  ClockIcon,
  FlameIcon,
  ShieldIcon,
  SnowflakeIcon,
  WrenchIcon,
} from "../components/icons";

const SERVICES = [
  {
    icon: <FlameIcon />,
    title: "Heating",
    copy: "Furnace repair, tune-ups, and full replacements sized correctly the first time.",
  },
  {
    icon: <SnowflakeIcon />,
    title: "Cooling",
    copy: "AC and heat pump service that keeps July bearable without surprise invoices.",
  },
  {
    icon: <AirIcon />,
    title: "Air quality",
    copy: "Duct sealing, filtration, and humidity control for air you can actually feel.",
  },
  {
    icon: <WrenchIcon />,
    title: "Maintenance plans",
    copy: "Two visits a year, priority scheduling, and 10% off repairs. No fine print.",
  },
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-kicker">Heating · Cooling · Air quality</span>
            <h1>Heat that holds through a Michigan winter.</h1>
            <p className="hero-sub">
              Greg's HVAC — install, repair, and tune-ups across Michigan.
              Emergency calls answered same day when we can.
            </p>
            {/* CTA floor: this is the ONLY primary button on Home. */}
            <Link to="/contact" className="btn btn-primary">
              Request service
            </Link>
            <div className="hero-meta">
              <span>
                <ShieldIcon size={18} /> Licensed &amp; insured
              </span>
              <span>
                <ClockIcon size={18} /> Same-week appointments
              </span>
              <span>
                <CheckIcon size={18} /> 4.9★ from 600+ local reviews
              </span>
            </div>
          </div>
          <div className="hero-art">
            <LogoMark size={220} />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <hr className="copper-rule" />
            <h2>What we do</h2>
            <p className="muted">
              One crew for everything that heats, cools, or moves air in your
              home.
            </p>
          </div>
          <div className="card-grid">
            {SERVICES.map((service) => (
              <div className="card" key={service.title}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="muted">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <hr className="copper-rule" />
            <h2>How a service call works</h2>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Tell us what's wrong</h3>
              <p className="muted">
                Request service online or call. We'll confirm a two-hour
                arrival window — not a &ldquo;sometime Thursday.&rdquo;
              </p>
            </div>
            <div className="step">
              <h3>Get a flat quote</h3>
              <p className="muted">
                Your technician diagnoses the issue and quotes the full price
                before touching a wrench. Approve it or don't — no pressure.
              </p>
            </div>
            <div className="step">
              <h3>Fixed, verified, tidy</h3>
              <p className="muted">
                We test the system with you watching, walk you through what we
                did, and leave the work area cleaner than we found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <blockquote className="quote">
            <p>
              &ldquo;Furnace died at 9pm on the coldest night of the year.
              Greg's crew was here by 10:30 and had heat back before midnight.
              The invoice matched the quote to the penny.&rdquo;
            </p>
            <cite>— Marisol T., Washtenaw County</cite>
          </blockquote>
          <blockquote className="quote">
            <p>
              &ldquo;They're the only contractor I've used who actually shows
              up inside the window they give you. Maintenance plan pays for
              itself.&rdquo;
            </p>
            <cite>— Owen K., Washtenaw County</cite>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>No heat? No cool? No problem.</h2>
              <p>
                Same-week appointments. Emergency calls answered same day when
                we can.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Request service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
