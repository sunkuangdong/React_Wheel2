import classes from "../helpers/classes";

describe('classes', () => {
  it('他接受两个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it("不接受 undefined null false特殊值", () => {
    const result = classes('a', '中文', undefined, false, null)
    expect(result).toEqual('a 中文')
  })
  it('他接收 0 个className', () => {
    const result = classes("")
    expect(result).toEqual('')
  })
})