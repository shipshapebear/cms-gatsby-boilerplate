import React from 'react'
import { Slice } from 'gatsby';

type Layout = {
    children: React.ReactNode
}
const Layout = ({ children }: Layout) => {

    console.log(`Layout render: ${true}`)
    return (
        <>
            <Slice alias='header' />
            <main className='min-h-screen flex-1'>
                <div className="max-w-screen-xl mx-auto">
                    {children}
                </div>
            </main>
            <Slice alias='footer' />
        </>
    )
}

export default Layout