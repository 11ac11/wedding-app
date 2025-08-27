import React from 'react'

/**
 * CircularTable – renders a circular table with up to 10 evenly spaced seats
 * or a rectangular "principal" table with 6 seats along the bottom side.
 * Pure SVG, no Tailwind or external CSS required.
 *
 * Props
 * - seats: number (1..10) [ignored if isPrincipal=true]
 * - isPrincipal: boolean – if true, renders a rectangular table with 6 seats
 * - tableDiameter: number (px) – size of the central table circle (circular only)
 * - seatDiameter: number (px) – size of each seat circle
 * - gap: number (px) – space between the table edge and the seats (circular only)
 * - label: string – optional text shown in the center of the table (circular) or inside the rectangle
 * - startAngle: number (degrees) – where seat #1 begins (default -90° = top, circular only)
 */
export default function CircularTable({
  seats = 10,
  isPrincipal = false,
  tableDiameter = 200,
  seatDiameter = 40,
  gap = 16,
  label = '',
  startAngle = -90
}) {
  const rSeat = seatDiameter / 2

  if (isPrincipal) {
    // Rectangle dimensions
    const tableWidth = 150
    const tableHeight = 30
    const padding = 10

    // SVG size to accommodate seats
    const sizeW = tableWidth + padding * 2
    const sizeH = tableHeight + padding * 3 + seatDiameter

    const cx = padding
    const cy = padding

    // Generate 6 seats along bottom
    const seatSpacing = tableWidth / 6
    const seatsData = Array.from({ length: 6 }, (_, i) => {
      const x = padding + seatSpacing * (i + 0.5)
      const y = padding + tableHeight + seatDiameter
      return { x, y, n: i + 1 }
    })

    return (
      <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`}>
        {/* Rectangle Table */}
        <rect
          x={padding}
          y={padding}
          width={tableWidth}
          height={tableHeight}
          fill="white"
          stroke="var(--slategrey)"
          strokeWidth={1}
          rx={8}
        />

        {/* Optional label inside rectangle */}
        {label ? (
          <text
            x={padding + tableWidth / 2}
            y={padding + tableHeight / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="system-ui, sans-serif"
            fontSize={Math.min(12, tableWidth * 0.35)}
            fill="var(--slategrey)"
          >
            {label}
          </text>
        ) : null}

        {/* Seats */}
        {seatsData.map(({ x, y, n }) => (
          <g key={n}>
            <circle cx={x} cy={y} r={rSeat} fill="white" stroke="var(--slategrey)" strokeWidth={1} />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="system-ui, sans-serif"
              fontSize={Math.min(20, rSeat * 0.9)}
              fill="var(--slategrey)"
            >
              {n}
            </text>
          </g>
        ))}
      </svg>
    )
  }

  // Circular Table
  const clampedSeats = Math.max(1, Math.min(10, Math.floor(seats || 0)))
  const rTable = tableDiameter / 2

  // Radius at which the seat CENTERS are placed
  const ringRadius = rTable + gap + rSeat
  // Entire SVG canvas radius so nothing gets clipped
  const outerRadius = rTable + gap + seatDiameter // = ringRadius + rSeat
  const size = outerRadius * 2
  const cx = outerRadius
  const cy = outerRadius

  const seatsData = Array.from({ length: clampedSeats }, (_, i) => {
    const angleRad = (i / clampedSeats) * 2 * Math.PI + (startAngle * Math.PI) / 180
    const x = cx + ringRadius * Math.cos(angleRad)
    const y = cy + ringRadius * Math.sin(angleRad)
    return { x, y, n: i + 1 }
  })

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Table */}
      <circle cx={cx} cy={cy} r={rTable} fill="white" stroke="var(--slategrey)" strokeWidth={1} />

      {/* Optional table label */}
      {label ? (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="system-ui, sans-serif"
          fontSize={Math.min(24, rTable * 0.35)}
          fill="var(--slategrey)"
        >
          {label}
        </text>
      ) : null}

      {/* Seats */}
      {seatsData.map(({ x, y, n }) => (
        <g key={n}>
          <circle cx={x} cy={y} r={rSeat} fill="white" stroke="var(--slategrey)" strokeWidth={1} />
          <text
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="system-ui, sans-serif"
            fontSize={Math.min(20, rSeat * 0.9)}
            fill="var(--slategrey)"
          >
            {n}
          </text>
        </g>
      ))}
    </svg>
  )
}

/*
USAGE EXAMPLES

// Circular table with 8 seats
<CircularTable seats={8} tableDiameter={180} seatDiameter={36} gap={18} label="Table 1" />

// Principal rectangular table
<CircularTable isPrincipal={true} seatDiameter={36} label="Main" />
*/
