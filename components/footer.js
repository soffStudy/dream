import React, { useState } from 'react'
import FooterWrapper from '../styleW/footerW'

const Footer = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <FooterWrapper>
            <div className="container">
                <div className='footer'>
                    <img src="logoSchool.jpg" alt="logo rasm 4k photo tv noutbook 2021 covid" />
                    <h3>Консалтинг</h3>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
