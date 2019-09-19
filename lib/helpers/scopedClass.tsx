
interface ScArgs {
  [K: string]: boolean
}


const extraArray = (...extraArgs: Array<ScArgs | string>): string[] => {
  return Object.entries(
    Object.assign(
        {}, ...extraArgs.map(item => typeof item === 'string' ?  {[item] : true} : item)
    ))
    .filter(item => item[1])
    .map(item => item[0])
}

const prefixArray = (prefix: string, ...prefixArgs: Array<ScArgs | string>): string[] => {
  return Object.entries(
      Object.assign(
          {}, ...prefixArgs.map(item => typeof item === 'string' ?  {[item] : true} : item)
      ))
      .filter(item => item[1])
      .map(item => prefix + item[0])
}


const scopedClassWithExtra = (prefix: string) => (...prefixArgs: Array<ScArgs | string>) => (...extraArgs: Array<ScArgs | string>) => {
  let exArray = extraArray(...extraArgs)
  let pfxArray = prefixArray(prefix, ...prefixArgs)
  return pfxArray.concat(exArray).join(' ')
}

const extraClassWithScoped = (prefix: string) => (...extraArgs: Array<ScArgs | string>) => (...prefixArgs: Array<ScArgs | string>) => {
  let exArray = extraArray(...extraArgs)
  let pfxArray = prefixArray(prefix, ...prefixArgs)
  return exArray.concat(pfxArray).join(' ')
}


const scopedClass = (prefix: string) => (...prefixArgs: Array<ScArgs | string>) => {
  return scopedClassWithExtra(prefix)(...prefixArgs)()
}


export {
  scopedClass,scopedClassWithExtra,extraClassWithScoped
}

