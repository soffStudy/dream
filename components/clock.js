import React, { useState } from 'react'
import DashWrapper from './Dash2W'


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
        <DashWrapper>
            <div className='d-flex mt-3'>
                <span className={times.getHours()<= 9 && "d-block" || "d-none"}>0</span>
                <p>{times.getHours()}:</p>

                <span className={times.getMinutes()<= 9 && "d-block" || "d-none"}>0</span>
                <p> {times.getMinutes()} </p>

                <div className='secondCard'>
                    <p className={`seconds  ${times.getSeconds()<= 9 && "d-block" || "d-none"}`}>0</p>
                    <p className='seconds'>{ctime}</p>
                </div>            
            </div>
        </DashWrapper>
    )
}

export default Clock
