// import React, {useEffect} from 'react';
// import logo from '../assets/logo.png'
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Navbar() {

//     const navigate = useNavigate()
    // const {user} = useUser()
    // const {openSignIn} = useClerk()

//         useEffect(() => {

//         // GSAP animations (ported from original)
//         gsap.to(".navbar", {
//             backgroundColor: "black",
//             duration: 0.5,
//             height: "20.4%",
//             scrollTrigger: {
//                 trigger: ".navbar",
//                 scroller: "body",
//                 start: "top -10%",
//                 end: "top -11%",
//                 scrub: 1,
//             },
//         });

//     }, []);

//   return (
//     <div className="navbar h-[160px] fixed z-20 w-full flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
//         <img src={logo} alt="" className='w-32 cursor-pointer sm:w-44' onClick={() => navigate("/")}/>
        // { user ? <UserButton/> : (<button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/></button> )}
//     </div>
//   )
// }

// export default Navbar

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

gsap.registerPlugin(ScrollTrigger);

function Navbar() {

    const navigate = useNavigate()
        const {user} = useUser()
    const {openSignIn} = useClerk()

     useEffect(() => {

      const link = document.createElement("link");
link.rel = "stylesheet";
link.href ="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
document.head.appendChild(link);

        // GSAP animations (ported from original)
        gsap.to(".navbar", {
            backgroundColor: "black",
            duration: 0.5,
            height: "13.2%",
            scrollTrigger: {
                trigger: ".navbar",
                scroller: "body",
                start: "top -10%",
                end: "top -11%",
                scrub: 1,
            },
        });

    }, []);

  return (
    <div className="navbar fixed z-[99] flex justify-between items-center sm:px-14 px-2.5 w-full py-1 sm:py-2.5">
        <div className="logocont h-[97px] w-[186px]">
                    <img
                        onClick={() => navigate('/')}
                        className="logo cursor-pointer hover:h-[94px] transition-all ease-in-out ancr h-24"
                        src={logo}
                        alt="logo"
                        />
                        </div>
                { user ? (<div className="nav flex items-center gap-3 sm:gap-12">
                    <div className="navitem flex justify-center items-center">
                        <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>CAREER PATHS</NavLink>   
                    </div>
                    <div className="navitem flex justify-center items-center">
                        <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>ROADMAPS</NavLink>   
                    </div>
                    <div className="navitem flex justify-center items-center">
                        <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>RESOURCES</NavLink>   
                    </div>
                    <div className="navitem flex justify-center items-center">
                        <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>TECH EVENTS</NavLink>   
                    </div>
                                        <div className="navitem flex justify-center items-center">
                        <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>COMMUNITY</NavLink>   
                    </div>
                    {/* <div id="lastnav" className="navitem">
                        <a className="ancr" href="events page.html">
                            EVENTS
                        </a>
                    </div> */}
                </div>) : null}
                        { user ? <UserButton /> : (<button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/></button> )}
            </div>
  )
}

export default Navbar