import React from 'react'
import './styles.css'

export const metadata = {
  description:
    'Sudo Create CMS for media studio content, audio visual post-production, digital media & websites, and custom software records.',
  title: 'CMS | Sudo Create',
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
