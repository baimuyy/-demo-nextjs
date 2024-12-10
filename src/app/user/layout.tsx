import Link from 'next/link'

export default function UserLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}>) {
  return (
    <div className="box">
      <h2>path: dashboard / layout</h2>

      <div>
        <Link className="btn" href="/user">
          analytics
        </Link>
        <Link className="btn" href="/user/visitor">
          visitor
        </Link>
      </div>

      <div className="flex-center">
        <div>{team}</div>
        <div>{analytics}</div>
      </div>

      {children}
    </div>
  )
}
