import React from 'react'
import HomeDesktop from "../../assets/images/home/background-home-desktop.jpg"
import HomeTablet from "../../assets/images/home/background-home-tablet.jpg"
import HomeMobile from "../../assets/images/home/background-home-mobile.jpg"
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'

import DATA from "../../assets/data/data.json"


export default function Home() {

  return (


    <>
      <div className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover 
                          
                          min-[768px]:max-[1023px]:bg-[center_top_0rem]   min-[768px]:max-[1023px]:bg-no-repeat
                          min-[768px]:max-[1023px]:w-[100dvw]   min-[768px]:max-[1023px]:h-[100dvh]
                          min-[768px]:max-[1023px]:bg-home-tablet min-[768px]:max-[1023px]:bg-cover
                          min-[768px]:max-[1023px]:flex 
                          min-[768px]:max-[1023px]:flex-col min-[768px]:max-[1023px]:flex-wrap


                          min-[1024px]:max-[1439px]:bg-[center_top_0rem]   min-[1024px]:max-[1439px]:bg-no-repeat
                          min-[1024px]:max-[1439px]:w-[100dvw]   min-[1024px]:max-[1439px]:h-[100dvh]
                          min-[1024px]:max-[1439px]:bg-home-desktop min-[1024px]:max-[1439px]:bg-[147%,100%]
                          min-[1024px]:max-[1439px]:flex 
                          min-[1024px]:max-[1439px]:flex-col min-[1024px]:max-[1439px]:flex-wrap

                          min-[1440px]:bg-home-desktop  min-[1440px]:flex 
                          min-[1440px]:flex-col min-[1440px]:flex-wrap
                      `} 
      >
        <NavBar />
    

        <div className={`down-box  w-[76%] h-[46.5%] 
        
                          min-[1024px]:max-[1439px]:  min-[1024px]:max-[1439px]:h-[44.5%]  min-[1024px]:max-[1439px]:w-[78%]
                          min-[1024px]:max-[1439px]:left-[7.4rem] min-[1024px]:max-[1439px]:absolute 
                          min-[1024px]:max-[1439px]:bottom-[6.4rem] min-[1024px]:max-[1439px]:flex
                          min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:justify-between
        
                          min-[1440px]:self-center min-[1440px]:absolute 
                          min-[1440px]:bottom-[6.4rem] min-[1440px]:flex
                          min-[1440px]:flex-wrap min-[1440px]:justify-between
                        `}>

                            {/* left side start*/}
              <div className={`left  text-white


                                min-[1024px]:max-[1439px]:h-full  min-[1024px]:max-[1439px]:w-[47%]
                                min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:flex-col 
                                min-[1024px]:max-[1439px]:justify-between

                                min-[1440px]:h-full  min-[1440px]:w-[47%]
                                min-[1440px]:flex min-[1440px]:flex-col justify-between

                              `}>

                                <div className={`top w-full  
                                  
                                                  h-[12%]
                                                  min-[1024px]:max-[1439px]:
                                                  min-[1024px]:max-[1439px]:h-[10%] min-[1024px]:max-[1439px]:

                                                   min-[1440px]:
                                                   `}>

                                  <h3 className={`
                                  
                                  
                                  min-[1024px]:max-[1439px]:text-[1.7rem]
                                  min-[1440px]:text-[2.14rem]
                                  `}   
                                  >SO, YOU WANT TO TRAVEL TO</h3>

                                </div>

                                <div className={`midd w-full 
                                  
                                                  h-[37%]
                                                  min-[1024px]:max-[1439px]:w-full
                                                  min-[1024px]:max-[1439px]:h-[30%] min-[1024px]:max-[1439px]:

                                                   min-[1440px]:
                                                   
                                                `}>
                                    <h1
                                        className={`
                                  
                                        min-[1024px]:max-[1439px]:text-[8.1rem] min-[1024px]:max-[1439px]:leading-[7rem]


                                        min-[1440px]:text-[11.1rem] 
                                        min-[1440px]:
                                        min-[1440px]:
                                        min-[1440px]:leading-[9.7rem]
                                        `}
                                    
                                    >SPACE</h1>
                                </div>

                                <div className={`bot w-[90%] 
                                  
                                                  h-[28%]

                                                  min-[1024px]:max-[1439px]:leading-[2rem]
                                                  min-[1024px]:max-[1439px]:w-[84%]  min-[1024px]:max-[1439px]:h-[40%]  
                                                  min-[1024px]:max-[1439px]:text-[1rem]
                                                   

                                                   min-[1440px]:text-[1.38rem]
                                                   `}>
                                      <p>Let's face it; if you want to go to space,
                                          you might as well 

                                          genuinely go to outer space 
                                          and not hover kind of on the 
                                          
                                          edge of it. Well sit back, and relax because
                                          we'll give you a truly out of this world experience! 
                                      </p>
                                </div>

              </div>

                              {/* left side end */}


                              {/* right side start */}
              <div className={`right bg-white
                               
                                min-[1024px]:max-[1439px]:rounded-full min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:text-center 
                                min-[1024px]:max-[1439px]:justify-center 
                                min-[1024px]:max-[1439px]:items-center
                                min-[1024px]:max-[1439px]:h-[40%]  min-[1024px]:max-[1439px]:w-[22.5%]
                                min-[1024px]:max-[1439px]:self-center  min-[1024px]:max-[1439px]:mr-5 min-[1024px]:max-[1439px]:mb-[7rem]

                                min-[1440px]:rounded-full min-[1440px]:flex min-[1440px]:text-center min-[1440px]:justify-center 
                                min-[1440px]:items-center
                                min-[1440px]:h-[60%]  min-[1440px]:w-[23.5%]
                                min-[1440px]:self-center  min-[1440px]:mr-5

                              `}>

                                <h4 className={`


                                                min-[1024px]:max-[1439px]:text-[1.8rem]
                                
                                                text-[2rem] font-light text-black
                                `}>
                                    EXPLORE
                                </h4>

              </div>

                              {/* right side end */}

        </div>

      </div>

    
    </>
  )
}
