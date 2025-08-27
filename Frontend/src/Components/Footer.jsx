import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="lastgreencont">
                            {/* <img
                                className="lastdots"
                                src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-white.svg"
                                alt="dots"
                            /> */}
                            <div className="lastgreencon">
                                <div className="first">
                                    <NavLink to={''} >
                                        <img
                                            className="logof mb-2.5 ancr h-24"
                                            src={logo}
                                            alt="logo"
                                        />
                                    </NavLink>
                                    <p className='text-black text-[1rem] font-[500]'>Empowering Computer Science students with curated resources and real-time opportunities.</p>
                                </div>
                                <div className="sec">
                                    <a href="toptracer page.html" className="lastlinks ancr">
                                        CAREER PATHS
                                    </a>
                                    <a href="adventure golf page.html" className="lastlinks ancr">
                                        ROADMAPS
                                    </a>
                                    <a href="cafe page.html" className="lastlinks ancr">
                                        RESOURCES
                                    </a>
                                </div>
                                <div className="third">
                                    <a href="events page.html" className="lastlinks ancr">
                                        TECH EVENTS
                                    </a>
                                    <a href="golf lessons page.html" className="lastlinks ancr">
                                        COMMUNITY
                                    </a>
                                    <a href="contact page.html" className="lastlinks ancr">
                                        CONTACT US
                                    </a>
                                </div>
                                {/* <div className="fourth">
                                    <div className="lines">A20, SIDCUP BYPASS</div>
                                    <div className="lines">CHISLEHURST</div>
                                    <div className="lines">KENT</div>
                                    <div className="lines">BR7 6RP</div>
                                    <div className="lines">TEL: 0208 309 0181</div>
                                    <div
                                        id="maplink"
                                        className="lines ancr"
                                        onClick={() => (window.location.href = "https://goo.gl/maps/vp1uc8UaWRfrbrca9")}
                                    >
                                        GET DIRECTIONS
                                    </div>
                                </div> */}
                            </div>
                            <div className='h-[1px] w-[85%] mb-[-30px] bg-black'></div>
                            <div className="lastline">
                                © 2025 Resource.CS. Made with ❤️ for CS Students.
                            </div>
                        </div>
  )
}

export default Footer