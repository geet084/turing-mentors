import * as actions from './index'

describe('actions', () => {
  it('should return the isLoading action with a type and bool', () => {
    const bool = true
    const expected = { type: 'IS_LOADING', isLoading: true }

    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })
})