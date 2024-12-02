import React from 'react'

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Doashboard</div>
      {children}
    </div>
  )
}
