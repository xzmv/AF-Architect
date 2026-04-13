interface LogoProps {
  width?: number
  light?: boolean
  className?: string
}

export default function Logo({ width = 220, light = false, className = '' }: LogoProps) {
  const textColor = light ? '#F6F3EE' : '#1C1C1A'
  const squareBg = light ? '#F6F3EE' : '#1C1C1A'
  const squareText = light ? '#1C1C1A' : '#F6F3EE'

  return (
    <svg
      width={width}
      viewBox="0 0 260 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alexandra Figueira Arquitecta"
      className={className}
    >
      {/* Dark square */}
      <rect x="176" y="1" width="70" height="70" fill={squareBg} />

      {/* Name spanning left + over the square */}
      <text
        x="0"
        y="32"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="300"
        letterSpacing="5"
        fill={textColor}
        dominantBaseline="auto"
      >
        ALEXANDRA
      </text>
      <text
        x="0"
        y="54"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="300"
        letterSpacing="5"
        fill={textColor}
        dominantBaseline="auto"
      >
        FI
      </text>
      {/* "GUEIRA" part in square color so it reads on the dark square */}
      <text
        x="44"
        y="54"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="300"
        letterSpacing="5"
        fill={squareText}
        dominantBaseline="auto"
      >
        GUEIRA
      </text>

      {/* "ARQUITECTA" inside the dark square */}
      <text
        x="211"
        y="67"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="6"
        fontWeight="400"
        letterSpacing="3"
        fill={squareText}
        textAnchor="middle"
        dominantBaseline="auto"
      >
        ARQUITECTA
      </text>
    </svg>
  )
}
