"use client"

/**
 * SCADA-style presentational components used by the Karachaganak IFM case study.
 * Colours are intentionally dark/fixed (independent of the site theme) to match
 * the real industrial dashboard aesthetic from the screenshots.
 * ponytail: hand-rolled SVG charts instead of a charting dep — <1000 pts, static
 * showcase data, full control over the look. Add recharts only if these go interactive.
 */

import { ReactNode } from 'react'

const C = {
  panel: '#0e1726',
  panelInner: '#0a1120',
  border: '#1e3a4d',
  borderSoft: '#16293a',
  title: '#38bdf8', // cyan title text, like the screenshots
  text: '#cbd5e1',
  textDim: '#64748b',
  grid: '#1c2c3e',
  oil: '#84cc16',
  gas: '#fb923c',
  ipr: '#22c55e',
  vlp: '#ef4444',
  ok: '#22c55e',
}

/** Dark panel with a cyan section header, mirroring the dashboard frames. */
export function ScadaPanel({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-sm border ${className}`}
      style={{ background: C.panel, borderColor: C.border }}
    >
      <div
        className="px-4 py-2 text-center text-sm font-semibold tracking-wide border-b"
        style={{ color: C.title, borderColor: C.borderSoft }}
      >
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

/** A single labelled readout cell (label · value · unit), boxed value like the UI. */
export function MetricTile({
  label,
  value,
  unit,
}: {
  label: string
  value: string | number
  unit?: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className="text-sm" style={{ color: C.text }}>
        {label}
      </span>
      <span className="flex items-center gap-2">
        <span
          className="min-w-[84px] rounded-sm px-3 py-1 text-right text-sm font-mono tabular-nums"
          style={{ background: C.panelInner, color: '#e2e8f0', border: `1px solid ${C.borderSoft}` }}
        >
          {value}
        </span>
        {unit && (
          <span className="w-16 text-xs" style={{ color: C.textDim }}>
            {unit}
          </span>
        )}
      </span>
    </div>
  )
}

export function StatusPill({ label, tone = 'ok' }: { label: string; tone?: 'ok' | 'info' }) {
  const bg = tone === 'ok' ? C.ok : C.title
  return (
    <span
      className="inline-flex items-center rounded-sm px-3 py-1 text-xs font-semibold"
      style={{ background: bg, color: '#0a1120' }}
    >
      {label}
    </span>
  )
}

// ---- charts ---------------------------------------------------------------

const W = 760
const H = 300
const PAD = { l: 48, r: 16, t: 16, b: 32 }

function scaleX(x: number, min: number, max: number) {
  return PAD.l + ((x - min) / (max - min)) * (W - PAD.l - PAD.r)
}
function scaleY(y: number, min: number, max: number) {
  return H - PAD.b - ((y - min) / (max - min)) * (H - PAD.t - PAD.b)
}
function pathFrom(pts: [number, number][], xr: [number, number], yr: [number, number]) {
  return pts
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p[0], xr[0], xr[1]).toFixed(1)} ${scaleY(p[1], yr[0], yr[1]).toFixed(1)}`)
    .join(' ')
}
function gridLines(yr: [number, number], yTicks: number[], xr: [number, number], xTicks: number[]) {
  return (
    <g>
      {yTicks.map((t) => (
        <g key={`y${t}`}>
          <line x1={PAD.l} y1={scaleY(t, yr[0], yr[1])} x2={W - PAD.r} y2={scaleY(t, yr[0], yr[1])} stroke={C.grid} strokeWidth={1} />
          <text x={PAD.l - 8} y={scaleY(t, yr[0], yr[1]) + 4} textAnchor="end" fontSize={11} fill={C.textDim}>
            {t}
          </text>
        </g>
      ))}
      {xTicks.map((t) => (
        <text key={`x${t}`} x={scaleX(t, xr[0], xr[1])} y={H - PAD.b + 18} textAnchor="middle" fontSize={11} fill={C.textDim}>
          {t}
        </text>
      ))}
    </g>
  )
}

