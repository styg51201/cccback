

export const couponListData = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_DATA':
        return action.value
      default:
        return state
    }
  }

export const adListData = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_DATA':
        return action.value
      default:
        return state
    }
}
  