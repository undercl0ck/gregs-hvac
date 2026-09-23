/**
 * Client-side mock auth for the static GitHub Pages demo.
 * Credentials are documented in the README only — never rendered in the UI.
 */
const SESSION_KEY = "gregs-hvac:session";

const DEMO_EMAIL = "customer@demo.gregshvac.com";
const DEMO_PASSWORD = "comfort-2026";

export type Session = {
  email: string;
  name: string;
  signedInAt: string;
};

export function signIn(email: string, password: string): Session | null {
  if (
    email.trim().toLowerCase() === DEMO_EMAIL &&
    password === DEMO_PASSWORD
  ) {
    const session: Session = {
      email: DEMO_EMAIL,
      name: "Dana Whitfield",
      signedInAt: new Date().toISOString(),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }
  return null;
}

export function signOut(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}
