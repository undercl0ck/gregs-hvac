import { FormEvent, useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="container page-head">
        <hr className="copper-rule" />
        <h1>Request service</h1>
        <p>
          Tell us what's going on and we'll confirm a two-hour arrival window.
          Emergencies get priority — answered same day when we can.
        </p>
      </div>

      <section className="section">
        <div className="container two-col">
          {submitted ? (
            <div className="form-success">
              <h2>Request received</h2>
              <p>
                Thanks — a dispatcher will confirm your appointment window
                shortly. Emergencies are answered same day when we can.
              </p>
              <p className="muted text-sm" style={{ marginBottom: 0 }}>
                (This is a static demo — no request was actually sent.)
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="contact-service">What do you need?</label>
                  <select id="contact-service" name="service" defaultValue="repair">
                    <option value="repair">Repair — something's broken</option>
                    <option value="tuneup">Tune-up / maintenance</option>
                    <option value="replacement">Replacement quote</option>
                    <option value="air-quality">Air quality</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="contact-timing">How soon?</label>
                  <select id="contact-timing" name="timing" defaultValue="this-week">
                    <option value="today">Today if possible</option>
                    <option value="this-week">This week</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="contact-details">What's happening?</label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={4}
                  placeholder="e.g., Furnace runs but the house won't get past 62°F…"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Send request
                </button>
              </div>
            </form>
          )}

          <div className="card">
            <hr className="copper-rule" />
            <h3>Reach us directly</h3>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>Phone</dt>
                <dd>Call for service — number coming soon</dd>
              </div>
              <div className="stat-row">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:service@gregshvac.example">
                    service@gregshvac.example
                  </a>
                </dd>
              </div>
              <div className="stat-row">
                <dt>Service area</dt>
                <dd>Washtenaw County and nearby Michigan towns</dd>
              </div>
              <div className="stat-row">
                <dt>Hours</dt>
                <dd>Mon–Fri 7–6 · Sat 8–2</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
