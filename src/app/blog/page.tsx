'use client'

import React from 'react'
import Link from 'next/link'
import { List, Avatar } from 'antd'
import { cardList } from '@/data/index'

export default function Page() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cardList}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
}
