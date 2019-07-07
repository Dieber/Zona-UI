import classes from '../classes'


describe('classes test', function() {
  it('should return a string', () => {
    let result = classes(['own', 'button', 'dieber'])
    expect(typeof result).toEqual('string')
  })
})
