'use client'
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";

import Footer from "./components/footer";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Socials from './components/Socials';
import Contact from './components/Contact'
import { useRouter } from "next/navigation";
import eventprojectimg from '../public/images/eventpro.jpg';
import portfolioproimg from '../public/images/portfolioprojectimg.jpg';
import ecommmerce from '../public/images/Ecommerceimg.png';




function loader() {
  var tl = gsap.timeline();
  tl
    .to("#black", {
      height: 0,
      duration: 1,
      delay: 2,
    })

    .to("#green", {
      height: "100%",
      duration: 1,
      delay: -2,
    })

    .to("#green", {
      height: "0%",
      duration: 0.5,
      top: 0,
    })

    .to(".reveal", {
      opacity: 0,
    })

    .to(".disappear", {
      opacity: 1,
    })
}

export default function Home() {
  useEffect(() => {
    loader();
  }, [])

  const router = useRouter();

  return (

    <>
      <div className="bg-black h-screen w-full flex justify-center items-center" id="black">
        <div id="name">
          <h1 className="text-white reveal"><span>Balwinder Singh's</span><span className="text-green-500 italic"> Portfolio</span>
          </h1>
        </div>

      </div>

      <div id="green" className="w-full h-0 bottom-0 absolute" style={{ backgroundColor: "#14cf93" }}></div>

      <div id="homepage" className="h-screen w-full" style={{ backgroundColor: "#dadada" }}>





{/* 
        <div id="nav" className="disappear opacity-0 flex fixed justify-between top-0 left-0 right-0 bg-[#dadada] " style={{ padding: "20px 3vw", height: "2vh", fontSize: "20px" }}>
          <a href="#imagery" className="relative text-black ">
            BALWINDER
            <span className="absolute inline-block bg-black" style={{ bottom: "-30px", height: "1px", left: "0", width: "100%" }}></span>

          </a>
          <a href="#work" className="relative text-black">
            WORKS
            <span className="absolute inline-block bg-black" style={{ bottom: "-30px", height: "1px", left: "0", width: "100%" }}></span>

          </a>
          <a href="#socials" className="relative text-black">
            SOCIALS
            <span className="absolute inline-block bg-black" style={{ bottom: "-30px", height: "1px", left: "0", width: "100%" }}></span>

          </a>
          <a href="#contacts" className="relative text-black">
            CONTACT
            <span className="absolute inline-block bg-black" style={{ bottom: "-30px", height: "1px", left: "0", width: "100%" }}></span>

          </a>

        </div> */}



           <div id="nav" className="disappear opacity-0 flex fixed justify-between top-0 left-0 right-0 bg-[#dadada] " style={{ padding: "20px 3vw", height: "2vh", fontSize: "20px" }}>
                <a href="#imagery"  className="relative text-black">
                    BALWINDER
                    <span id="line1" className="line absolute inline-block  bg-black" style={{height:"1px",bottom: "-30px"}}></span>
                    <span id="line2" className="line absolute inline-block  bg-black" style={{height:"1px",bottom: "-30px"}}></span>
                </a>
                <a href="#socials"  className="relative text-black ">SOCIALS
                    <span id="line1" className=" line absolute inline-block  bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                    <span id="line2" className="line absolute inline-block  bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                </a>
                <a href="#work"  className="relative text-black ">WORKS
                    <span id="line1" className="line absolute inline-block bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                    <span id="line2" className="line absolute inline-block bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                </a>
                <a href="#contacts"  className="relative text-black ">CONTACT
                    <span id="line1" className="line absolute inline-block  bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                    <span id="line2" className="line absolute inline-block  bg-black" style={{bottom: "-30px",height:"1px"}}></span>
                </a>
            </div>


        <hr className="ml-12 mr-12 mt-20 border-t-black " />

        <div id="imagery" className="flex justify-center items-center w-4/5 " style={{ height: "500px", margin: "10vh 6vw" }}>
          <div className="w-2/4 h-auto justify-center" >
            <h1 style={{ color: "#333", fontSize: "1.9vw", fontWeight: "400" }}>Hello!! I am<span style={{ color: "#14cf93", fontStyle: "italic", fontWeight: "bold" }}> Balwinder Singh</span> currently a third year undergrad from YMCA university pursuing Bachelor's in Technology!</h1>
            <a href="https://drive.google.com/file/d/1YTZ9Eq2aGKDoiCCFum0AAhZPNzfsFm4e/view?usp=drive_link" target="_blank">
              <button className="h-10 w-36 flex flex-row justify-center items-center font-bold text-lg text-[#14fca9] bg-black rounded-md transition-all ease-in hover:bg-white hover:text-black hover:border-2 hover:border-[#fefae0] my-3   sm:h-12 sm:w-40 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-[#14fca9] sm:bg-black sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-white sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:my-3   md:h-12 md:w-40 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-[#14fca9] md:bg-black md:rounded-lg md:transition-all md:ease-in md:hover:bg-white md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:my-4   lg:h-12 lg:w-40 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-[#14fca9] lg:bg-black lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-white lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:my-4   xl:h-12 xl:w-40 xl:my-4 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-[#14fca9] xl:bg-black xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-white xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] 2xl:h-12 2xl:w-40 2xl:my-4 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-[#14fca9] 2xl:bg-black 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-white 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0]">
                <p className="mx-2">Resume</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </button>
            </a>

          </div>
          <div className="relative flex  items-center justify-center w-2/3 h-full ">


            <div id='right' className='w-1/2 h-80 md:h-auto m-40'>
              <div id='imagery'>
                <div className="imgright">
                  <div className="imagecenter" ></div>
                  <div className="imagecenter"></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="info" className="" style={{ width: "20vw", marginLeft: "20vw", marginRight: "20vw", marginTop: "100px", marginBottom: "100px" }}>
          <div id="inforow">
            <h5 className="m-3 text-opacity-70" style={{ fontSize: "1vw", fontWeight: "300" }}>*THINGS I CAN HELP YOU WITH</h5>
            <h4 style={{ fontSize: "1.5vw", fontWeight: "500" }}>WEB/UI&UX/FRONTEND/BACKEND/FULL STACK DEVELOPMENT</h4>
          </div>
        </div>

        <div id="work">
          <hr className="ml-12 mr-12 mt-4 border-t-black" />
          <div id="workrow" className="flex justify-center items-center m-8">
            <h1 className="" style={{ fontSize: "4vw", fontWeight: "300" }}>Feat<span className="italic" style={{ color: "#14cf93" }} >Projects</span>
            </h1>
          </div>
        </div>
        {/* projects */}

        <div className="mx-4 my-24">
          <div className="mt-3 h-full w-full flex justify-center items-center   sm:mt-10 sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center   md:mt-10 md:h-full md:w-full md:flex md:justify-center md:items-center   lg:mt-10 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center   xl:mt-10 xl:h-full xl:w-full xl:flex xl:justify-center xl:items-center   2xl:mt-10 2xl:h-full 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center">
            <div className="    w-[85%] grid grid-cols-1 gap-x-0 gap-y-2   sm:w-[85%] sm:grid sm:grid-cols-1 sm:gap-x-0 sm:gap-y-4   md:w-[90%] md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-8   lg:w-[93%] lg:grid lg:grid-cols-3 lg:gap-x-0 lg:gap-y-8   xl:w-[100%] xl:grid xl:grid-cols-3 xl:gap-x-0 xl:gap-y-8   2xl:w-[85%] 2xl:grid 2xl:grid-cols-3 2xl:gap-x-0 2xl:gap-y-8">

              <div className=" flex flex-row justify-center items-center rounded-xl transition-all ease-in delay-75 hover:translate-x-4   sm:flex sm:flex-row sm:justify-center sm:items-center sm:rounded-xl sm:transition-all sm:ease-in sm:delay-75 sm:hover:translate-x-6    md:flex md:flex-col md:rounded-xl md:transition-all md:ease-in md:delay-75 md:hover:-translate-y-4 md:hover:translate-x-0   lg:flex lg:flex-col lg:rounded-xl lg:transition-all lg:ease-in lg:delay-75 lg:hover:-translate-y-4   xl:flex xl:flex-col xl:rounded-xl xl:transition-all xl:ease-in xl:delay-75 xl:hover:-translate-y-4   2xl:flex 2xl:flex-col 2xl:rounded-xl 2xl:transition-all 2xl:ease-in 2xl:delay-75 2xl:hover:-translate-y-4 ">
                <div>
                  <Image src={eventprojectimg} alt="1" className="h-28 w-[6rem] rounded-l-lg object-fill   sm:h-40 sm:w-[10.5rem] sm:rounded-l-xl sm:object-fill   md:h-64 md:w-[19.5rem] md:rounded-t-xl md:rounded-bl-none md:rounded-br-none md:object-fill   lg:h-60 lg:w-[18rem] lg:rounded-t-xl lg:object-fill   xl:h-72 xl:w-[24rem] xl:rounded-t-xl xl:object-fill   2xl:h-72 2xl:w-[24rem] 2xl:rounded-t-xl 2xl:object-fill" />
                </div>
                <div className="   p-4 flex flex-col bg-black h-28 w-[15rem] rounded-r-lg   sm:p-4 sm:flex sm:flex-col sm:bg-black sm:h-40 sm:w-[24rem] sm:rounded-r-xl   md:p-4 md:flex md:flex-col md:justify-center md:items-center md:bg-black md:h-44 md:w-[19.5rem] md:rounded-b-xl md:rounded-tr-none   lg:p-4 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-black lg:h-56 lg:w-[18rem] lg:rounded-b-xl   xl:p-4 xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-black xl:h-56 xl:w-[24rem] xl:rounded-b-xl   2xl:p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-black 2xl:h-56 2xl:w-[24rem] 2xl:rounded-b-xl">
                  <h1 className="   mt-0 text-[#14fca9] text-center text-xl font-extrabold   sm:mt-0 sm:text-[#14fca9] sm:text-center sm:text-3xl sm:font-extrabold   md:mt-4 md:text-[#14fca9] md:text-3xl md:font-extrabold   lg:mt-2 lg:text-[#14fca9] lg:text-3xl lg:font-extrabold   xl:mt-2 xl:text-[#14fca9] xl:text-3xl xl:font-extrabold   2xl:mt-2 2xl:text-[#14fca9] 2xl:text-[1.5rem] 2xl:font-extrabold">
                    Event Management Website
                  </h1>
                  <h1 className="   h-40 w-full my-1 text-center text-white font-bold text-[0.5rem]   sm:h-44 sm:w-full sm:my-4 sm:text-center sm:text-white sm:font-bold sm:text-xs   md:h-44 md:w-full md:my-5 md:text-center md:text-white md:font-bold md:text-xs   lg:h-44 lg:w-full lg:my-5 lg:text-center lg:text-white lg:font-bold lg:text-sm   xl:h-44 xl:w-full xl:my-5 xl:text-center xl:text-white xl:font-bold xl:text-sm   2xl:h-44 2xl:w-full 2xl:my-5 2xl:text-center 2xl:text-white 2xl:font-bold 2xl:text-sm ">
                    Next.js, TypeScript, Tailwind CSS,Nodejs,MongoDB</h1>

                  <div className="   w-full my-0 flex flex-row justify-between    sm:w-full sm:my-0 sm:flex sm:flex-row sm:justify-between   md:w-full md:my-0 md:flex md:flex-row md:justify-between   lg:w-full lg:my-1 lg:flex lg:flex-row lg:justify-between    xl:w-full xl:my-1 xl:flex xl:flex-row xl:justify-between    2xl:w-full 2xl:my-1 2xl:flex 2xl:flex-row 2xl:justify-between">
                    <a href="https://eventtickets-idldds8by-balwinders-projects.vercel.app/" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right    h-3 w-3   sm:h-5 sm:w-5   "><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><path d="m21 3-9 9"></path><path d="M15 3h6v6"></path></svg>
                    </a>
                    <a href="https://github.com/balwinder18/Event-Management-Website" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github    h-3 w-3   sm:h-5 sm:w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="   flex flex-row justify-center items-center rounded-xl transition-all ease-in delay-75 hover:translate-x-4   sm:flex sm:flex-row sm:justify-center sm:items-center sm:rounded-xl sm:transition-all sm:ease-in sm:delay-75 sm:hover:translate-x-6    md:flex md:flex-col md:rounded-xl md:transition-all md:ease-in md:delay-75 md:hover:-translate-y-4 md:hover:translate-x-0   lg:flex lg:flex-col lg:rounded-xl lg:transition-all lg:ease-in lg:delay-75 lg:hover:-translate-y-4   xl:flex xl:flex-col xl:rounded-xl xl:transition-all xl:ease-in xl:delay-75 xl:hover:-translate-y-4   2xl:flex 2xl:flex-col 2xl:rounded-xl 2xl:transition-all 2xl:ease-in 2xl:delay-75 2xl:hover:-translate-y-4 ">
                <div>
                  <Image src={portfolioproimg} alt="" className="   h-28 w-[6rem] rounded-l-lg object-fill   sm:h-40 sm:w-[10.5rem] sm:rounded-l-xl sm:object-fill   md:h-64 md:w-[19.5rem] md:rounded-t-xl md:rounded-bl-none md:rounded-br-none md:object-fill   lg:h-60 lg:w-[18rem] lg:rounded-t-xl lg:object-fill   xl:h-72 xl:w-[24rem] xl:rounded-t-xl xl:object-fill   2xl:h-72 2xl:w-[24rem] 2xl:rounded-t-xl 2xl:object-fill" />
                </div>
                <div className="   p-4 flex flex-col bg-black h-28 w-[15rem] rounded-r-lg   sm:p-4 sm:flex sm:flex-col sm:bg-black sm:h-40 sm:w-[24rem] sm:rounded-r-xl   md:p-4 md:flex md:flex-col md:justify-center md:items-center md:bg-black md:h-44 md:w-[19.5rem] md:rounded-b-xl md:rounded-tr-none   lg:p-4 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-black lg:h-56 lg:w-[18rem] lg:rounded-b-xl   xl:p-4 xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-black xl:h-56 xl:w-[24rem] xl:rounded-b-xl   2xl:p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-black 2xl:h-56 2xl:w-[24rem] 2xl:rounded-b-xl">
                  <h1 className="   mt-0 text-[#14fca9] text-center text-xl font-extrabold   sm:mt-0 sm:text-[#14fca9] sm:text-center sm:text-3xl sm:font-extrabold   md:mt-4 md:text-[#14fca9] md:text-3xl md:font-extrabold   lg:mt-2 lg:text-[#14fca9] lg:text-3xl lg:font-extrabold   xl:mt-2 xl:text-[#14fca9] xl:text-3xl xl:font-extrabold   2xl:mt-2 2xl:text-[#14fca9] 2xl:text-3xl 2xl:font-extrabold">
                    Portfolio Website
                  </h1>
                  <h1 className="   h-40 w-full my-1 text-center text-white font-bold text-[0.5rem]   sm:h-44 sm:w-full sm:my-4 sm:text-center sm:text-white sm:font-bold sm:text-xs   md:h-44 md:w-full md:my-5 md:text-center md:text-white md:font-bold md:text-xs   lg:h-44 lg:w-full lg:my-5 lg:text-center lg:text-white lg:font-bold lg:text-sm   xl:h-44 xl:w-full xl:my-5 xl:text-center xl:text-white xl:font-bold xl:text-sm   2xl:h-44 2xl:w-full 2xl:my-5 2xl:text-center 2xl:text-white 2xl:font-bold 2xl:text-sm ">
                    Nextjs,Tailwind CSS</h1>
                  <div className="   w-full my-0 flex flex-row justify-between    sm:w-full sm:my-0 sm:flex sm:flex-row sm:justify-between   md:w-full md:my-0 md:flex md:flex-row md:justify-between   lg:w-full lg:my-1 lg:flex lg:flex-row lg:justify-between    xl:w-full xl:my-1 xl:flex xl:flex-row xl:justify-between    2xl:w-full 2xl:my-1 2xl:flex 2xl:flex-row 2xl:justify-between">
                    <a href="https://www.google.com" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right    h-3 w-3   sm:h-5 sm:w-5   "><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><path d="m21 3-9 9"></path><path d="M15 3h6v6"></path>
                      </svg>
                    </a>
                    <a href="https://github.com/balwinder18/portfolioupdated" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github    h-3 w-3   sm:h-5 sm:w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="   flex flex-row justify-center items-center rounded-xl transition-all ease-in delay-75 hover:translate-x-4   sm:flex sm:flex-row sm:justify-center sm:items-center sm:rounded-xl sm:transition-all sm:ease-in sm:delay-75 sm:hover:translate-x-6    md:flex md:flex-col md:rounded-xl md:transition-all md:ease-in md:delay-75 md:hover:-translate-y-4 md:hover:translate-x-0   lg:flex lg:flex-col lg:rounded-xl lg:transition-all lg:ease-in lg:delay-75 lg:hover:-translate-y-4   xl:flex xl:flex-col xl:rounded-xl xl:transition-all xl:ease-in xl:delay-75 xl:hover:-translate-y-4   2xl:flex 2xl:flex-col 2xl:rounded-xl 2xl:transition-all 2xl:ease-in 2xl:delay-75 2xl:hover:-translate-y-4 "><div>
                <Image src={ecommmerce} alt="" className="   h-28 w-[6rem] rounded-l-lg object-fill   sm:h-40 sm:w-[10.5rem] sm:rounded-l-xl sm:object-fill   md:h-64 md:w-[19.5rem] md:rounded-t-xl md:rounded-bl-none md:rounded-br-none md:object-fill   lg:h-60 lg:w-[18rem] lg:rounded-t-xl lg:object-fill   xl:h-72 xl:w-[24rem] xl:rounded-t-xl xl:object-fill   2xl:h-72 2xl:w-[24rem] 2xl:rounded-t-xl 2xl:object-fill" />
              </div>
                <div className="   p-4 flex flex-col bg-black h-28 w-[15rem] rounded-r-lg   sm:p-4 sm:flex sm:flex-col sm:bg-black sm:h-40 sm:w-[24rem] sm:rounded-r-xl   md:p-4 md:flex md:flex-col md:justify-center md:items-center md:bg-black md:h-44 md:w-[19.5rem] md:rounded-b-xl md:rounded-tr-none   lg:p-4 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-black lg:h-56 lg:w-[18rem] lg:rounded-b-xl   xl:p-4 xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-black xl:h-56 xl:w-[24rem] xl:rounded-b-xl   2xl:p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-black 2xl:h-56 2xl:w-[24rem] 2xl:rounded-b-xl">
                  <h1 className="   mt-0 text-[#14fca9] text-center text-xl font-extrabold   sm:mt-0 sm:text-[#14fca9] sm:text-center sm:text-3xl sm:font-extrabold   md:mt-4 md:text-[#14fca9] md:text-3xl md:font-extrabold   lg:mt-2 lg:text-[#14fca9] lg:text-3xl lg:font-extrabold   xl:mt-2 xl:text-[#14fca9] xl:text-3xl xl:font-extrabold   2xl:mt-2 2xl:text-[#14fca9] 2xl:text-3xl 2xl:font-extrabold">
                    E-Commerce Website
                  </h1>
                  <h1 className="   h-40 w-full my-1 text-center text-white font-bold text-[0.5rem]   sm:h-44 sm:w-full sm:my-4 sm:text-center sm:text-white sm:font-bold sm:text-xs   md:h-44 md:w-full md:my-5 md:text-center md:text-white md:font-bold md:text-xs   lg:h-44 lg:w-full lg:my-5 lg:text-center lg:text-white lg:font-bold lg:text-sm   xl:h-44 xl:w-full xl:my-5 xl:text-center xl:text-white xl:font-bold xl:text-sm   2xl:h-44 2xl:w-full 2xl:my-5 2xl:text-center 2xl:text-white 2xl:font-bold 2xl:text-sm ">
                    ReactJS, JavaScript, HTML,CSS, Nodejs, MongoDb</h1>
                  <div className="   w-full my-0 flex flex-row justify-between    sm:w-full sm:my-0 sm:flex sm:flex-row sm:justify-between   md:w-full md:my-0 md:flex md:flex-row md:justify-between   lg:w-full lg:my-1 lg:flex lg:flex-row lg:justify-between    xl:w-full xl:my-1 xl:flex xl:flex-row xl:justify-between    2xl:w-full 2xl:my-1 2xl:flex 2xl:flex-row 2xl:justify-between">
                    {/* <a href="https://digitalinknew.vercel.app/" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right    h-3 w-3   sm:h-5 sm:w-5   "><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><path d="m21 3-9 9"></path><path d="M15 3h6v6"></path>
                      </svg>
                    </a> */}
                    <a href="https://github.com/balwinder18/E-COMMERCE" target="_blank" className="   mb-0 mx-8 bg-white p-1 rounded-[0.25rem] border-2 border-white hover:border-2 hover:border-[#4a4036]    sm:mb-1 sm:mx-8 sm:bg-white sm:p-1 sm:rounded-md sm:border-2 sm:border-white sm:hover:border-2 sm:hover:border-[#4a4036] sm:   md:mb-4 md:mx-8 md:bg-white md:p-2 md:rounded-lg md:border-2 md:border-white md:hover:border-2 md:hover:border-[#4a4036] md:   lg:mx-8 lg:bg-white lg:p-2 lg:rounded-lg lg:border-2 lg:border-white lg:hover:border-2 lg:hover:border-[#4a4036] lg:   xl:mx-8 xl:bg-white xl:p-2 xl:rounded-lg xl:border-2 xl:border-white xl:hover:border-2 xl:hover:border-[#4a4036] xl:   2xl:mx-8 2xl:bg-white 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-white 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl: ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github    h-3 w-3   sm:h-5 sm:w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <hr className="ml-12 mr-12 mt-6 border-t-black" />

        <div id="titlesocial">

          <div id="workrow" className="flex justify-center items-center m-8">
            <h1 className="" style={{ fontSize: "4vw", fontWeight: "300" }}>Social<span className="italic" style={{ color: "#14cf93" }} >Accounts</span>
            </h1>
          </div>
        </div>

        <div id="socials" className="mt-14">
          <Socials />
        </div>


        <div id="contacts">
          <Contact />
        </div>

        <Footer />
      
      </div>

    </>


  );
}