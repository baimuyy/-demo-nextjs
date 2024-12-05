import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home', // 自定义导航标题（相当于document.title）
}

export default function Page() {
  return <div>Hello World</div>
}
