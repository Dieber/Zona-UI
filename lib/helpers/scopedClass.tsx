
interface ScArgs {
  [K: string]: boolean
}


const scopedClass = (prefix: string) => (...prefixArgs: Array<ScArgs | string>) => (...extraArgs: Array<ScArgs | string>) => {
  
  let prefixArray = (Object.entries(
    Object.assign(
      {}, ...prefixArgs.map(item => typeof item === 'string' ?  {[item] : true} : item)
    ))
  .filter(item => item[1])
  .map(item => prefix + item[0]) as string[])

  let extraArray = (Object.entries(
    Object.assign(
      {}, ...extraArgs.map(item => typeof item === 'string' ?  {[item] : true} : item)
    ))
  .filter(item => item[1])
  .map(item => item[0]) as string[])

  return prefixArray.concat(extraArray).join(' ')
}

export default scopedClass