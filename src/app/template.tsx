export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>path: app / template.js</div>
      <div>{children}</div>
    </>
  )
}
