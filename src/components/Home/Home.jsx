import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'


export default function Home() {

  return (


    <>
      <div className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover 
                          
                          min-[375px]:max-[425px]:bg-[center_bottom_0rem]   min-[375px]:max-[425px]:bg-no-repeat
                          min-[375px]:max-[425px]:w-[100dvw]   min-[375px]:max-[425px]:h-[100dvh]
                          min-[375px]:max-[425px]:bg-home-mobile min-[375px]:max-[425px]:bg-cover
                          min-[375px]:max-[425px]:flex 
                          min-[375px]:max-[425px]:flex-col min-[375px]:max-[425px]:flex-wrap
                          
                          min-[768px]:max-[1023px]:bg-[center_bottom_0rem]   min-[768px]:max-[1023px]:bg-no-repeat
                          min-[768px]:max-[1023px]:w-[100dvw]   min-[768px]:max-[1023px]:h-[100dvh]
                          min-[768px]:max-[1023px]:bg-home-tablet min-[768px]:max-[1023px]:bg-[100%,100%]
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
        
                          min-[375px]:max-[425px]: min-[375px]:max-[425px]:h-[76.5%]  min-[375px]:max-[425px]:w-[80%]
                          min-[375px]:max-[425px]:self-center min-[375px]:max-[425px]:absolute 
                          min-[375px]:max-[425px]:bottom-[5rem] min-[375px]:max-[425px]:flex  min-[375px]:max-[425px]:
                          min-[375px]:max-[425px]: min-[375px]:max-[425px]:justify-between min-[375px]:max-[425px]:flex-col
        
                          min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:h-[74.5%]  min-[768px]:max-[1023px]:w-[60%]
                          min-[768px]:max-[1023px]:self-center min-[768px]:max-[1023px]:absolute 
                          min-[768px]:max-[1023px]:bottom-[5rem] min-[768px]:max-[1023px]:flex  min-[768px]:max-[1023px]:
                          min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:justify-between min-[768px]:max-[1023px]:flex-col

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


                                min-[375px]:max-[425px]:h-full  min-[375px]:max-[425px]:w-full
                                min-[375px]:max-[425px]:flex min-[375px]:max-[425px]:flex-col 
                                min-[375px]:max-[425px]:justify-start  min-[375px]:max-[425px]:
                                min-[375px]:max-[425px]:gap-[2rem]


                                min-[768px]:max-[1023px]:h-full  min-[768px]:max-[1023px]:w-full
                                min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:flex-col 
                                min-[768px]:max-[1023px]:justify-start  min-[768px]:max-[1023px]:
                                min-[768px]:max-[1023px]:gap-[2rem]


                                min-[1024px]:max-[1439px]:h-full  min-[1024px]:max-[1439px]:w-[47%]
                                min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:flex-col 
                                min-[1024px]:max-[1439px]:justify-between

                                min-[1440px]:h-full  min-[1440px]:w-[47%]
                                min-[1440px]:flex min-[1440px]:flex-col justify-between

                              `}>

                                <div className={`top w-full  
                                  
                                                  h-[12%]

                                                  min-[375px]:max-[425px]:w-full   min-[375px]:max-[425px]:text-center
                                                  min-[375px]:max-[425px]:h-[6%] min-[375px]:max-[425px]:

                                                  min-[768px]:max-[1023px]:w-full   min-[768px]:max-[1023px]:text-center
                                                  min-[768px]:max-[1023px]:h-[8%] min-[768px]:max-[1023px]:
                                                  
                                                  min-[1024px]:max-[1439px]:
                                                  min-[1024px]:max-[1439px]:h-[10%] min-[1024px]:max-[1439px]:

                                                   min-[1440px]:
                                                   `}>

                                  <h3 className={`
                                  
                                  
                                  min-[375px]:max-[425px]:text-[1.7rem] min-[375px]:max-[425px]:tracking-widest


                                  min-[768px]:max-[1023px]:text-[1.4rem] min-[768px]:max-[1023px]:tracking-widest
                                  
                                  min-[1024px]:max-[1439px]:text-[1.7rem]
                                  min-[1440px]:text-[2.14rem]
                                  `}   
                                  >SO, YOU WANT TO TRAVEL TO</h3>

                                </div>

                                <div className={`midd w-full 
                                  
                                                  h-[37%]


                                                  min-[375px]:max-[425px]:w-full
                                                  min-[375px]:max-[425px]:h-[28%] min-[375px]:max-[425px]:

                                                  
                                                  min-[768px]:max-[1023px]:w-full
                                                  min-[768px]:max-[1023px]:h-[31%] min-[768px]:max-[1023px]:
                                                  
                                                  min-[1024px]:max-[1439px]:w-full
                                                  min-[1024px]:max-[1439px]:h-[30%] min-[1024px]:max-[1439px]:

                                                   min-[1440px]:
                                                   
                                                `}>
                                    <h1
                                        className={`
                                  
                                        min-[375px]:max-[425px]:text-[7rem] min-[375px]:max-[425px]:leading-[9rem]

                                        min-[768px]:max-[1023px]:text-[9.5rem] min-[768px]:max-[1023px]:leading-[9rem]
                                  
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

                                                  min-[375px]:max-[425px]:max-[1023px]: min-[375px]:max-[425px]:max-[1023px]:text-center
                                                  min-[375px]:max-[425px]:max-[1023px]:w-full  min-[375px]:max-[425px]:max-[1023px]:h-[25%]  
                                                  min-[375px]:max-[425px]:max-[1023px]:text-[1.48rem] min-[375px]:max-[425px]:max-[1023px]:leading-[1.9rem] min-[375px]:max-[425px]:

                                                  min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:text-center
                                                  min-[768px]:max-[1023px]:w-full  min-[768px]:max-[1023px]:h-[25%]  
                                                  min-[768px]:max-[1023px]:text-[1.28rem] min-[768px]:max-[1023px]:

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
                               
                                min-[375px]:max-[425px]:rounded-full min-[375px]:max-[425px]:flex min-[375px]:max-[425px]:text-center 
                                min-[375px]:max-[425px]:justify-center 
                                min-[375px]:max-[425px]:items-center
                                min-[375px]:max-[425px]:h-[42%]  min-[375px]:max-[425px]:w-[58.5%]
                                min-[375px]:max-[425px]:self-center  min-[375px]:max-[425px]:mt-[1rem] min-[375px]:max-[425px]:mt-[2rem]
                               
                                min-[768px]:max-[1023px]:rounded-full min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:text-center 
                                min-[768px]:max-[1023px]:justify-center 
                                min-[768px]:max-[1023px]:items-center
                                min-[768px]:max-[1023px]:h-[42%]  min-[768px]:max-[1023px]:w-[44.5%]
                                min-[768px]:max-[1023px]:self-center  min-[768px]:max-[1023px]:mt-[1rem] min-[768px]:max-[1023px]:mt-[2rem]


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
