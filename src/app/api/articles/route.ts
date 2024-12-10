import { NextRequest, NextResponse } from 'next/server'
import db from '@/db'

export const dynamic = 'force-dynamic' // 用来强制清除缓存

// 创建
export async function POST(request: Request) {
  const data = await request.json()
  const id = Math.random().toString(36).slice(8)

  await db.update(({ articles }) =>
    articles.unshift({
      id,
      ...data,
    })
  )

  return NextResponse.json({
    code: 0,
    message: 'success',
    data: id,
  })
}

// 查列表
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const pageNum = Number(searchParams.get('pageNum')) || 1
  const pageSize = Number(searchParams.get('pageSize')) || 5
  const query = searchParams.get('query') || ''

  const data = db.data.articles
  let filterData = query
    ? data.filter((item) => {
        const { id, ...rest } = item
        return Object.values(rest).some((val) =>
          String(val).toLowerCase().includes(query.toLowerCase())
        )
      })
    : data

  const total = filterData.length
  const startIndex = (pageNum - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, total)

  filterData = startIndex > total ? [] : filterData.slice(startIndex, endIndex)

  return NextResponse.json({
    code: 0,
    message: 'success',
    data: {
      list: filterData,
      total,
    },
  })
}
