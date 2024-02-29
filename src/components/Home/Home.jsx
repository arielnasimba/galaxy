import React from 'react'
import HomeDesktop from "../../assets/images/home/background-home-desktop.jpg"
import HomeTablet from "../../assets/images/home/background-home-tablet.jpg"
import HomeMobile from "../../assets/images/home/background-home-mobile.jpg"
import { Outlet } from 'react-router-dom'


export default function Home() {
  return (


    <>
      <div className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover min-[1440px]:bg-home-desktop `} 
      >

    
    
    {/* <Outlet/> */}
      </div>

    
    </>
  )
}
