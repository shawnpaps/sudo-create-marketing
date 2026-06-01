import React from 'react'
import './styles.css'

export const metadata = {
  description:
    'Manage Sudo Create software studio content for custom software, websites, online experiences, and infrastructure.',
  openGraph: {
    description:
      'Manage Sudo Create software studio content for custom software, websites, online experiences, and infrastructure.',
    siteName: 'Sudo Create',
    title: 'CMS | Sudo Create',
    type: 'website',
  },
  title: 'CMS | Sudo Create',
  twitter: {
    card: 'summary_large_image',
    description:
      'Manage Sudo Create software studio content for custom software, websites, online experiences, and infrastructure.',
    title: 'CMS | Sudo Create',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
