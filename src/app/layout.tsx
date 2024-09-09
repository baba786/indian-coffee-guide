import './globals.css'

export const metadata = {
  title: 'Indian Coffee Guide',
  description: 'Explore the rich flavors and traditions of Indian coffee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}