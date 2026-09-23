import { Link, Navigate, useNavigate } from "react-router-dom";
import { CheckIcon } from "../components/icons";
import { getSession, signOut } from "../lib/auth";

const INVOICES = [
  { id: "INV-2417", date: "Aug 12, 2026", desc: "AC capacitor replacement", amount: "$289.00", status: "Paid" },
  { id: "INV-2298", date: "Apr 03, 2026", desc: "Spring cooling tune-up (plan)", amount: "$0.00", status: "Plan" },
  { id: "INV-2144", date: "Oct 22, 2025", desc: "Fall heating tune-up (plan)", amount: "$0.00", status: "Plan" },
  { id: "INV-2079", date: "Sep 08, 2025", desc: "Comfort Plan renewal", amount: "$189.00", status: "Paid" },
];

export function Account() {
  const navigate = useNavigate();
  const session = getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  function handleSignOut() {
    signOut();
    navigate("/", { replace: true });
  }

  return (
    <div className="container section">
      <div className="portal-header">
        <div>
          <hr className="copper-rule" />
          <h1>Welcome back, {session.name.split(" ")[0]}</h1>
          <p className="muted" style={{ marginBottom: 0 }}>
            {session.email}
          </p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={handleSignOut}>
          Sign out
        </button>
      </div>

      <div className="portal-grid">
        <div style={{ display: "grid", gap: "var(--space-lg)" }}>
          <div className="card">
            <span className="badge">Upcoming</span>
            <h3>Fall heating tune-up</h3>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>Date</dt>
                <dd>Tuesday, Oct 13, 2026</dd>
              </div>
              <div className="stat-row">
                <dt>Arrival window</dt>
                <dd>8:00–10:00 am</dd>
              </div>
              <div className="stat-row">
                <dt>Technician</dt>
                <dd>Marcus R. (NATE-certified)</dd>
              </div>
              <div className="stat-row">
                <dt>Covered by</dt>
                <dd>Comfort Plan — no charge</dd>
              </div>
            </dl>
            <p className="muted text-sm" style={{ margin: "var(--space-md) 0 0" }}>
              Need to reschedule? <Link to="/contact">Contact dispatch</Link> or
              call the office.
            </p>
          </div>

          <div className="card">
            <h3>Invoice history</h3>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {INVOICES.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.desc}</td>
                    <td>{invoice.amount}</td>
                    <td>{invoice.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: "grid", gap: "var(--space-lg)" }}>
          <div className="card">
            <h3>Your system</h3>
            <dl style={{ margin: 0 }}>
              <div className="stat-row">
                <dt>Furnace</dt>
                <dd>Trane S9V2, installed 2021</dd>
              </div>
              <div className="stat-row">
                <dt>AC</dt>
                <dd>Trane XR14, installed 2021</dd>
              </div>
              <div className="stat-row">
                <dt>Filter size</dt>
                <dd>20×25×4 (MERV 13)</dd>
              </div>
              <div className="stat-row">
                <dt>Last filter change</dt>
                <dd>Aug 12, 2026</dd>
              </div>
              <div className="stat-row">
                <dt>Labor warranty</dt>
                <dd>Active through 2027</dd>
              </div>
            </dl>
          </div>

          <div className="card">
            <span className="badge">Active</span>
            <h3>Comfort Plan</h3>
            <p className="muted text-sm">
              Two tune-ups per year, priority scheduling, and 10% off repairs.
              Renews Sep 8, 2027.
            </p>
            <ul className="check-list text-sm">
              <li>
                <CheckIcon />
                <span>Spring cooling visit — completed Apr 3</span>
              </li>
              <li>
                <CheckIcon />
                <span>Fall heating visit — scheduled Oct 13</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
