"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "unavailable";

export function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setStatus("unavailable");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Your email address</label>
      <div className="form-row">
        <input
          autoComplete="email"
          disabled={status === "loading"}
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
        <button className="button" disabled={status === "loading"} type="submit">
          {status === "loading" ? "Checking…" : "Receive the Free Tale"}
        </button>
      </div>
      <p className="form-status" role="status" aria-live="polite">
        {status === "unavailable"
          ? "The mailing list is being prepared. Please check back soon—your address was not saved."
          : "The mailing-list provider is not yet connected; no address will be stored."}
      </p>
    </form>
  );
}
