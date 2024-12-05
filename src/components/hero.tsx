import React from 'react'
import Image from 'next/image'
import heroImg from '/public/xy.png'

export default function Hero() {
  return (
    <div>
      <span>图片组件</span>
      <Image src={heroImg} alt="page-bg"></Image>
    </div>
  )
}
