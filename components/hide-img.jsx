'use client'

import Image from 'next/image';

export default function HideImage({ isShrinkable = false, isVisible, className, src, fill, width }) {
  return (
    // TODO: convert to styled components
    (<div width={width} className={`${className ? className : ''} image-container-shrinkable ${isShrinkable ? (isVisible ? '' : 'shrink') : ''}`} >
      <Image src={src} fill={fill} />
    </div>)
  )
}