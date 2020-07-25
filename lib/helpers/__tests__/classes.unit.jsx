import classes, {scopedClassMaker} from '../classes'

describe('classes', () => {
  it('他接受两个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('不接受 undefined null false特殊值', () => {
    const result = classes('a', '中文', undefined, false, null)
    expect(result).toEqual('a 中文')
  })
  it('他接收 0 个className', () => {
    const result = classes('')
    expect(result).toEqual('')
  })
})

describe('scopedClassMaker', () => {
  it('className接收 一个对象 或 一个字符串', () => {
    const sc = scopedClassMaker('sun-layout')
    expect(sc('')).toEqual('sun-layout')
    expect(sc('x')).toEqual('sun-layout-x')
    expect(sc({y: true, z: false})).toEqual('sun-layout-y')
    expect(sc({x: true, y: true})).toEqual('sun-layout-x sun-layout-y')
    expect(sc({x: true, y: true}, {extra: 'red'})).toEqual('sun-layout-x sun-layout-y red')
  })
})