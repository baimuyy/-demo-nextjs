import { Modal } from './modal'
import { Image } from 'antd'
import { imgList } from '@/data'

export default async function Dashboard({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const imgInfo = imgList.find((item) => item.id === id)!

  return (
    <Modal>
      <div>app / @modal / [id] / page.js，测试“路由拦截”</div>
      <div>
        <h4>{imgInfo.title}</h4>
        <Image width={200} src={imgInfo.url} alt={imgInfo.title} />
      </div>
    </Modal>
  )
}
