// import React from 'react';
// import video from '../assets/140578-775389242_small.mp4'

// function LandingPage() {
//   return (
//     <div className="absolute top-0 z-10 w-full h-screen overflow-x-hidden">
//   {/* Background Video */}
//   <video
//     src={video}
//     autoPlay
//     muted
//     loop
//     className="absolute top-0 left-0 w-full h-full object-cover"
//   ></video>

//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/57"></div>

//   {/* Hero Content */}
//   <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//     <h1 className="text-4xl md:text-6xl font-bold text-white">
//       Explore Computer Science Careers
//     </h1>
//     <p className="text-lg md:text-2xl text-gray-200 mt-4 max-w-2xl">
//       Roadmaps and guidance for aspiring developers, engineers, and tech
//       innovators.
//     </p>
//     <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg shadow-lg transition">
//       Get Started
//     </button>
//   </div>

{/* Career Paths Section */ }
{/* <div className="relative z-10 bg-white py-16 px-6 md:px-20">
    <h2 className="text-3xl font-bold text-center mb-10">
      Popular Career Paths
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
        <p className="text-gray-600">
          Learn frontend, backend, and full-stack development roadmaps.
        </p>
      </div>
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
        <p className="text-gray-600">
          Explore machine learning, deep learning, and AI career guides.
        </p>
      </div>
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
        <p className="text-gray-600">
          Roadmaps for ethical hacking, SOC analyst, and security experts.
        </p>
      </div>
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Data Science</h3>
        <p className="text-gray-600">
          From data analysis to machine learning pipelines.
        </p>
      </div>
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
        <p className="text-gray-600">
          iOS, Android, and cross-platform app development.
        </p>
      </div>
      <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
        <p className="text-gray-600">
          Learn about cloud platforms, automation, and DevOps practices.
        </p>
      </div>
    </div>
  </div> */}

//   <div className="bg-red-400 h-[200vh]"></div>
// </div>
//   )
// }

// export default LandingPage


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import video from '../assets/140578-775389242_small.mp4'
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.jpg'
import pic0 from '../assets/pic0.jpg'

gsap.registerPlugin(ScrollTrigger);

// // NOTE: To preserve the *exact* look & feel, this component relies on
// // Tailwind's global CSS pipeline. Copy the CSS at the bottom (between
// // /** TAILWIND GLOBALS START **/ and /** TAILWIND GLOBALS END **/) into
// // your Tailwind global stylesheet (e.g., src/index.css or app/globals.css)
// // inside an @layer block as shown. Also add the Google Font link in your
// // <head> (public/index.html or app/layout.tsx).

