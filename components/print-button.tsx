"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="btn-primary px-4 py-2"
      onClick={() => window.print()}
    >
      Print / Save PDF
    </button>
  );
}
