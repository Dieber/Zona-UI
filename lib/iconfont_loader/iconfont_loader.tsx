import React from 'react'

interface IconfontLoaderProps {
  iconUrl: string,
}

interface IIconfontLoader extends React.FunctionComponent<IconfontLoaderProps> {
  isIconFontUrl(iconUrl: string): boolean
}

const haveSameUrl = (iconUrl: string): boolean => {
  let nodes = document.querySelectorAll('script')
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].getAttribute('src') === iconUrl){
      return true
    }
  }
  return false
}

const IconfontLoader: IIconfontLoader = (props) => {
  const { iconUrl } = props;
  if (haveSameUrl(iconUrl)) {
    return null
  }

  if (!IconfontLoader.isIconFontUrl(iconUrl)) {
    throw new Error('Not Iconfont')
  }
  let script = document.createElement('script');
  script.src = iconUrl;
  script.onerror = () => {
    throw new Error('Icon Failed')
  }
  document.body.append(script)
  return null
}

IconfontLoader.isIconFontUrl = function (iconUrl: string) {
  return /at\.alicdn.com\/t\/font.*\.js/.test(iconUrl)
}

export default IconfontLoader
