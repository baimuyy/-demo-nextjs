import React from 'react'
import { Metadata } from 'next'
import { Button } from 'antd'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <div>
      <div>Doashboard in vercel</div>
      <Button type="primary">button</Button>
    </div>
  )
}
