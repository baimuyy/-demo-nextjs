import Menus from '@/components/menus'
import Count from '@/components/count'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="box">
      <h2>path: dashboard / layout</h2>

      <Menus></Menus>

      <Count></Count>

      {children}
    </div>
  )
}
