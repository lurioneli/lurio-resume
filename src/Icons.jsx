// Sleek, minimal SVG icons with gradient support

export const Icons = {
  // Skills icons
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="url(#grad1)" strokeWidth="1.5" fill="none"/>
      <path d="M3 10h18" stroke="url(#grad1)" strokeWidth="1.5"/>
      <path d="M8 2v4M16 2v4" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="15" r="1" fill="url(#grad1)"/>
      <circle cx="12" cy="15" r="1" fill="url(#grad1)"/>
      <circle cx="16" cy="15" r="1" fill="url(#grad1)"/>
    </svg>
  ),

  users: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <circle cx="9" cy="7" r="3" stroke="url(#grad2)" strokeWidth="1.5" fill="none"/>
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="2.5" stroke="url(#grad2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M17 13.5a3 3 0 013 3v1.5" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),

  bolt: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  handshake: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M20 11l-2-2-5 5-2-2-5 5" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 14l4-4 2 2" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 10l-4 4-2-2" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="18" r="2" stroke="url(#grad4)" strokeWidth="1.5" fill="none"/>
      <circle cx="18" cy="18" r="2" stroke="url(#grad4)" strokeWidth="1.5" fill="none"/>
    </svg>
  ),

  chart: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M3 3v18h18" stroke="url(#grad5)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 14l4-4 3 3 6-6" stroke="url(#grad5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="7" r="2" stroke="url(#grad5)" strokeWidth="1.5" fill="none"/>
    </svg>
  ),

  globe: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#grad6)" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="url(#grad6)" strokeWidth="1.5" fill="none"/>
      <path d="M3 12h18" stroke="url(#grad6)" strokeWidth="1.5"/>
      <path d="M12 3c-3 3-3 6 0 9s3 6 0 9" stroke="url(#grad6)" strokeWidth="1" opacity="0.5"/>
    </svg>
  ),

  // Project icons
  gamepad: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradGame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="20" height="12" rx="4" stroke="url(#gradGame)" strokeWidth="1.5" fill="none"/>
      <path d="M6 12h4M8 10v4" stroke="url(#gradGame)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="15" cy="11" r="1" fill="url(#gradGame)"/>
      <circle cx="18" cy="13" r="1" fill="url(#gradGame)"/>
    </svg>
  ),

  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAI" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" stroke="url(#gradAI)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M5 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="url(#gradAI)" strokeWidth="1" strokeLinejoin="round" fill="none" opacity="0.6"/>
      <path d="M19 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="url(#gradAI)" strokeWidth="1" strokeLinejoin="round" fill="none" opacity="0.6"/>
    </svg>
  ),

  // Additional info icons
  clock: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradClock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#gradClock)" strokeWidth="1.5" fill="none"/>
      <path d="M12 6v6l4 2" stroke="url(#gradClock)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  languages: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradLang" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M5 8l4 12M9 8l4 12" stroke="url(#gradLang)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 14h6" stroke="url(#gradLang)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 4h6M17 4v4c0 2-1 4-3 4" stroke="url(#gradLang)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 8c0 2 1 4 3 4" stroke="url(#gradLang)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  city: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCity" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
      </defs>
      <path d="M3 21h18" stroke="url(#gradCity)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="5" y="11" width="6" height="10" stroke="url(#gradCity)" strokeWidth="1.5" fill="none"/>
      <rect x="13" y="5" width="6" height="16" stroke="url(#gradCity)" strokeWidth="1.5" fill="none"/>
      <path d="M7 14h2M7 17h2" stroke="url(#gradCity)" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      <path d="M15 8h2M15 11h2M15 14h2M15 17h2" stroke="url(#gradCity)" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
}

export default Icons
