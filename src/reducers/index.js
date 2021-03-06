import { combineReducers } from 'redux'

import { orderlistData } from '../pages/component/ship/reducers'

import {
  productListData,
  userCommentData,
  replyCommentData,
} from '../pages/component/message/reducers'


import { 
  couponListData,
  adListData,
  adClickItemData 
} from '../pages/component/stacey/reducer'


// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
  orderlistData,
  productListData,
  userCommentData,
  replyCommentData,
  couponListData,
  adListData,
  adClickItemData,
})

export { rootReducer }
