import { Cloud, Cpu, Database } from 'lucide-react';

export function TechIcon({ iconKey }) {
  switch (iconKey) {
    case 'c':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
          <path
            d="M16 3L27.5 9.6v12.8L16 29 4.5 22.4V9.6L16 3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="16"
            y="20.5"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="JetBrains Mono, monospace"
            fontSize="13"
            fontWeight="700"
          >
            C
          </text>
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
          <path
            d="M16 3L27.5 9.6v12.8L16 29 4.5 22.4V9.6L16 3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="16"
            y="19.5"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9.5"
            fontWeight="700"
          >
            C++
          </text>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M9 14h12v5a6 6 0 0 1-12 0v-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M21 15.5h2.5a2.5 2.5 0 0 1 0 5H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12.5 10.5c0-1.5 1.5-2 1.5-3.5M17 10.5c0-1.5 1.5-2 1.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M8 27h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M16 5c-4.4 0-5 1.9-5 4v3h5.5v1.5H9c-2.2 0-4 1.6-4 4.5s1.8 4.5 4 4.5h2v-3.2c0-2 1.5-3.3 3.5-3.3h4.5c1.7 0 3-1.3 3-3V9c0-2.1-1.6-4-6-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 27c4.4 0 5-1.9 5-4v-3h-5.5v-1.5H23c2.2 0 4-1.6 4-4.5s-1.8-4.5-4-4.5h-2v3.2c0 2-1.5 3.3-3.5 3.3H13c-1.7 0-3 1.3-3 3V23c0 2.1 1.6 4 6 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="13.5" cy="8.5" r="1.1" fill="currentColor" />
          <circle cx="18.5" cy="23.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M6 5l1.8 20L16 27.5 24.2 25 26 5H6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M11 11h10l-.4 4.5H11.5l.4 4.5 4.1 1.2 4.1-1.2.3-2.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M6 5l1.8 20L16 27.5 24.2 25 26 5H6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M11 11h10l-9.5 4.5h9l-.6 4.7-3.9 1.1-3.9-1.1-.2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="2.3" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="11.5" ry="4.5" stroke="currentColor" strokeWidth="1.8" />
          <ellipse
            cx="16"
            cy="16"
            rx="11.5"
            ry="4.5"
            transform="rotate(60 16 16)"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11.5"
            ry="4.5"
            transform="rotate(120 16 16)"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case 'iot':
      return <Cpu size={22} aria-hidden="true" />;
    case 'cloud':
      return <Cloud size={22} aria-hidden="true" />;
    case 'mongodb':
      return <Database size={22} aria-hidden="true" />;
    default:
      return <Cpu size={22} aria-hidden="true" />;
  }
}
