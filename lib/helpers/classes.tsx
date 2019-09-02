const classes = (o: (string | undefined)[]): string => {
  return o.filter(Boolean).join(' ')
}

export default classes