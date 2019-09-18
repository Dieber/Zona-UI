import * as renderer from 'react-test-renderer'

import React from 'react'
import Icon from '../icon'

describe('Icon test', () => {
  it('is a Icon', () => {
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})