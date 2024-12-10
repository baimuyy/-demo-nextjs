import { JSONFilePreset } from 'lowdb/node'

type articlesProps = {
  id: string
  title: string
  content: string
}[]

const defaultData: { articles: articlesProps } = { articles: [] }

const db = await JSONFilePreset('db.json', defaultData)

export default db

/**
 * ! 手动修改 db.json 会出现接口报错问题
 */
