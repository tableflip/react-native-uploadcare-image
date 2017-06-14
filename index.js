import React from 'react'
import { Image } from 'react-native'

export default function UploadcareImage ({
  url,
  width,
  height,
  style,
  defaultImage,
  resizeImage = scaleCropResizeImage,
  ...props
}) {
  if (!url && !defaultImage) return null
  const source = url ? { uri: resizeImage(url, width, height) } : defaultImage
  style = (Array.isArray(style) ? style : [style]).concat({ width, height })
  return <Image style={style} source={source} resizeMode='cover' {...props} />
}

export function appendOp (url, op) {
  const parts = url.split('/')

  if (url[url.length - 1] === '/') {
    parts[parts.length - 1] = op
  } else {
    parts[parts.length - 1] = op + parts[parts.length - 1]
  }

  return parts.join('/')
}

export function scaleCropResizeImage (url, width, height) {
  if (url.indexOf('ucarecdn') === -1) return url
  return appendOp(url, `-/scale_crop/${width * 2}x${height * 2}/center/-/quality/lighter/`)
}
