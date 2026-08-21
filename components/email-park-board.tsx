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
        Opens your mail app with <strong>{PARK_BOARD_EMAIL}</strong>, subject, and letter
        pre-filled. Add your name and address, then send.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={mailto}
          className="inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Open in mail app
        </a>
        <button
          type="button"
          onClick={() => void copyTemplate()}
          className="inline-flex rounded-full border border-emerald-900/15 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
        >
          {copied ? "Copied!" : "Copy letter text"}
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Mail app didn&apos;t pre-fill? Hit copy, then paste into the body yourself.
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
