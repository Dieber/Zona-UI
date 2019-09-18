import {
  scopedClass,scopedClassWithExtra,extraClassWithScoped
} from '../scopedClass'


describe('scopedClassWithExtra test', function() {
  it('should return a string', () => {
    let result = scopedClassWithExtra('test')('go', 'class2', {'go2': true})('class3')
    expect(typeof result).toEqual('string')
  })

  it('should return a className exactly', () => {
    let result = scopedClassWithExtra('test-')('go', 'class2', {'go2': true})('class3')
    expect(result).toEqual('test-go test-class2 test-go2 class3')
  })
  it('no prefix or extra args', () => {
    let result1 = scopedClassWithExtra('test-')()('class3')
    let result2 = scopedClassWithExtra('test-')('go')()
    expect(result1).toEqual('class3')
    expect(result2).toEqual('test-go')
  })
})


describe('extraClassWithScoped test', function() {
  it('should return a string', () => {
    let result = extraClassWithScoped('test')('go', 'class2', {'go2': true, 'go3': false})('class3')
    expect(typeof result).toEqual('string')
  })

  it('should return a className exactly', () => {
    let result = extraClassWithScoped('test-')('go', 'class2', {'go2': true, 'go3': false})('class3')
    expect(result).toEqual('go class2 go2 test-class3')
  })
  it('no prefix or extra args', () => {
    let result1 = extraClassWithScoped('test-')()('class3')
    let result2 = extraClassWithScoped('test-')('go')()
    expect(result1).toEqual('test-class3')
    expect(result2).toEqual('go')
  })
})

describe('scopedClass test', function() {
  it('should return a string', () => {
    let result = scopedClass('test')('go', 'class2', {'go2': true})
    expect(typeof result).toEqual('string')
  })

  it('should return a className exactly', () => {
    let result = scopedClass('test-')('go', 'class2', {'go2': true, 'go3': false})
    expect(result).toEqual('test-go test-class2 test-go2')
  })
})
