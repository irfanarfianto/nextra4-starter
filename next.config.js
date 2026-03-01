import nextra from 'nextra'

const withNextra = nextra({
  // Optional: configure Nextra options here
  // defaultShowCopyCode: true,
})

export default withNextra({
  // reactStrictMode: false — keep disabled to avoid Nextra 4 + React 19 ref warnings
  reactStrictMode: false,
  // Catatan: i18n tidak perlu di sini karena menggunakan [lang] folder (App Router)
})
