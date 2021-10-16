import React from 'react'
import Footer from './footer'
import Dashboard from './dashboard2'
import Layout from '../styleW/layout'

const All = ({ children }) => {
    return (
        <Layout>


            <Dashboard />

            <div className='w-100'>
                {children}
            </div>


            <Footer />

        </Layout>
    )
}

export default All