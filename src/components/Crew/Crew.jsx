import React from 'react'
import NavBar from '../Navbar/NavBar'

export default function  Crew() {

  return (
   

    <>
      <div className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover 
                        flex flex-col

                                    
                                    
                                    
                                    min-[1440px]:bg-crew-desktop
                                    min-[1440px]:                
                    `} 
      >

    
    
    {/* <Outlet/> */}

    <NavBar />


        <div className={`title-meet self-center absolute
        

                            min-[1440px]:top-[16rem] min-[1440px]:left-[11.25rem]
                            min-[1440px]: 
                            min-[1440px]:w-[26%] min-[1440px]:h-[5%]
                        `}>

            <h2 className={`text-white tracking-[0.5rem]
            
                                min-[1440px]:text-[1.5rem]   

            
                        `}>

                    <span className={`opacity-30 mr-[4.7rem] font-semibold`}>

                        02 
                    </span> 

                        MEET YOUR CREW
            </h2>

        </div>


        <div className={`carousel-area bg-fuchsia-500 

                            self-center   absolute 
                          min-[1440px]:bottom-[1.4rem]



                          min-[1440px]:w-[75%] min-[1440px]:h-[63%]

                        `}>


        </div>

      </div>

    
    </>
  )
}
