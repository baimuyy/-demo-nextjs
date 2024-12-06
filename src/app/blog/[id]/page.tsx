import { Card } from 'antd'
import { cardList } from '@/data'

type Props = {
  params: {
    id: string
  }
}

// 动态 metadata
export async function generateMetadata({ params }: Props) {
  const cardInfo = cardList.find((item) => item.id === params.id)! // 添加非空断言

  return {
    title: `博客详情 - ${cardInfo.title}`,
  }
}

export default function Page({ params }: Props) {
  const cardInfo = cardList.find((item) => item.id === params.id)! // 添加非空断言

  return (
    <Card title={cardInfo.title}>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  )
}
