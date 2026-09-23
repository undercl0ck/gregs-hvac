import { Link } from "react-router-dom";
import {
  AirIcon,
  CheckIcon,
  FlameIcon,
  SnowflakeIcon,
  WrenchIcon,
} from "../components/icons";

const SERVICES = [
  {
    icon: <FlameIcon />,
    title: "Heating",
    lead: "Furnaces, boilers, and heat pumps — repaired, tuned, or replaced.",
    items: [
      "Same-week furnace repair with flat-rate quotes",
      "Annual tune-ups that catch failures before January",
      "Right-sized replacements with load calculations, not guesswork",
      "High-efficiency upgrades and rebate paperwork handled for you",
    ],
  },
  {
    icon: <SnowflakeIcon />,
    title: "Cooling",
    lead: "Central AC, ductless mini-splits, and heat pump cooling.",
    items: [
      "AC repair with parts stocked on the truck for common failures",
      "Refrigerant leak detection and honest repair-vs-replace advice",
      "Ductless mini-split design and installation",
      "Pre-summer inspections so July doesn't surprise you",
    ],
  },
  {
    icon: <AirIcon />,
    title: "Air quality",
    lead: "Cleaner, healthier air throughout the whole house.",
    items: [
      "Duct sealing and insulation to stop conditioned-air leaks",
      "Whole-home filtration and media filter upgrades",
      "Humidifiers and dehumidifiers sized for your square footage",
      "Ventilation assessments for tight, modern construction",
    ],
  },
  {
    icon: <WrenchIcon />,
    title: "Maintenance plans",
    lead: "Two scheduled visits a year. Priority service. 10% off repairs.",
    items: [
      "Spring cooling and fall heating tune-ups, scheduled for you",
      "Front-of-line priority when the weather turns",
      "10% off all repairs, no repair minimum",
      "No enrollment fees and cancel anytime — we earn the renewal",
    ],
  },
];

export function Services() {
  return (
    <>
      <div className="container page-head">
        <hr className="copper-rule" />
        <h1>Services</h1>
        <p>
          Everything that heats, cools, or moves air in your home — handled by
          one licensed crew with upfront, flat-rate pricing.
        </p>
      </div>

      <section className="section">
        <div className="container card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))" }}>
          {SERVICES.map((service) => (
            <div className="card" key={service.title}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="muted">{service.lead}</p>
              <ul className="check-list">
                {service.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Not sure what you need?</h2>
              <p>
                Describe the symptom — strange noise, weak airflow, high bill —
                and we'll take it from there.
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
