import { useEffect, useState } from 'react';
import styled from 'styled-components';
const defaultTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}


const Timer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    @media(min-width: 550px){
        grid-template-columns: repeat(auto-fit, minmax(50px,1fr));
    }
    .timerItem{
        padding: 2rem;
        text-align: center;
        font-size: 2rem; 

        .info{
            display: block;
            text-align: center;
            font-size: 1rem;
        }

    }


`
//4546546546544
//4546546546422

interface IProps {
    countDownDate: string
}


const CountdownTimer = ( props:IProps ) => {
    const [time, setTime] = useState(defaultTime);


    const updateTime = (countdownTime:number) => {
        const second = 1000,
              minute = second*60,
              hour = minute * 60,
              day = hour * 24;
    
        const now = new Date().getTime();
        const distance = countdownTime - now;
        const days = Math.floor(distance/day),
        hours = Math.floor((distance % day)/hour),
        minutes =Math.floor((distance % hour)/minute),
        seconds = Math.floor((distance % minute)/second)
    
        setTime({
            days,
            hours,
            minutes,
            seconds
        })
    
    }

    useEffect(() => {
       const intervalId = setInterval(() => {
            const countdownTime = new Date( props.countDownDate ).getTime()
            updateTime(countdownTime);
       },1000);


       return () => {
        clearInterval(intervalId);
       }

    }, [ props.countDownDate ]);


    return (
        <Timer>
            <div className='timerItem'>
                {time.days} <span className='info'>Days</span>
            </div>
            <div className='timerItem'>
                {time.hours} <span className='info'>Hours</span>
            </div>
            <div className='timerItem'>
                {time.minutes} <span className='info'>Minutes</span>
            </div>
            <div className='timerItem'>
                {time.seconds} <span className='info'>Seconds</span>
            </div>
        </Timer>
    )
}

export default CountdownTimer