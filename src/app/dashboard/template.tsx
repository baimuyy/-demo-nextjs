import Count from '@/components/count'
import './page.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`antialiased box`}>
      <h2>我是dashborad template</h2>

      <Count></Count>

      {children}
    </div>
  )
}
