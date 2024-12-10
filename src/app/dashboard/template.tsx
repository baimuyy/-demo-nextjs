import Count from '@/components/count'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`antialiased box`}>
      <h2>path: dashboard / template</h2>

      <Count></Count>

      {children}
    </div>
  )
}
