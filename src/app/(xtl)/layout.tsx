import React from 'react'
import Menus from '@/components/menus'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Menus></Menus>
      <div className="box">{children}</div>
    </>
  )
}
