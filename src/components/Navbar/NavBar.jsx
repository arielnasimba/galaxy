import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DATA from "../../assets/data/data.json"
import LOGO from "../../assets/images/shared/logo.svg"

export default function NavBar() {

  return (

   
    <>    

      <div className={` fixed 
        
                                min-[768px]:max-[1023px]:w-full min-[768px]:max-[1023px]:h-[5.3rem] 
                                min-[768px]:max-[1023px]:
                                min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:flex 
                                min-[768px]:max-[1023px]:justify-between
        
                                min-[1024px]:max-[1439px]:w-full min-[1024px]:max-[1439px]:h-[5.3rem] 
                                min-[1024px]:max-[1439px]:
                                min-[1024px]:max-[1439px]:mt-9 min-[1024px]:max-[1439px]:flex 
                                min-[1024px]:max-[1439px]:justify-between

        
                                min-[1440px]:w-full min-[1440px]:h-[6.3rem] min-[1440px]:
                                min-[1440px]:mt-9 min-[1440px]:flex min-[1440px]:justify-between
                                
        `}>
            
            <div className={`logo_area 
            
                                
                                min-[768px]:max-[1023px]:w-[10%] 


                                min-[1024px]:max-[1439px]:w-[7%] 
                                w-[6%] h-full  flex justify-end items-center min-[1440px]: `}>

              <img src={LOGO} alt="" srcset="" className={`
                                                                 min-[768px]:max-[1023px]:w-[62%]
                                                                 min-[1024px]:max-[1439px]:w-[60%]


                                                                w-[55%] `} />

            </div>


            <div className={`ligne_area 



                                      

                                      min-[1024px]:max-[1439px]:w-[10%] min-[1024px]:max-[1439px]:h-full  min-[1024px]:max-[1439px]:ml-11 min-[1024px]:max-[1439px]:flex 
                                      min-[1024px]:max-[1439px]:justify-center min-[1024px]:max-[1439px]:items-center min-[1024px]:max-[1439px]:
                                      
                                      
                                      min-[1440px]:w-[10%] h-full  min-[1440px]:ml-11 flex justify-center items-center min-[1440px]: 
                                                                                                                                               
                            `}>

                <span className={`absolute    
                                               
                
                                                min-[1024px]:max-[1439px]:w-[18.5rem] min-[1024px]:max-[1439px]:h-[0.11rem]
                                                min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:


                                                min-[1440px]:w-[19.5rem] min-[1440px]:h-[0.11rem]
                                                  bg-white min-[1440px]:
                  
                 
                
                                `}
                ></span>
              
            </div>
    
          <nav className={`    text-white backdrop-blur-[3px]
        
          

        
          
                                
                                
                                min-[768px]:max-[1023px]:h-full min-[768px]:max-[1023px]:bg-[rgba(255,255,255,0.04)] 
                                min-[768px]:max-[1023px]:self-end min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:
                                min-[768px]:max-[1023px]:items-center min-[768px]:max-[1023px]:text-[1rem] min-[768px]:max-[1023px]:tracking-wider min-[768px]:max-[1023px]:w-[57.8%]


                                min-[1024px]:max-[1439px]:h-full min-[1024px]:max-[1439px]:bg-[rgba(255,255,255,0.04)] 
                                min-[1024px]:max-[1439px]:self-end min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:
                                min-[1024px]:max-[1439px]:items-center min-[1024px]:max-[1439px]:text-[1rem] min-[1024px]:max-[1439px]:tracking-wider min-[1024px]:max-[1439px]:w-[54.8%]


                                min-[1440px]:w-[64.8%] min-[1440px]:h-full min-[1440px]:bg-[rgba(255,255,255,0.04)] 
                                min-[1440px]:self-end min-[1440px]:flex min-[1440px]:
                                min-[1440px]:items-center min-[1440px]:text-[1.1rem] min-[1440px]:tracking-wider 


                                
                    `} >

        <ul className={`  
        
                                              min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:w-[82%] 
                                              min-[768px]:max-[1023px]:h-1/2 min-[768px]:max-[1023px]:mx-auto min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:gap-[2rem]
                                              min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:items-center
                                              min-[768px]:max-[1023px]:justify-between   min-[768px]:max-[1023px]:text-center

                                              min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:w-[79%] 
                                              min-[1024px]:max-[1439px]:h-1/2 min-[1024px]:max-[1439px]:mx-auto min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:gap-[4rem]
                                              min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:items-center
                                              min-[1024px]:max-[1439px]:            
                                              
                                              
                                              min-[1440px]: min-[1440px]:w-[66%] 
                                              min-[1440px]:h-1/2 min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:gap-[4rem]
                                              min-[1440px]: min-[1440px]:items-center
                                              min-[1440px]:                        
                      `}>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4
          
                                min-[768px]:max-[1023px]:hover:underline-offset-[2rem]

                                min-[1024px]:max-[1439px]:hover:underline-offset-[2rem]
          `}>

            <Link 
             to={`/galaxy/`}>
            
              <h2 className={`
              
                              min-[768px]:max-[1023px]:text-[0.85rem]

                              min-[1024px]:max-[1439px]:text-[0.8rem]              
              `}
              
                    >00 HOME</h2>
            </Link>


          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4
          
                                min-[768px]:max-[1023px]:hover:underline-offset-[2rem]

                                min-[1024px]:max-[1439px]:hover:underline-offset-[2rem]
          `}>

            <Link
             to={`/galaxy/destination/0`}
              
            >
              <h2 className={`
              
                              min-[768px]:max-[1023px]:text-[0.85rem]

                              min-[1024px]:max-[1439px]:text-[0.8rem]              
              `}
              
              >01 DESTINATION</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4
          
                                min-[768px]:max-[1023px]:hover:underline-offset-[2rem]

                                min-[1024px]:max-[1439px]:hover:underline-offset-[2rem]
          `}>

            <Link
              to={`/galaxy/crew/0`}
            >
            <h2  className={`
            
                            min-[768px]:max-[1023px]:text-[0.85rem]

                            min-[1024px]:max-[1439px]:text-[0.8rem]              
            `}
            
            >02 CREW</h2>
            
            </Link>
          </li>
          <li className={`hover:underline hover:underline-offset-[2.5rem] hover:decoration-4
          
                                min-[768px]:max-[1023px]:hover:underline-offset-[2rem]

                                min-[1024px]:max-[1439px]:hover:underline-offset-[2rem]
          `}>

            <Link
              to={`/galaxy/tech/0`}
         
            >
            
            <h2 className={`
            
                            min-[768px]:max-[1023px]:text-[0.85rem]

                            min-[1024px]:max-[1439px]:text-[0.8rem]              
`}
            
            
            >03 TECHNOLOGY</h2>
            </Link>
          </li>
        </ul>

          </nav>

      </div>  
      <Outlet/>

    </>   

  )
}
