import React, { useState } from 'react'

const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time)

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(UpdateTime, 1000)

    return (
        <div>
            {ctime}
        </div>
    )
}

export default Clock
