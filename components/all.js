import React from 'react'
import Footer from './footer'
import Dashboard from './dashboard'
import Layout from '../styleW/layout'

const All = ({ children }) => {
    return (
        <Layout>
            <div className='d-flex '>

                <Dashboard />

                <div className='w-100'>
                    {children}
                </div>
            </div>

            <Footer />

        </Layout>
    )
}

export default All