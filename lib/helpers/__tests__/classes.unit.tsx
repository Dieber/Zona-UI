import scopedClass from '../scopedClass'


describe('test', function() {
  it('should return a string', () => {
    let result = scopedClass('test')('go', 'class2', {'go2': true})('class3')
    expect(typeof result).toEqual('string')
  })

  it('should return a className exactly', () => {
    let result = scopedClass('test-')('go', 'class2', {'go2': true})('class3')
    expect(result).toEqual('test-go test-class2 test-go2 class3')
  })
  it('no prefix or extra args', () => {
    let result1 = scopedClass('test-')()('class3')
    let result2 = scopedClass('test-')('go')()
    expect(result1).toEqual('class3')
    expect(result2).toEqual('test-go')
  })
  // it('should return a string', () => {
  //   let result = scopedClass(['own', 'button', 'dieber'])
  //   expect(typeof result).toEqual('string')
  // })

})


