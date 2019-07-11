import React from 'react';
interface IconfontLoaderProps {
    iconUrl: string;
}
interface IIconfontLoader extends React.FunctionComponent<IconfontLoaderProps> {
    isIconFontUrl(iconUrl: string): boolean;
}
declare const IconfontLoader: IIconfontLoader;
export default IconfontLoader;
