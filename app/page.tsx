'use client'
import { gsap } from "gsap";
import { useEffect } from "react";

function loader() {
     var tl = gsap.timeline();
     tl
       .to("#black" , {
        height: 0,
        duration: 1,
        delay: 4,
       } )

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
      
      .to(".reveal",{
        opacity:0,
      })
}

export default function Home() {
  useEffect(() => {
    loader();
  }, [])
  
  return (
    
    <>
        <div className="bg-black h-screen w-full flex justify-center items-center" id="black">
        <div id="name">
                <h1 className="text-white reveal"><span>Balwinder Singh's</span><span className="text-green-500 italic"> Portfolio</span>
                </h1>
            </div>
          
        </div>

        <div id="green" className="w-full h-0 bottom-0 absolute" style={{ backgroundColor: "#14cf93"}}></div>

        <div id="homepage" className="h-screen w-full" style={{backgroundColor:"#dadada"}}></div>

    </>
  );
}