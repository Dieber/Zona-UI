// describe('got it', function() {

// }, )

// test('hello', () => {
//   expect(1).toEqual(1)
// })

import * as renderer from 'react-test-renderer'

import React from 'react'
import Icon from '../icon'
// import Button from '../../button/button'

// describe('hello2', () => {
//   it('1 = 1', () => {
//     expect(1).toEqual(1)
//   })
// })



describe('Icon test', () => {
  it('is a Icon', () => {
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})