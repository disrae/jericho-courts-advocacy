"use client";

import { useState } from "react";
import {
  EMAIL_BODY,
  EMAIL_SUBJECT,
  PARK_BOARD_EMAIL,
  buildMailtoUrl,
} from "@/lib/park-board-email";

export function EmailParkBoard() {
  const [copied, setCopied] = useState(false);
  const mailto = buildMailtoUrl();

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(EMAIL_BODY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article id="email" className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">1. Email the Park Board</h3>
      <p className="mt-3 leading-relaxed text-slate-600">
        Opens your mail app with <strong>{PARK_BOARD_EMAIL}</strong>, subject, and a
        letter already filled in. Add your name and address, then send.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a href={mailto} className="btn-primary">
          Open in mail app
        </a>
        <button
          type="button"
          onClick={() => void copyTemplate()}
          className="btn-secondary"
        >
          {copied ? "Copied!" : "Copy letter text"}
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        If the letter didn&apos;t fill in automatically, copy it and paste it into the
        email body.
      </p>

      <details className="mt-4 rounded-xl bg-slate-50 p-4">
        <summary className="cursor-pointer font-medium text-emerald-800">
          Preview letter
        </summary>
        <div className="mt-4 space-y-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
          <p>
            <span className="font-medium text-slate-900">To:</span> {PARK_BOARD_EMAIL}
          </p>
          <p>
            <span className="font-medium text-slate-900">Subject:</span> {EMAIL_SUBJECT}
          </p>
          <p>{EMAIL_BODY}</p>
        </div>
      </details>
    </article>
  );
}
