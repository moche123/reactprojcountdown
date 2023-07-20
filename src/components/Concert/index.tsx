import React from "react"
import { Link } from "react-router-dom"
import CountdownTimer from "../CountDownTimer"

const Concert = () => {
  return (
    <React.Fragment>
        <h1>Concert</h1>
        <CountdownTimer countDownDate="2023/07/28" ></CountdownTimer>
        <Link onClick={() => {
            localStorage.clear()
        }} to='/login' preventScrollReset={true}>Login</Link>
    </React.Fragment>
  )
}

export { Concert }