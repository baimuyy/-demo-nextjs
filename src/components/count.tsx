'use client'

import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <h2>我是components count {count}</h2>

      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}
