# react-native-uploadcare-image

## Example

```js
import UploadcareImage from 'react-native-uploadcare-image'
import defaultImage from './default-image.jpg'

export default function Avatar () {
  const url = 'http://www.ucarecdn.com/cca76eb6-1d25-4fee-a7a9-9516cc161b73/'
  return (
    <UploadcareImage
      url={url}
      width={32}
      height={32}
      style={{ borderRadius: 16 }}
      defaultImage={defaultImage} />
  )
  // url is transformed into:
  // http://www.ucarecdn.com/cca76eb6-1d25-4fee-a7a9-9516cc161b73/-/scale_crop/64x64/center/-/quality/lighter/
  // ...but `resizeImage` prop can be passed to customise:
  // `resizeImage={(url, width, height) => { return /* ... */ }}`
}
```
