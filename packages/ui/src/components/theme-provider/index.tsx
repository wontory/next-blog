'use client'

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from '@wontory/lib/next-themes'
import * as React from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
