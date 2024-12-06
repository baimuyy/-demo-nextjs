import Menus from '@/components/menus'
import Count from '@/components/count'
import './page.css'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="box">
      <h2>我是dashborad layout</h2>

      <Menus></Menus>

      <Count></Count>

      {children}
    </div>
  )
}
