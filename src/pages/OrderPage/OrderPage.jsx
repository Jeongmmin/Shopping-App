// rfce
import React, { useContext } from 'react'
import Type from './Type'

function OrderPage() {

  // const [orderDatas] = useContext(OrderContext);

  return (
    <div>
    <h1>주문 페이지</h1>
    <div>
      <Type orderType="products" />
    </div>
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: "50%" }}>
        <Type orderType="options" />
      </div>
      <div>
        {/* <h2>총 가격: {orderDatas.totals.total}</h2> */}
        <h2>총 가격: </h2>
        <br />
        {/* <button onClick={() => setStep(1)}>주문하기</button> */}
        <button >주문하기</button>
      </div>
    </div>
  </div>
  )
}

export default OrderPage