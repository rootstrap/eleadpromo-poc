// src/stores/siteConfigStore.ts

import { create } from 'zustand'

interface NavLink {
  label: string
  href: string
  icon?: string
}

interface SiteConfig {
  primaryColor: string
  secondaryColor: string
  fontFamily: string
  fontSize: string
  logoSrc: string
  logoAlt: string
  navLinks: NavLink[]
  loginText: string
  cartItemCount: number
  user?: { name: string; isLoggedIn: boolean }
  setConfig: (config: Partial<SiteConfig>) => void
}

export const useSiteConfigStore = create<SiteConfig>((set) => ({
  primaryColor: '#34A853',
  secondaryColor: '#F5F5F5',
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  logoSrc: '/logo.png',
  logoAlt: '',
  navLinks: [
    'SHOP',
    'MORE PRODUCT OPTIONS',
    'GIFT CODES',
    'RETURN POLICY',
    'CONTACT',
  ].map((label) => ({ label, href: `/${label.toLowerCase()}` })),
  loginText: 'LOGIN',
  cartItemCount: 0,
  user: undefined,
  setConfig: (config) => set((state) => ({ ...state, ...config })),
}))
