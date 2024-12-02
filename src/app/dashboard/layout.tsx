'use client'

import Link from 'next/link'
import { useState } from 'react'
import './page.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)

  return (
    <div className={`antialiased`}>
      <h2>我是dashborad layout</h2>
      <div>
        <Link href="/dashboard/about" className="btn">
          about
        </Link>
        <Link href="/dashboard/setting" className="btn">
          setting
        </Link>
      </div>

      <button onClick={() => setCount(count + 1)}>add</button>

      {children}
    </div>
  )
}
