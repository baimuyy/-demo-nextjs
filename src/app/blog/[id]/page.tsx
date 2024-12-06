import { Card } from 'antd'
import { cardList } from '@/data'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// 动态 metadata
export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id

  return {
    title: `博客详情 - ${id}`,
  }
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id
  const cardInfo = cardList.find((item) => item.id === id)! // 添加非空断言

  return (
    <Card title={cardInfo.title}>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  )
}
