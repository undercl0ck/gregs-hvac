import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getSession, signIn } from "../lib/auth";

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  if (getSession()) {
    return <Navigate to="/account" replace />;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const session = signIn(
      String(data.get("email") ?? ""),
      String(data.get("password") ?? ""),
    );
    if (session) {
      navigate("/account", { replace: true });
    } else {
      setError("That email and password combination doesn't match our records.");
    }
  }

  return (
    <div className="container auth-wrap">
      <div className="auth-card">
        <hr className="copper-rule" />
        <h1>Customer login</h1>
        <p className="muted">
          Sign in to view appointments, your maintenance plan, and invoices.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          {/* Steel/primary token color — never browser default blue */}
          <Link to="/contact" className="subtle-link">
            Forgot your password?
          </Link>
        </form>
      </div>
      <p className="muted text-sm" style={{ textAlign: "center", marginTop: "var(--space-lg)" }}>
        New customer? <Link to="/contact">Request service</Link> and we'll set
        up your account.
      </p>
    </div>
  );
}
