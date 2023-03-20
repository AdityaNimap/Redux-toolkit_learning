import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './icecreamSlice'

const IcecreamView = () => {
    const noOfIcecream = useSelector((state)=>state.icecream.numOfIcecream)
    const dispatch = useDispatch ()
  return (
    <div>
      <h2>Number of Icecreams - {noOfIcecream} </h2>
      <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView
