import { redirect } from 'next/navigation'

// Halaman ini dibiarkan untuk mencegah konflik routing.
// Middleware akan menangani redirect ke /id atau /en sebelum halaman ini dituju.
export default function RootPage() {
  redirect('/id')
}
