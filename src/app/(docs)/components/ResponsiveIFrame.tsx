'use client'

import React, { useState } from 'react'

import IFrameSkeleton from './IFramerSkeleton'

interface SkeletonProps {
  src: string
  width: string
  height: string
  loaderClass?: string
}

const ResponsiveIframe: React.FC<SkeletonProps> = ({
  src,
  width = '100%',
  height = '640',
  loaderClass = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div style={{ position: 'relative', width, height }}>
      {!isLoaded && <IFrameSkeleton className={loaderClass} />}

      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 'none', display: isLoaded ? 'block' : 'none' }}
        onLoad={() => setIsLoaded(true)}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default ResponsiveIframe
