import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User',
}

export default function Dashboard() {
  return (
    <div>
      <div>path: app / user / page.js，测试“平行路由”</div>
    </div>
  )
}
