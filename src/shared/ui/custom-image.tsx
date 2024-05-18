/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'

import { useState } from 'react'

interface CustomImageProps {
  src: string
  alt: string
  width: number | `${number}` | undefined
  height: number | `${number}` | undefined
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = '300',
  height = '300',
  ...props
}) => {
  const [showFullSize, setShowFullSize] = useState(false)

  const toggleFullSize = () => {
    setShowFullSize(!showFullSize)
  }

  return (
    <div onClick={toggleFullSize}>
      {showFullSize ? (
        <div>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <Image src={src} alt={alt} width={width} height={height} {...props} />
      )}
    </div>
  )
}
