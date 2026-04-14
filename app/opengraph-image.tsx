import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Alexandra Figueira Arquitecta, Cascais, Portugal'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1C1C1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Thin border accent */}
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 80,
            right: 80,
            height: 1,
            background: 'rgba(255,255,255,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            left: 80,
            right: 80,
            height: 1,
            background: 'rgba(255,255,255,0.12)',
          }}
        />

        {/* Small square accent */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 160,
            height: 160,
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#F6F3EE',
            letterSpacing: '0.12em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          ALEXANDRA
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#F6F3EE',
            letterSpacing: '0.12em',
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          FIGUEIRA
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: 'rgba(255,255,255,0.25)',
            marginBottom: 24,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          ARQUITECTA · CASCAIS, PORTUGAL
        </div>
      </div>
    ),
    { ...size },
  )
}
