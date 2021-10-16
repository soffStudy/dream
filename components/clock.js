import React, { useState } from 'react'
import Dash2W from './Dash2W'


const Clock = () => {

    let time = new Date().getSeconds();
    let times = new Date();


    const [ctime, setCtime] = useState(time)

    const soat=()=>{
        let time= new Date().getSeconds();
        setCtime(time)

    }

    setInterval(soat,1000);

    return (
        <Dash2W>
        <div className='d-flex'>
            <span className={times.getMinutes()<= 9 && "d-block" || "d-none"}>0</span>
            <p>{times.getHours()}:</p>

            <span className={times.getMinutes()<= 9 && "d-block" || "d-none"}>0</span>
            <p> {times.getMinutes()} </p>

            <div className='secondCard'>
                <p className={`seconds  ${times.getSeconds()<= 9 && "d-block" || "d-none"}`}>0</p>
                <p className='seconds'>{ctime}</p>
            </div>            
        </div>
        </Dash2W>
    )
}

export default Clock
