import React from 'react'
import HomeDesktop from "../../assets/images/home/background-home-desktop.jpg"
import HomeTablet from "../../assets/images/home/background-home-tablet.jpg"
import HomeMobile from "../../assets/images/home/background-home-mobile.jpg"
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'

import DATA from "../../assets/data/data.json"


export default function Home() {

  // console.log(DATA);


    // DATA.crew.map((crewMember) =>{
    //   console.log(crewMember);
    // })

    // DATA.map((element, key) => {

    //   console.log(element);
    //     // return (
    //     //     <Link 
    //     //         key={key}
    //     //         to={`/details/${key}`}
    //     //         className='cursor-pointer hover:underline hover:font-semibold' 
    //     //     >
    //     //         {element.nom}
    //     //     </Link>
    //     // ) 
    // })


  return (


    <>
      <div className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover 
                          
                          
                          min-[1440px]:bg-home-desktop  min-[1440px]:flex 
                          min-[1440px]:flex-col min-[1440px]:flex-wrap
                      `} 
      >
        <NavBar />
    

        <div className={`down-box  w-[76%] h-[46.5%] 
        
        
                          min-[1440px]:self-center min-[1440px]:absolute 
                          min-[1440px]:bottom-[6.4rem] min-[1440px]:flex
                          min-[1440px]:flex-wrap min-[1440px]:justify-between
                        `}>

                            {/* left side start*/}
              <div className={`left  text-white


                                min-[1440px]:h-full  min-[1440px]:w-[47%]
                                min-[1440px]:flex min-[1440px]:flex-col justify-between

                              `}>

                                <div className={`top w-full  
                                  
                                                  h-[12%]
                                                   min-[1440px]:`}>

                                  <h3 className={`
                                  
                                  
                                  min-[1440px]:text-[2.14rem]
                                  `}   
                                  >SO, YOU WANT TO TRAVEL TO</h3>

                                </div>

                                <div className={`midd w-full 
                                  
                                                  h-[37%]
                                                   min-[1440px]:`}>
                                    <h1
                                        className={`
                                  
                                  
                                        min-[1440px]:text-[11.1rem] 
                                        min-[1440px]:
                                        min-[1440px]:
                                        min-[1440px]:leading-[9.7rem]
                                        `}
                                    
                                    >SPACE</h1>
                                </div>

                                <div className={`bot w-[90%] 
                                  
                                                  h-[28%]
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
                                rounded-full flex text-center justify-center 
                                items-center


                                min-[1440px]:h-[60%]  min-[1440px]:w-[23.5%]
                                min-[1440px]:self-center  min-[1440px]:mr-5

                              `}>

                                <h4 className={`
                                
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