export default function LandingPage() {

    useEffect(() => {

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
        document.head.appendChild(link);

        // GSAP animations (ported from original)
        // gsap.to(".navbar", {
        //     backgroundColor: "black",
        //     duration: 0.5,
        //     height: "20.4%",
        //     scrollTrigger: {
        //         trigger: ".navbar",
        //         scroller: "body",
        //         start: "top -10%",
        //         end: "top -11%",
        //         scrub: 1,
        //     },
        // });

        gsap.to("#main", {
            backgroundColor: "black",
            scrollTrigger: {
                trigger: "#main",
                scroller: "body",
                start: "top -10%",
                end: "top -80%",
                scrub: 1,
            },
        });

    }, []);

    return (
        <div className="w-full text-white overflow-x-hidden" >
            {/* Background video */}
            <video
                className="vidtop h-[100%] w-[100%] fixed object-cover z-[-1]"
                autoPlay
                muted
                loop
            // poster="https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_1280.jpg"
            >
                <source
                    src={video}
                    type="video/mp4"
                />
            </video>

            {/* Navbar */}
            <Navbar />

            {/* Main */}
            <div id="main" className="overflow-hidden relative bg-[rgba(0,0,0,0.466)] h-full w-full m-0 p-0">
                {/* Page 1 */}
                <div className="page1 h-screen w-full relative flex justify-center items-center flex-col text-center z-[10]">
                    <h1 id="tophead1" className="tophead font-[900] text-[7rem] m-0 text-white absolute top-[220px]">
                        LEARN.TRANSFORM.
                    </h1>
                    <h1 id="tophead2" className="tophead font-[900] text-[7rem] m-0 text-white absolute top-[330px]">
                        ACHIEVE.
                    </h1>
                    <h3 id="subtophead" className="text-[2rem] font-[900] absolute mt-[30px] text-white top-[440px]">YOUR ULTIMATE COMPUTER SCIENCE LEARNING HUB!</h3>
                    <p className="toppara m-0 text-[1.5rem] text-white absolute top-[530px] w-[70%]">
                        Discover curated learning resources, stay updated with tech events, and accelerate your Computer Science journey with our comprehensive platform designed for students.
                    </p>
                </div>

                {/* <a href="#scroller" className="ancr" id="arrowdown">
                    <img
                        id="arrow"
                        src="https://cdn.pixabay.com/photo/2013/07/13/10/30/icon-157360_640.png"
                        alt="down"
                    />
                </a> */}

                {/* Page 2 */}
                <div className="page2">
                    <div id="scroller">
                        <div id="scroller-in">
                            <h4>CAREER PATHS</h4>
                            <h4>ROADMAPS</h4>
                            <h4>RESOURCES</h4>
                            <h4>TECH EVENTS</h4>
                            {/* <h4>LEAGUES</h4> */}
                        </div>
                        <div id="scroller-in">
                            <h4>CAREER PATHS</h4>
                            <h4>ROADMAPS</h4>
                            <h4>RESOURCES</h4>
                            <h4>TECH EVENTS</h4>
                            {/* <h4>LEAGUES</h4> */}
                        </div>
                    </div>

                    <div id="about">
                        <img
                            id="aboutpic1"
                            className="aboutpics"
                            src={pic0}
                            alt="about 1"
                        />
                        <div className="aboutcontent">
                            <h2 className="abouthead">ABOUT US</h2>
                            <p className="abouttxt">
                                We are dedicated to guiding students and professionals in exploring Computer Science career paths. Our platform provides structured roadmaps, curated resources, and updates on upcoming tech events to help learners stay ahead in the fast-evolving tech world. Whether you aim to become a software developer, data scientist, AI engineer, or cybersecurity expert, we make the journey clearer and easier. Our mission is to empower learners with the right knowledge, tools, and opportunities to build successful careers in technology.
                            </p>
                        </div>
                        <img
                            id="aboutpic2"
                            className="aboutpics"
                            src={tech2}
                            alt="about 2"
                        />
                    </div>

                    <div className="cardscont">
                        <div
                            onClick={() => (window.location.href = "toptracer page.html")}
                            className="cards ancr"
                            id="card1"
                        >
                            <div className="overlay">
                                <h4>CAREER PATHS</h4>
                                <p>
                                    Our range delivers the same ball-tracking technology that traces the shots of the game’s best players
                                    on TV.Toptracer Range technology offers a fun, engaging, tech-driven experience that appeals to
                                    seasoned players, range rivals, friends, family members, and even first-time golfers.
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => (window.location.href = "adventure golf page.html")}
                            className="cards ancr"
                            id="card2"
                        >
                            <div className="overlay">
                                <h4>RESOURCES</h4>
                                <p>Adventure awaits you!</p>
                                <p>
                                    Become a Jurassic explorer as you delve into the land of the dinosaurs! Putt your way through
                                    prehistoric landscape, cascading waterfalls and meet some dinosaur friends along the way.
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => (window.location.href = "golf lessons page.html")}
                            className="cards ancr"
                            id="card3"
                        >
                            <div className="overlay">
                                <h4>COMMUNITY</h4>
                                <p>
                                    Passionate about player development, whether you are new to the game or an aspiring pro, we offer
                                    both group and individual lessons tailored to you with the sole focus of helping you reach your goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="green-div">
                        <div className="txtcon">
                            <h4>WHY CHOOSE RESOURCE.CS ?</h4>
                            {/* <h4>OFFERS</h4> */}
                            {/* <h4>STRAIGHT TO YOUR INBOX</h4> */}
                        </div>
                    </div>

                    <div id="food">
                        <div className="foodpicscon">
                            <img
                                className="foodpic"
                                id="food1"
                                src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-768x1152.jpg?strip=all&lossy=1&sharp=1&ssl=1"
                                alt="food1"
                            />
                            <img
                                className="foodpic"
                                id="food2"
                                src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&ssl=1"
                                alt="food2"
                            />
                            <img
                                className="foodpic"
                                id="food3"
                                src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1"
                                alt="food3"
                            />
                            <div className="foodbtncon">
                                <div id="foodborder1" className="foodborder">
                                    <div id="foodbtn1" className="foodbtn" />
                                </div>
                                <div id="foodborder2" className="foodborder">
                                    <div id="foodbtn2" className="foodbtn" />
                                </div>
                                <div id="foodborder3" className="foodborder">
                                    <div id="foodbtn3" className="foodbtn" />
                                </div>
                            </div>
                        </div>
                        <div className="foodtxt">
                            <h2>FOOD AND DRINK</h2>
                            <p>
                                Whether you’re getting ready to play, just finishing your practice session or feeling peckish on the
                                range, we have a variety of food and drink options bought directly to your table or bay.We make sure
                                that we cater for everyone, offering a range of vegan and gluten free options.
                            </p>
                            <button
                                onClick={() => (window.location.href = "cafe page.html")}
                                className="navbtn ancr"
                                id="foodtxtbtn"
                            >
                                COFFEE SHOP
                            </button>
                        </div>
                    </div>

                    <div className="insta">
                        <div className="insta-imgs">
                            <marquee>
                                {/* Image list duplicated to match original behavior */}
                                {[
                                    "447781550_991790659220634_5577119039868959224_nlow.jpg",
                                    "1030727008770120_6567554558293281910_nlow.jpg",
                                    "446478269139605_3616962284735382682_nlow.jpg",
                                    "435318823_258606790673865_2530423443188938293_nlow.jpg",
                                    "438948530_1484966565755090_1439835802890169023_nlow.jpg",
                                    "953403546173691_3308096617421948060_nlow.jpg",
                                    "453518734_1037047134723040_8073951644951463776_nlow.jpg",
                                    "447929470_988634446296987_6093112883687622864_nlow.jpg",
                                ].map((slug) =>
                                    [0, 1, 2].map((copyIndex) => (
                                        <img
                                            key={`${slug}-${copyIndex}`}
                                            className="ancr"
                                            onClick={() => (window.location.href = "https://www.instagram.com/sfg_uk/")}
                                            src={`https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/${slug}?strip=all&lossy=1&sharp=1&w=1920&ssl=1`}
                                            alt="insta"
                                        />
                                    ))
                                )}
                            </marquee>
                        </div>
                        <a className="ancr" href="https://www.instagram.com/sfg_uk/" target="_blank" rel="noreferrer">
                            <svg
                                className="insta-logo"
                                aria-hidden="true"
                                aria-label="Instagram"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                            <span>FOLLOW US ON INSTAGRAM</span>
                        </a>
                    </div>
                </div>

                {/* Page 3 */}
                <div id="page3">
                    <div className="coloncont">
                        <img
                            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
                            alt="qleft"
                            id="colon1"
                        />
                        <div className="colontxtcon">
                            <p id="colontxt1" className="colontxt">
                                Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a
                                fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over
                                there!
                            </p>
                            <p className="colontxt">
                                Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit
                                here, cafe does some nice goodies too 👍🏽
                            </p>
                        </div>
                        <img
                            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
                            alt="qright"
                            id="colon2"
                        />
                    </div>

                    <div className="waitingcont">
                        <div className="question">WHAT ARE YOU WAITING FOR?</div>
                        <div className="optionscont">
                            <div
                                onClick={() => (window.location.href = "toptracer page.html")}
                                id="option1"
                                className="options ancr"
                            >
                                TOPTRACER RANGE
                            </div>
                            <div
                                onClick={() => (window.location.href = "golf lessons page.html")}
                                id="option2"
                                className="options ancr"
                            >
                                GOLF LESSONS
                            </div>
                            <div
                                onClick={() => (window.location.href = "adventure golf page.html")}
                                id="option3"
                                className="options ancr"
                            >
                                ADVENTURE GOLF
                            </div>
                        </div>
                    </div>

                    <div className="lastgreencont">
                        <img
                            className="lastdots"
                            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-white.svg"
                            alt="dots"
                        />
                        <div className="lastgreencon">
                            <div className="first">
                                <a href="index.html">
                                    <img
                                        className="logo ancr"
                                        src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className="sec">
                                <a href="toptracer page.html" className="lastlinks ancr">
                                    TOPTRACER RANGE
                                </a>
                                <a href="adventure golf page.html" className="lastlinks ancr">
                                    CRAZY GOLF
                                </a>
                                <a href="cafe page.html" className="lastlinks ancr">
                                    Café
                                </a>
                            </div>
                            <div className="third">
                                <a href="events page.html" className="lastlinks ancr">
                                    events
                                </a>
                                <a href="golf lessons page.html" className="lastlinks ancr">
                                    golf lessons
                                </a>
                                <a href="contact page.html" className="lastlinks ancr">
                                    contact us
                                </a>
                            </div>
                            <div className="fourth">
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
                            </div>
                        </div>
                        <div className="lastline">
                            Copyright © 2023 Adventure Leisure Ltd. All rights reserved. | Privacy Policy | Terms And Conditions |
                            Gender Pay Gap
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}



