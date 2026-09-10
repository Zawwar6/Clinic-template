import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 2C15 2 6 9.5 6 17.5C6 22.7467 10.0294 27 15 27C19.9706 27 24 22.7467 24 17.5C24 9.5 15 2 15 2Z"
          fill={light ? '#FFFFFF' : '#1D5D8F'}
        />
        <path
          d="M15 9.5V22"
          stroke={light ? '#0E2A47' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9.5 15.75H20.5"
          stroke={light ? '#0E2A47' : '#FFFFFF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-[19px] font-medium tracking-[-0.01em] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        Lumina Health
      </span>
    </Link>
  );
}
