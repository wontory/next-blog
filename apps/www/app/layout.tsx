import { ReactLenis } from '@wontory/lib/lenis'
import { ViewTransitions } from '@wontory/lib/next-view-transitions'
import { Pretendard } from '@wontory/ui/font/pretendard'
import { SiteFooter } from '@wontory/ui/site-footer'
import { SiteHeader } from '@wontory/ui/site-header'
import { ThemeProvider } from '@wontory/ui/theme-provider'
import { cn } from '@wontory/util/cn'
import type { Metadata } from 'next'
import '@wontory/ui/globals.css'

export const metadata: Metadata = {
  title: 'www.wontory.dev',
  description: 'www.wontory.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="ko" suppressHydrationWarning>
        <body className={cn(Pretendard.variable, 'font-sans')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="container max-w-screen-lg flex-1 px-6 py-40">
                {children}
              </main>
              <SiteFooter />
            </div>
            <ReactLenis root />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
