"use client"

import Script from "next/script"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView, trackScrollDepth, trackTimeOnPage } from "@/lib/analytics/gtag"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WBXGCNJMXZ"

function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname
    const title = document.title

    trackPageView(url, title)
  }, [pathname, searchParams])

  // Track scroll depth
  useEffect(() => {
    const trackedDepths = new Set<number>()
    const startTime = Date.now()

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      // Track at 25%, 50%, 75%, 100%
      const depths: number[] = [25, 50, 75, 100]
      depths.forEach((depth: number) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      if (timeSpent > 5) {
        trackTimeOnPage(timeSpent, pathname)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  )
}

export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}

