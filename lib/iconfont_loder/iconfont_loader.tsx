import React from 'react'

interface IconfontLoaderProps {
    iconUrl: string, 
}

interface IIconfontLoader extends React.FunctionComponent<IconfontLoaderProps> {
    isIconFontUrl(iconUrl: string): boolean
}

const IconfontLoader: IIconfontLoader = (props) => {
    const { iconUrl } = props;
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
