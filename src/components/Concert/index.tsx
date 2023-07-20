import React from "react"
import { Link } from "react-router-dom"
import CountdownTimer from "../CountDownTimer"
import './concert.css'


const Concert = () => {
  return (
    <React.Fragment>
        <h1>Concert</h1>
        <CountdownTimer countDownDate="2023/07/28" ></CountdownTimer>
        <div className="d-flex justify-content-center w-100 gap-2">
            <Link onClick={() => {
                    localStorage.clear()
            }} to='/login' preventScrollReset={true}>Login</Link>

            <Link to='/about' preventScrollReset={true}>About</Link>
    
        </div>
    </React.Fragment>
  )
}

export { Concert }