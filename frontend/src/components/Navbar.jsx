import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState(false)
    const [isSmall, setIsSmall] = useState(true)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowSize <= 640) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
    }, [windowSize]);

    return (
        <div className='px-4 flex items-center justify-center sm:justify-between min-w-screen'>
            <Link to="/">
                <img src="/fitgenius.svg" alt="" className='w-40 md:w-56 lg:w-80' />
            </Link>
            {!isSmall ?
                <button className='absolute right-0 mr-3 cursor-pointer text-black font-semibold bg-white py-2 lg:py-3 px-6 lg:px-10 rounded-full md:relative md:mr-8'>Login</button>
                :
                <div className='absolute right-0 top-3 mr-5 cursor-pointer'>
                    <img src="/user-profile.png" alt="" width={20} height={20} />
                </div>
            }
        </div>
    )
}

export default Navbar