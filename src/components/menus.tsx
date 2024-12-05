'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menus() {
  const pathname = usePathname()

  const linkData = [
    { name: 'About', path: '/dashboard/about' },
    { name: 'Setting', path: '/dashboard/setting' },
  ]

  return (
    <div>
      <span>路由： </span>

      {linkData.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={(pathname === item.path ? 'active ' : '') + 'btn'}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
