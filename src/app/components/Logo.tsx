export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35"/>
              <stop offset="100%" stopColor="#FFA500"/>
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
            </filter>
          </defs>

          <circle cx="27.5" cy="27.5" r="26" fill="url(#logoGradient)" filter="url(#shadow)"/>
          <circle cx="27.5" cy="27.5" r="23" fill="#FFFFFF"/>

          <path d="M27.5 12C27.5 12 19.5 17.5 19.5 25C19.5 28.8 22.3 31.8 26 32.3V39.5C26 40.7 26.9 41.5 28 41.5C29.1 41.5 30 40.7 30 39.5V32.3C33.7 31.8 36.5 28.8 36.5 25C36.5 17.5 28.5 12 28.5 12H27.5Z" fill="url(#logoGradient)"/>

          <circle cx="24" cy="23.5" r="1.8" fill="#FFFFFF"/>
          <circle cx="31" cy="23.5" r="1.8" fill="#FFFFFF"/>

          <path d="M27.5 27C25.8 27 24.3 27.9 23.5 29.2C23.2 29.6 23.4 30.2 23.9 30.4C24.4 30.6 24.9 30.4 25.2 30C25.7 29.3 26.5 28.8 27.5 28.8C28.5 28.8 29.3 29.3 29.8 30C30.1 30.4 30.6 30.6 31.1 30.4C31.6 30.2 31.8 29.6 31.5 29.2C30.7 27.9 29.2 27 27.5 27Z" fill="#FFFFFF"/>

          <path d="M27.5 44C31.8 44 35 41 35 41H20C20 41 23.2 44 27.5 44Z" fill="#4CAF50"/>
          <ellipse cx="22.5" cy="41.8" rx="2.3" ry="1.2" fill="#4CAF50" opacity="0.7"/>
          <ellipse cx="32.5" cy="41.8" rx="2.3" ry="1.2" fill="#4CAF50" opacity="0.7"/>

          <path d="M19.5 25C19.5 25 21 19 23.5 17" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M36.5 25C36.5 25 35 19 32.5 17" stroke="#FFA500" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FFA500] tracking-tight" style={{ fontSize: '1.4rem', lineHeight: 1.2 }}>
          Taste of Vindhu
        </span>
        <span className="text-sm text-[#4CAF50] tracking-wide" style={{ fontWeight: 700, marginTop: '-2px' }}>
          VANTALLU
        </span>
      </div>
    </div>
  );
}
