import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button/button'
describe('buttonn', () => {
    it('是个div', () => {
        const json = renderer.create(<Button />).toJSON()
        // 期待这个虚拟DOM的json匹配
        expect(json).toMatchSnapshot()
    })
})
