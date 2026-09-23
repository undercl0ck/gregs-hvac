import { Link } from "react-router-dom";
import { CheckIcon } from "../components/icons";

export function About() {
  return (
    <>
      <div className="container page-head">
        <hr className="copper-rule" />
        <h1>About Greg's HVAC</h1>
        <p>
          A family shop that grew on referrals, not billboards — because the
          work holds up and the invoice matches the quote.
        </p>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>The short version</h2>
            <p>
              Greg Halloran started this company in 1998 with one van, a
              borrowed vacuum pump, and a simple rule: <strong>quote the whole
              job before you start it</strong>. Twenty-eight years later there
              are nine vans and fourteen technicians, and the rule hasn't
              changed.
            </p>
            <p>
              We're not the cheapest bid you'll get, and we're fine with that.
              What you get instead is a crew that shows up inside the window we
              promised, fixes it right the first time, and answers the phone
              when something goes sideways at 2am in February.
            </p>
            <p>
              Every technician on the team is licensed, background-checked, and
              EPA 608 certified. Most of them have been here longer than five
              years — in this trade, that tells you everything.
            </p>
          </div>
          <div className="card">
            <hr className="copper-rule" />
            <h3>What we stand behind</h3>
            <ul className="check-list">
              <li>
                <CheckIcon />
                <span>Flat-rate quotes before any work begins</span>
              </li>
              <li>
                <CheckIcon />
                <span>Two-hour arrival windows we actually hit</span>
              </li>
              <li>
                <CheckIcon />
                <span>One-year labor warranty on every repair</span>
              </li>
              <li>
                <CheckIcon />
                <span>Licensed, bonded, and insured — #HVAC-048291</span>
              </li>
              <li>
                <CheckIcon />
                <span>NATE-certified senior technicians</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <hr className="copper-rule" />
            <h2>Service area</h2>
            <p className="muted">
              Serving Washtenaw County and nearby Michigan towns. Outside the
              area? Ask — we may still come to you.
            </p>
          </div>
          <div className="cta-band">
            <div>
              <h2>Want us on your side of town?</h2>
              <p>
                Booking same-week appointments across Washtenaw County and
                nearby Michigan towns.
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
