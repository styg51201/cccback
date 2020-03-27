import React, { useState, useEffect, useSelector } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import './addCoupon.scss'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

const AddCoupon = () => {


    return (
        <>
        <div className="wrapper-content row">
            <div className="ibox col-7">
                <div className="ibox-title">
                    <p>新增優惠券</p>
                </div>
                <div className="ibox-content sty-box-content">
                    <form class="sty-addForm" action="">
                        {/* <!-- 1.優惠對象 --> */}
                        <div class="title">
                            <h3>請選擇優惠商品對象</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div>
                                <input type="radio" id="object_0" name="object" value="0" />
                                <label for="object_0"><div className="sty-radio"></div>全部商品</label>
                            </div>
                            <div>
                                <input type="radio" id="object_1" name="object" value="1"/>
                                <label for="object_1"><div className="sty-radio"></div>依照分類</label>
                            </div>
                            <div>
                                <input type="radio" id="object_2" name="object" value="2"/>
                                <label for="object_2"><div className="sty-radio"></div>指定商品</label>
                            </div>
                        </div>
                        {/* <!-- 2.生效條件 --> */}
                        <div class="title">
                            <h3>請選擇生效條件類型</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div>
                                <input type="radio" id="rule_0" name="rule" value="0"/>
                                <label for="rule_0"><div className="sty-radio"></div>沒有條件</label>
                            </div>
                            <div class="row sty-flex">
                                <div class="col-4">
                                <input type="radio" id="rule_1" name="rule" value="1"/>
                                <label for="rule_1"><div className="sty-radio"></div>單筆訂單指定件數</label>
                                </div>

                                <div class="sty-secondInput col">
                                <label for="">請輸入件數 : </label>
                                <input type="text" id="" name="ruleNum" min="1"/>
                                </div>
                            </div>
                            <div class="row sty-flex">
                                <div class="col-4">
                                <input type="radio" id="rule_2" name="rule" value="2"/>
                                <label for="rule_2"><div className="sty-radio"></div>單筆訂單指定金額</label>
                                </div>

                                <div class="sty-secondInput col">
                                <label for="all">請輸入金額 : </label>
                                <input type="text" id="b" name="ruleNum" min="1" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- 3.優惠類型 --> */}
                        <div class="title">
                            <h3>請選擇優惠類型</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div class="row sty-flex">
                                <div class="col-4">
                                <input type="radio" id="discount_0" name="discount" />
                                <label for="discount_0"><div className="sty-radio"></div>折扣固定金額</label>
                                </div>
                                <div class="sty-secondInput col">
                                <label for="">請輸入金額 : </label>
                                <input type="text" id="" name="discount_Num" min="1" />
                                <p class="sty-small">
                                    (填寫的數字必須大於 0。例：20 代表 減$20； 70 代表 減$70。)
                                </p>
                                </div>
                            </div>

                            <div class="row sty-flex">
                                <div class="col-4">
                                <input type="radio" id="discount_1" name="discount" />
                                <label for="discount_1"><div className="sty-radio"></div>折扣 % 數</label>
                                </div>
                                <div class="sty-secondInput col">
                                <label for="all">請輸入金額 : </label>
                                <input type="text" id="b" name="discount_Num" min="1" />
                                <p class="sty-small">
                                    (填寫1-10之間任何數字。例：8 代表 八折； 7.5 代表 75折。)
                                </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 4.優惠券日期 --> */}
                        <div class="title">
                            <h3>請選擇優惠券開始及結束日期</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div class="mb-3">
                                <label for="all">開始日期 : </label>
                                <input type="text" id="all" name="start" className="hasDatepicker"/>
                            </div>
                            <div>
                                <label for="all">結束日期 : </label>
                                <input type="date" id="all" name="due" />
                            </div>
                        </div>
                        {/* <!-- 5.發放的數量 --> */}
                        <div class="title">
                            <h3>請輸入優惠券發放數量的上限</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div>
                                <label for="all">請輸入數量 : </label>
                                <input type="text" id="all" name="count" min="50" />
                            </div>
                            <p class="sty-small">(請填寫至少50以上的數量。)</p>
                        </div>
                        {/* <!-- 6.上傳檔案 --> */}
                        <div class="title">
                            <h3>請選擇上傳的圖片</h3>
                        </div>
                        <div class="sty-inputGroup">
                            <div>
                                <label for="all"> 請上傳圖片 </label>
                                <input type="file" id="all" name="img" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}






// 選擇對應的reducer
const mapStateToProps = store => {
    return {
      
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        
      },
      dispatch
    )
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCoupon))
