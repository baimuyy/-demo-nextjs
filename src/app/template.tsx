export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>我是tempalte</div>
      <div>{children}</div>
    </div>
  )
}
