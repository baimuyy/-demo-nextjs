import React from 'react'
import { Metadata } from 'next'
import { Image } from 'antd'
import { imgList } from '@/data'

export const metadata: Metadata = {
  title: 'User',
}

interface Porps {
  params: Promise<{
    id: string
  }>
}

export default async function Dashboard({ params }: Porps) {
  const id = (await params).id
  const imgInfo = imgList.find((item) => item.id === id)!

  return (
    <div>
      <div>app / photo / [id] / page.js，测试“路由拦截”</div>
      <div>
        <h4>{imgInfo.title}</h4>
        <Image width={200} src={imgInfo.url} />
      </div>
    </div>
  )
}