/** VLP/IPR crossing curves — the well's operating point. */
export function VlpIprChart() {
  const xr: [number, number] = [0, 950]
  const yr: [number, number] = [0, 600]
  // IPR: reservoir inflow — gentle decline.
  const ipr: [number, number][] = [
    [0, 280], [200, 268], [400, 256], [600, 246], [800, 236], [950, 228],
  ]
  // VLP: tubing lift — steep drop then slow rise (two near-parallel envelope curves).
  const vlp1: [number, number][] = [
    [0, 620], [40, 360], [80, 270], [140, 245], [260, 243], [430, 248], [650, 262], [950, 292],
  ]
  const vlp2: [number, number][] = [
    [0, 600], [40, 345], [80, 262], [140, 240], [260, 238], [430, 244], [650, 256], [950, 285],
  ]
  // Operating point: VLP/IPR intersection ≈ liquid 430, pressure ~252.
  const opX = scaleX(430, xr[0], xr[1])
  const opY = scaleY(252, yr[0], yr[1])
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="VLP/IPR plot: tubing and inflow curves intersecting at the well operating point">
      <rect x={PAD.l} y={PAD.t} width={W - PAD.l - PAD.r} height={H - PAD.t - PAD.b} fill={C.panelInner} />
      {gridLines(yr, [0, 100, 200, 300, 400, 500, 600], xr, [0, 200, 400, 600, 800])}
      <path d={pathFrom(ipr, xr, yr)} fill="none" stroke={C.ipr} strokeWidth={2} />
      <path d={pathFrom(vlp1, xr, yr)} fill="none" stroke={C.vlp} strokeWidth={2} />
      <path d={pathFrom(vlp2, xr, yr)} fill="none" stroke={C.vlp} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.8} />
      <circle cx={opX} cy={opY} r={5} fill="#fde047" stroke="#0a1120" strokeWidth={1.5} />
      <text x={opX + 10} y={opY - 8} fontSize={11} fill={C.text}>Operating point</text>
      <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={11} fill={C.textDim}>Liquid Rate (Sm³/d)</text>
      <text x={14} y={H / 2} textAnchor="middle" fontSize={11} fill={C.textDim} transform={`rotate(-90 14 ${H / 2})`}>Pressure (barg)</text>
    </svg>
  )
}

/** Generic time-series line chart with optional soft fill (Total Oil/Gas Rate). */
export function TrendChart({
  data,
  color,
  yRange,
  yTicks,
  xLabels,
  fill = true,
  ariaLabel,
}: {
  data: number[]
  color: string
  yRange: [number, number]
  yTicks: number[]
  xLabels: string[]
  fill?: boolean
  ariaLabel: string
}) {
  const xr: [number, number] = [0, data.length - 1]
  const pts: [number, number][] = data.map((v, i) => [i, v])
  const line = pathFrom(pts, xr, yRange)
  const area = `${line} L ${scaleX(xr[1], xr[0], xr[1])} ${H - PAD.b} L ${scaleX(0, xr[0], xr[1])} ${H - PAD.b} Z`
  const fillId = `fill-${color.replace('#', '')}`
  const xTickIdx = xLabels.map((_, i) => Math.round((i / (xLabels.length - 1)) * (data.length - 1)))
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={ariaLabel}>
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.28} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <rect x={PAD.l} y={PAD.t} width={W - PAD.l - PAD.r} height={H - PAD.t - PAD.b} fill={C.panelInner} />
      <g>
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={PAD.l} y1={scaleY(t, yRange[0], yRange[1])} x2={W - PAD.r} y2={scaleY(t, yRange[0], yRange[1])} stroke={C.grid} strokeWidth={1} />
            <text x={PAD.l - 8} y={scaleY(t, yRange[0], yRange[1]) + 4} textAnchor="end" fontSize={11} fill={C.textDim}>
              {t.toLocaleString()}
            </text>
          </g>
        ))}
        {xLabels.map((lbl, i) => (
          <text key={lbl + i} x={scaleX(xTickIdx[i], xr[0], xr[1])} y={H - PAD.b + 18} textAnchor="middle" fontSize={10} fill={C.textDim}>
            {lbl}
          </text>
        ))}
      </g>
      {fill && <path d={area} fill={`url(#${fillId})`} />}
      <path d={line} fill="none" stroke={color} strokeWidth={2} />
    </svg>
  )
}
