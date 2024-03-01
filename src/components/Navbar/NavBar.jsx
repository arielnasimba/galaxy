import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DATA from "../../assets/data/data.json"
import LOGO from "../../assets/images/shared/logo.svg"

export default function NavBar() {

    // console.log(DATA.crew);
    // DATA.crew.map( element => {

    //     if (element.name == 'Douglas Hurley') {
            
    //         console.log(element);
    //     }
    // }) 

  return (

   
    <>    

      <div className={` fixed 
        
                                min-[1440px]:w-full min-[1440px]:h-[6.3rem] min-[1440px]:
                                min-[1440px]:mt-9 min-[1440px]:flex min-[1440px]:justify-between
                                
        `}>
            
            <div className={`logo_area 
            
                              
                                w-[6%] h-full  flex justify-end items-center min-[1440px]: `}>

              <img src={LOGO} alt="" srcset="" className={`
              
                                                                w-[55%] `} />

            </div>
            <div className={`ligne_area 
                                      min-[1440px]:w-[10%] h-full  min-[1440px]:ml-11 flex justify-center items-center min-[1440px]: `
                            }>

                <span className={`absolute    
                
                
                                                min-[1440px]:w-[19.5rem] min-[1440px]:h-[0.11rem]
                                                  bg-white min-[1440px]:
                  
                 
                
                                `}
                ></span>
              
            </div>
    
          <nav className={`    text-white backdrop-blur-[3px]
        
          
                                min-[1440px]:w-[64.8%] min-[1440px]:h-full min-[1440px]:bg-[rgba(255,255,255,0.04)] 
                                min-[1440px]:self-end min-[1440px]:flex min-[1440px]:
                                min-[1440px]:items-center min-[1440px]:text-[1.1rem] min-[1440px]:tracking-wider 


                                
                    `} >

        <ul className={`  
        
                                              min-[1440px]: min-[1440px]:w-[66%] 
                                              min-[1440px]:h-1/2 min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:gap-[4rem]
                                              min-[1440px]: min-[1440px]:items-center
                                              min-[1440px]:                        
                      `}>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4`}>

            <Link 
             to={`/galaxy/`}>
            
              <h2 className=" " >00 HOME</h2>
            </Link>


          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4`}>

            <Link
             to={`/galaxy/destination/`}
              
            >
              <h2>01 DESTINATION</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4`}>

            <Link
              to={`/galaxy/crew/0`}
            >
            <h2>02 CREW</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4`}>

            <Link
              to={`/galaxy/tech/`}
         
            >
            
            <h2>03 TECHNOLOGY</h2>
            </Link>
          </li>
        </ul>
        

          </nav>


      </div>  
      <Outlet/>

    </>   

  )
}
