import { NextResponse } from 'next/server'
import db from '@/db'

interface IParams {
  params: Promise<{
    id: string
  }>
}

// 删除
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(async ({ articles }) => {
    const id = (await params).id
    const idx = articles.findIndex((post) => post.id === id)
    articles.splice(idx, 1)
  })

  return NextResponse.json({
    code: 0,
    message: 'success',
  })
}

// 修改
export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json()
  const id = (await params).id
  let idx = -1

  await db.update(({ articles }) => {
    idx = articles.findIndex((post) => post.id === id)
    articles[idx] = { ...articles[idx], ...data }
  })

  return NextResponse.json({
    code: 0,
    message: 'success',
    data: db.data.articles[idx],
  })
}

// 查询
export async function GET(request: Request, { params }: IParams) {
  const id = (await params).id
  const data = db.data.articles.find((post) => post.id === id)

  return NextResponse.json({
    code: 0,
    message: 'success',
    data,
  })
}
