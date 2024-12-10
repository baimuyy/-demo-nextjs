import React from 'react'
import { Metadata } from 'next'
import { Image } from 'antd'
import { imgList } from '@/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'User',
}

export default function Page() {
  return (
    <div>
      <div>app / photo / page.js，测试“路由拦截”</div>
      <ul className="list">
        {imgList.map((item) => (
          <li>
            <Link href={`/photos/${item.id}`} passHref>
              <Image width={200} key={item.id} src={item.url} preview={false} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
