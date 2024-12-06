import { Card } from 'antd'
import { cardList } from '@/data'

type Porps = {
  params: {
    id: string
  }
}

export default function Page({ params }: Porps) {
  const cardInfo = cardList.find((item) => item.id === params.id)! // 添加非空断言

  return (
    <Card title={cardInfo.title}>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  )
}
