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
        
                                min-[1440px]:w-full min-[1440px]:h-[7.5rem] min-[1440px]:
                                min-[1440px]:mt-12 min-[1440px]:flex min-[1440px]:justify-between
                                
        `}>
            
            <div className={`logo_area 
            
                              
                                w-[6%] h-full  flex justify-end items-center `}>

              <img src={LOGO} alt="" srcset="" className={`
              
                                                                w-[68%] `} />

            </div>
            <div className={`ligne_area w-[30%] h-full  ml-11 flex justify-center items-center  `}>

                <span className={`absolute   w-[40rem] h-[0.15rem]  bg-white
                  
                 
                
                                `}
                ></span>
              
            </div>
    
          <nav className={`    text-white backdrop-blur
        
          
                                min-[1440px]:w-[55%] min-[1440px]:h-full min-[1440px]:bg-[rgba(255,255,255,0.04)] 
                                min-[1440px]:self-end min-[1440px]:flex 
                                min-[1440px]:items-center min-[1440px]:text-[1.3rem] min-[1440px]:tracking-wider


                                
                    `} >

        <ul className={`  
        
                                              min-[1440px]: min-[1440px]:w-[60%] 
                                              min-[1440px]:h-1/2 min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:justify-between
                                              min-[1440px]: min-[1440px]:items-center`}>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link 
             to={`/home`}>
            
              <h2 className=" " >00 HOME </h2>
            </Link>


          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link
             to={`/destination`}
              
            >
              <h2>01 DESTINATION</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link
              to={`/crew`}
            >
            <h2>02 CREW</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link
              to={`/tech`}
         
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
