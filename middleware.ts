import { NextRequest, NextResponse } from 'next/server'

const locales = ['id', 'en']
const defaultLocale = 'id'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Lewati jika path sudah memiliki locale prefix
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Deteksi locale dari header Accept-Language browser
  const acceptLang = request.headers.get('accept-language') || ''
  const detectedLocale = acceptLang.toLowerCase().startsWith('id')
    ? 'id'
    : defaultLocale

  // Redirect ke URL dengan prefix locale
  request.nextUrl.pathname = `/${detectedLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Abaikan _next/, api/, file statis, pagefind
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)',
  ],
}
