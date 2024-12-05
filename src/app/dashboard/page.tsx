import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Doashboard</div>
      {children}
    </div>
  )
}
