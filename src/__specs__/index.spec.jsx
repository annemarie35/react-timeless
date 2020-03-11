import React from 'react'
import { shallow } from 'enzyme'

import { Timeless } from '../index'

describe('Timeless', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      // given
      const props = {
        data: [
          {
            start: 556
          }
        ]
      }

      // when
      const wrapper = shallow(
        <Timeless {...props}>
          <div />
        </Timeless>
      )

      // then
      expect(wrapper).toBeDefined()
      expect(wrapper).toMatchSnapshot()
    })
  })
})