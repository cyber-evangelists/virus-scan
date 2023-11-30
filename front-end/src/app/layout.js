import './globals.css'


export const metadata = {
  title: 'Virus Scan',
  description: 'A nextJS application for virus scaning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
