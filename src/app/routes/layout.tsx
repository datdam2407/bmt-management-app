'use client';

import React from 'react'

interface DashBoardLayoutProps {
    children: React.ReactNode
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {
    return (
        <div>
            <nav className='bg-black text-white py-4 px-5 flex justify-between items-center'> <h3 className='text-xl'>Logo</h3>
                <ul className='flex items-center gap-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>ss</li>
                </ul>
            </nav>
            <div className='flex'>
                <div className='h-screen bg-black w-[20vw]'>
                    <ul className='pt-5 px-2 text-white flex-col gap-5 flex'>
                        <li>
                            Dash Board a
                        </li>
                        <li>
                            Dash Board b
                        </li>
                        <li>
                            Dash Board c
                        </li>
                    </ul>
                </div>
                <div className='p-4'>
                        {props.children}
                    </div>
            </div>

        </div>
    )
}
export default DashBoardLayout