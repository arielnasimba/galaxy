import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/routes/root.css'

export default function root() {
  return (
    
    <div className="container_body w-full bg-orange-200 h-[100dvh]  text-center flex flex-col  text-[1.3rem] tracking-wider text-white ">

      <nav className={`
        
          
                                min-[1440px]:w-[55%] min-[1440px]:h-[7.5rem] min-[1440px]:bg-[rgba(0,0,0,0.5)] 
                                min-[1440px]:self-end min-[1440px]:mt-12 min-[1440px]:flex 
                                min-[1440px]:items-center
                                
                    `} >

        <ul className={`
        
                                              min-[1440px]: min-[1440px]:w-[60%] 
                                              min-[1440px]:h-1/2 min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:justify-between
                                              min-[1440px]: min-[1440px]:items-center`}>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link>
            
            </Link>

            <h2 className=" " >00 HOME</h2>

          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link>
            <h2>01 DESTINATION</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link>
            <h2>02 CREW</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[3rem] hover:decoration-4`}>

            <Link>
            
            <h2>03 TECHNOLOGY</h2>
            </Link>
          </li>
        </ul>

      </nav>


    </div>
  )
}


// "Barlow Condensed", Arial, Helvetica, sans-serif