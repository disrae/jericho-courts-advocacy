export const PARK_BOARD_EMAIL = "parkboard@vancouver.ca";

export const EMAIL_SUBJECT = "Fund permanent Jericho Beach courts";

export const EMAIL_BODY = `Dear Commissioners,

I support permanent, high-quality court infrastructure at Jericho Beach Park: resurfacing, fixed nets, preserved tennis access, a solar lighting pilot, and a public Sport Court Strategy timeline with Jericho in tranche 1.

Jericho is one of the city's busiest court sites yet still runs on temporary pop-up infrastructure. Please fund permanent upgrades in the next capital cycle.

Sincerely,
[Your name]
[Your address]`;

export function buildMailtoUrl(): string {
  const params = new URLSearchParams({
    subject: EMAIL_SUBJECT,
    body: EMAIL_BODY,
  });
  return `mailto:${PARK_BOARD_EMAIL}?${params.toString()}`;
}
