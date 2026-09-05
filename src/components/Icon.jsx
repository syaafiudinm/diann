const paths = {
  pulse: <path d="M3 12h4l2.5-7 5 14L17 12h4" />,
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13 2.5 8.5Z" />
      <path d="M6.5 10.6V15c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.4" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6a3 3 0 0 0-3 3v6.5A2.5 2.5 0 0 0 5.5 15" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrowUp: <path d="M12 20V4m0 0-6.5 6.5M12 4l6.5 6.5" />,
  arrowRight: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  spark: (
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 20.5l-1.8-5.9L4.5 12.8 10.2 11 12 3.5Z" />
  ),
  whatsapp: (
    <path d="M3.5 20.5 5 16.6a8 8 0 1 1 3 3l-4.5 1ZM9 9.2c-.2.5-.3 1.4.6 2.6a8 8 0 0 0 2.8 2.4c1 .4 1.6.3 2-.1l.7-.8 2.1 1.1-.2 1c-.2.6-1.1 1.1-2 1.1-1.6 0-3.9-1.2-5.6-3S7 9.4 7.3 8.2c.2-.7.7-1.2 1.3-1.2h.8l.8 2-.6.7Z" />
  ),
};

export default function Icon({ name, className = "size-5", strokeWidth = 1.6 }) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {content}
    </svg>
  );
}
