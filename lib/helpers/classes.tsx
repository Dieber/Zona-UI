const classes = (o: any): string => {
  return o.filter((v: Array<any>) => { return v}).join(' ')
}

export default classes