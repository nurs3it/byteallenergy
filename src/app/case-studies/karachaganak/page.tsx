"use client"

import Image from 'next/image'
import Link from 'next/link'
import { PageBanner } from '@/components/layout/PageBanner'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { ScadaPanel, MetricTile, StatusPill, VlpIprChart, TrendChart } from '@/components/case-studies/scada'
import { ChartLineUp, ArrowRight, Gauge, Flame, Stack } from 'phosphor-react'

// Figures pulled straight from the live IFM dashboards (see screenshots below).
const oilRate = [22000, 22000, 22100, 28000, 40000, 40400, 40300, 40500, 40200, 40400, 40300, 36500, 36200, 40100, 40400, 40300]
const gasRate = [67200, 67400, 68100, 67600, 68400, 69200, 70100, 71200, 70600, 70900, 70200, 69400, 68800, 68200, 67600, 67100]

const glance = [
  { label: 'Operator', value: 'KPO' },
  { label: 'Field', value: 'Karachaganak' },
  { label: 'Daily oil forecast', value: '28 Kt/d' },
  { label: 'Processing trains', value: 'Units 2 & 3' },
]

export default function KarachaganakCaseStudy() {
  return (
    <main>
      <PageBanner
        title="Karachaganak Integrated Field Management"
        subtitle="A real-time IAM/Digital Oilfield platform unifying well, network and field decisions for Karachaganak Petroleum Operating."
        badge="Case Study"
      />

      {/* At a glance */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {glance.map((g) => (
                <div key={g.label} className="rounded-sm border border-border bg-card p-5">
                  <div className="text-sm text-muted-foreground">{g.label}</div>
                  <div className="text-2xl font-bold text-primary mt-1">{g.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Karachaganak is one of the world&apos;s largest gas-condensate fields. Operations span hundreds of
                producers and injectors feeding two processing units and an export network — a system far too large to
                steer from spreadsheets and disconnected models.
              </p>
              <p>
                We deployed an Integrated Asset Management (IAM) / Digital Oilfield platform that fuses real-time
                measurements with calibrated well and network models. Engineers see a single, live picture: every well&apos;s
                operating envelope, the surface network solve, and field-level production totals — all updating from the
                same source of truth.
              </p>
              <p>
                The result is faster, model-based decisions: deviation surveillance flags under-performing wells, the VLP/IPR
                solve keeps wells inside their operating envelope, and daily production is forecast and allocated
                automatically across units and trains.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Field Overview dashboard */}
      <section className="py-16" style={{ background: '#070c16' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <StatusPill label="LIVE" />
              <h2 className="text-2xl font-bold text-white">Field Overview</h2>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Field-wide production solve: gathering centre, processing units and injection networks, with continuous
              oil and gas rate trends.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
              {/* Production solve */}
              <ScadaPanel title="KPC — Gathering Centre">
                <div className="space-y-1">
                  <MetricTile label="Oil Rate" value="26,533" unit="m³/d" />
                  <MetricTile label="Gas Rate" value="34,285" unit="1000Sm³/d" />
                  <MetricTile label="Total Water" value="2,041" unit="Sm³/d" />
                  <MetricTile label="OGP Gas Rate" value="19,811" unit="1000Sm³/d" />
                </div>
              </ScadaPanel>

              <ScadaPanel title="Unit 3 — Trains">
                <div className="space-y-1">
                  <MetricTile label="Oil Rate" value="4,879" unit="m³/d" />
                  <MetricTile label="Gas Rate" value="14,368" unit="1000Sm³/d" />
                  <MetricTile label="Train 1 / 2" value="2,440 / 2,069" unit="Sm³/d oil" />
                  <MetricTile label="Train 3 / 4" value="2,158 / 1,445" unit="Sm³/d oil" />
                </div>
              </ScadaPanel>

              <ScadaPanel title="Unit 2 — Direct Wells">
                <div className="space-y-1">
                  <MetricTile label="Oil Rate" value="6,797" unit="m³/d" />
                  <MetricTile label="Gas Rate" value="18,152" unit="1000Sm³/d" />
                  <MetricTile label="VQ01" value="4,743" unit="Sm³/d oil" />
                  <MetricTile label="VQ02" value="5,206" unit="Sm³/d oil" />
                </div>
              </ScadaPanel>

              {/* Trends */}
              <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                <ScadaPanel title="Total Oil Rate">
                  <TrendChart
                    data={oilRate}
                    color="#84cc16"
                    yRange={[20000, 42000]}
                    yTicks={[22000, 28000, 34000, 40000]}
                    xLabels={['10 Jun 16:00', '11 Jun 00:00', '11 Jun 08:00', '11 Jun 12:00']}
                    ariaLabel="Total field oil rate trend over the last day"
                  />
                </ScadaPanel>
                <ScadaPanel title="Total Gas Rate">
                  <TrendChart
                    data={gasRate}
                    color="#fb923c"
                    fill={false}
                    yRange={[66000, 72000]}
                    yTicks={[67000, 68000, 69000, 70000, 71000]}
                    xLabels={['10 Jun 16:00', '11 Jun 00:00', '11 Jun 08:00', '11 Jun 12:00']}
                    ariaLabel="Total field gas rate trend over the last day"
                  />
                </ScadaPanel>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Well Overview dashboard */}
      <section className="py-16" style={{ background: '#070c16' }}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <StatusPill label="WELL 9832" tone="info" />
              <h2 className="text-2xl font-bold text-white">Well Overview</h2>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Per-well rate estimate and inflow/outflow solve. Real-time measurements drive the VLP/IPR model that keeps
              the well inside its operating envelope.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <ScadaPanel title="Production Conditions">
                <div className="space-y-1">
                  <MetricTile label="Oil Rate" value="232.61" unit="Sm³/d" />
                  <MetricTile label="Gas Rate" value="278.854" unit="1000Sm³/d" />
                  <MetricTile label="Water Rate" value="198.15" unit="Sm³/d" />
                  <MetricTile label="Liquid Rate" value="430.77" unit="Sm³/d" />
                  <MetricTile label="Water Cut" value="46" unit="%" />
                  <MetricTile label="Gas Oil Ratio" value="1198.73" unit="Sm³/Sm³" />
                </div>
              </ScadaPanel>

              <ScadaPanel title="IPR Data">
                <div className="space-y-1">
                  <MetricTile label="FBHP" value="259.05" unit="barg" />
                  <MetricTile label="Drawdown" value="20.91" unit="barg" />
                  <MetricTile label="Reservoir Pressure" value="279.95" unit="barg" />
                  <MetricTile label="Productivity Index" value="20.99" unit="Sm³/d/bar²" />
                </div>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: '#16293a' }}>
                  <div className="flex flex-wrap gap-2">
                    <StatusPill label="Flowing" />
                    <StatusPill label="OilProducerNoLift" tone="info" />
                  </div>
                  <div className="mt-3 text-xs text-slate-400">Flowing to KPC · Object OBJ_3</div>
                </div>
              </ScadaPanel>

              <ScadaPanel title="VLP / IPR Plot" className="lg:row-span-1">
                <VlpIprChart />
                <div className="mt-3 flex items-center gap-5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><span className="inline-block w-4 h-0.5" style={{ background: '#ef4444' }} /> VLP (tubing)</span>
                  <span className="flex items-center gap-1.5"><span className="inline-block w-4 h-0.5" style={{ background: '#22c55e' }} /> IPR (inflow)</span>
                </div>
              </ScadaPanel>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Real interface screenshots */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-2">Inside the platform</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">The actual operator-facing screens engineers use daily.</p>
            <div className="space-y-8">
              {[
                { src: '/images/case-studies/karachaganak-field-overview.png', cap: 'Karachaganak Field Overview — production solve, injection networks and live rate trends.' },
                { src: '/images/case-studies/karachaganak-well-overview.png', cap: 'Well Overview — per-well rate estimate, IPR/VLP solve and surveillance comments.' },
              ].map((f) => (
                <figure key={f.src} className="rounded-sm border border-border overflow-hidden bg-card">
                  <Image src={f.src} alt={f.cap} width={1960} height={1040} className="w-full h-auto" />
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground border-t border-border">{f.cap}</figcaption>
                </figure>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Outcomes</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Gauge weight="duotone" />, t: 'Single source of truth', d: 'Wells, networks and field totals solved from one live model.' },
                { icon: <ChartLineUp weight="duotone" />, t: 'Real-time surveillance', d: 'Automated deviation alerts on rates, pressures and choke state.' },
                { icon: <Flame weight="duotone" />, t: 'Daily forecast & allocation', d: 'Production forecast and allocated across units and trains.' },
                { icon: <Stack weight="duotone" />, t: 'Operating-envelope control', d: 'VLP/IPR solve keeps every well inside safe limits.' },
              ].map((o) => (
                <div key={o.t} className="rounded-sm border border-border bg-card p-6">
                  <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center text-primary text-2xl mb-4">
                    {o.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{o.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-4">Run your asset like Karachaganak</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We deploy IAM/Digital Oilfield platforms that turn real-time data into model-based decisions across your
              entire production system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Talk to our team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
