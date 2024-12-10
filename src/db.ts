import { JSONFilePreset } from 'lowdb/node'

type postsProps = {
  id: string
  title: string
  content: string
}[]

const defaultData: { posts: postsProps } = { posts: [] }

const db = await JSONFilePreset('db.json', defaultData)

export default db
