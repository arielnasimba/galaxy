import React from 'react'
import NavBar from '../Navbar/NavBar';
import TstImage from "../../assets/images/destination/image-moon.png"
import { Outlet, Link , useParams} from 'react-router-dom';
import DATA from "../../assets/data/data.json"


export default function Destination() {


  const {id = 0} = useParams();
  const destinationId = DATA.destinations[id];

  const src_planetId = (destinationId.images.png).split('/').splice(2,4).join('/');

  const srcId = new URL(`../../assets/images/${src_planetId}`, import.meta.url).href;

  return (
    <>
      <div
        className={`
        
        
                     min-[768px]:max-[1023px]:w-[100dvw]   min-[768px]:max-[1023px]:h-[100dvh]   
                     min-[768px]:max-[1023px]:bg-no-repeat min-[768px]:max-[1023px]:bg-cover 
                     min-[768px]:max-[1023px]:bg-destination-tablet
        
                     min-[1024px]:max-[1439px]:w-[100dvw]   min-[1024px]:max-[1439px]:h-[100dvh]   
                     min-[1024px]:max-[1439px]:bg-no-repeat min-[1024px]:max-[1439px]:bg-cover 
                     min-[1024px]:max-[1439px]:bg-destination-desktop


                     min-[1440px]:w-[100dvw]   min-[1440px]:h-[100dvh]   
                     min-[1440px]:bg-no-repeat min-[1440px]:bg-cover 
                     min-[1440px]:bg-destination-desktop

        `}
      >
        {/* <Outlet/> */}

        <NavBar />

        <div
          className={`title-meet 
        
          

          
                            min-[768px]:max-[1023px]:top-[8rem] min-[768px]:max-[1023px]:left-[2.4rem]
                            min-[768px]:max-[1023px]:self-center min-[768px]:max-[1023px]:absolute 
                            min-[768px]:max-[1023px]:w-[37%] min-[768px]:max-[1023px]:h-[5%]

          
                            min-[1024px]:max-[1439px]:top-[13rem] min-[1024px]:max-[1439px]:left-[9rem]
                            min-[1024px]:max-[1439px]:self-center min-[1024px]:max-[1439px]:absolute 
                            min-[1024px]:max-[1439px]:w-[37%] min-[1024px]:max-[1439px]:h-[5%]

          
                            min-[1440px]:top-[13rem] min-[1440px]:left-[11.25rem]
                            min-[1440px]:self-center min-[1440px]:absolute 
                            min-[1440px]:w-[35%] min-[1440px]:h-[5%]
                        `}
        >
          <h2
            className={`text-white tracking-[0.3rem]
            
                                min-[1024px]:max-[1439px]:text-[1.4rem]  
                                
                                
                                min-[1440px]:text-[1.6rem]   

            
                        `}
          >
            <span className={`opacity-30 mr-[2rem] font-semibold`}>01</span>
            PICK YOUR DESTINATION
          </h2>
        </div>

        <div
          className={`carousel-area bg-black
 
                          min-[768px]:max-[1023px]:w-[80%] min-[768px]:max-[1023px]:h-[76%]
                          min-[768px]:max-[1023px]:flex  min-[768px]:max-[1023px]:justify-between 
                          min-[768px]:max-[1023px]:bottom-[2rem]
                          min-[768px]:max-[1023px]:absolute
                          min-[768px]:max-[1023px]:m-auto min-[768px]:max-[1023px]:left-[4.8rem]
                          min-[768px]:max-[1023px]:flex-col
 
                          min-[1024px]:max-[1439px]:w-[80%] min-[1024px]:max-[1439px]:h-[42%]
                          min-[1024px]:max-[1439px]:flex  min-[1024px]:max-[1439px]:justify-between 
                          min-[1024px]:max-[1439px]:absolute
                          min-[1024px]:max-[1439px]:bottom-[14rem]
                          min-[1024px]:max-[1439px]:left-[7rem]

          
                          min-[1440px]:flex  min-[1440px]:justify-between 
                          min-[1440px]:absolute
                          min-[1440px]:bottom-[6rem]
                          min-[1440px]:left-[11.25rem]



                          min-[1440px]:w-[75%] min-[1440px]:h-[54%]

                        `}
        >
          {/* Image area  */}
          <div
            className={` image-crew-area   
                                

                                            min-[768px]:max-[1023px]:self-center 
                                            min-[768px]:max-[1023px]:w-[52%] min-[768px]:max-[1023px]:h-[45%]
                                            min-[768px]:max-[1023px]:mt-[0rem] min-[768px]:max-[1023px]:flex 
                                

                                            min-[1024px]:max-[1439px]
                                            min-[1024px]:max-[1439px]:w-[48%] min-[1024px]:max-[1439px]:h-[95%]
                                            min-[1024px]:max-[1439px]:mt-[0rem] min-[1024px]:max-[1439px]:flex 

            
                                            min-[1440px]:w-[40%] min-[1440px]:h-[87%]
                                            min-[1440px]:mt-[0rem] min-[1440px]:flex 
                            `}
          >
            <img src={srcId} alt="" className={` 
                                            
            `} />


          </div>

          {/* image area  */}
          <div
            className={` text-planet 



                  bg-red-400
                          min-[768px]:max-[1023px]:w-full 
                          min-[768px]:max-[1023px]:h-[48%] 
                          min-[768px]:max-[1023px]:flex  
                          min-[768px]:max-[1023px]:flex-col 
                          min-[768px]:max-[1023px]:justify-between  



                          min-[1024px]:max-[1439px]:w-[42%] 
                          min-[1024px]:max-[1439px]:h-full 
                          min-[1024px]:max-[1439px]:flex  
                          min-[1024px]:max-[1439px]:flex-col 
                          min-[1024px]:max-[1439px]:justify-between  


                        min-[1440px]:w-[42%] 
                        min-[1440px]:h-full 
                        min-[1440px]:flex  
                        min-[1440px]:flex-col 
                        min-[1440px]:justify-between  
            
            
            `}
          >
            {/* <Outlet > */}
            <div className={`navPlanets w-[68%] h-[7%] `}>
              <nav
                className={`    text-white bg-slate-400
        
          
                                    min-[768px]:max-[1023px]:w-full min-[768px]:max-[1023px]:h-full 
                                    min-[768px]:max-[1023px]:  min-[768px]:max-[1023px]:m-auto 
                                    min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:font-light
                                    min-[768px]:max-[1023px]:items-center min-[768px]:max-[1023px]:text-[1.1rem] 
                                    min-[768px]:max-[1023px]:tracking-wider 
        
          
                                    min-[1024px]:max-[1439px]:w-full min-[1024px]:max-[1439px]:h-full 
                                    min-[1024px]:max-[1439px]:  min-[1024px]:max-[1439px]:self-end 
                                    min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:font-light
                                    min-[1024px]:max-[1439px]:items-center min-[1024px]:max-[1439px]:text-[1.1rem] 
                                    min-[1024px]:max-[1439px]:tracking-wider 
          
                                    min-[1440px]:w-full min-[1440px]:h-full min-[1440px]:
                                    min-[1440px]:self-end min-[1440px]:flex min-[1440px]:font-light
                                    min-[1440px]:items-center min-[1440px]:text-[1.1rem] min-[1440px]:tracking-wider 


        
                            `}
              >
                <ul
                  className={`  

                      min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:w-full 
                      min-[768px]:max-[1023px]:h-full min-[768px]:max-[1023px]:mx-auto 
                      min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:gap-3
                      min-[768px]:max-[1023px]: min-[768px]:max-[1023px]:items-center
                      min-[768px]:max-[1023px]:justify-between                      

                      min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:w-full 
                      min-[1024px]:max-[1439px]:h-full min-[1024px]:max-[1439px]:mx-auto 
                      min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:gap-3
                      min-[1024px]:max-[1439px]: min-[1024px]:max-[1439px]:items-center
                      min-[1024px]:max-[1439px]:justify-between                      

                      min-[1440px]: min-[1440px]:w-full 
                      min-[1440px]:h-full min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:gap-3
                      min-[1440px]: min-[1440px]:items-center
                      min-[1440px]:justify-between                      
                            `}


                >



                  {
                  
                  DATA.destinations.map((planet,key) =>{
                      // console.log(planet);
                  
                      return (
                          <Link 
                              key={key}
                              to={`/galaxy/destination/${key}`}
                              className={` hover:underline-offset-[0.7rem] hover:decoration-[2px] cursor-pointer hover:underline`}
                          >
  
                              <h2 className=" ">{planet.name}</h2>
                          </Link>
                      ) 
                      
                      
                    })
                  }


                </ul>
              </nav>
            </div>

            {/* </Outlet> */}

            <div className={`title-planet
 
 
                                    min-[1024px]:max-[1439px]:
                                    min-[1024px]:max-[1439px]:w-[75%] 
                                    min-[1024px]:max-[1439px]:h-[18%] 
                                    min-[1024px]:max-[1439px]:flex

                                    min-[1440px]:w-[75%] 
                                    min-[1440px]:h-[18%] 
                                    min-[1440px]:flex


                            `}>

                              <h1 className={` text-white uppercase



                                                    min-[1024px]:max-[1439px]:leading-[6rem] 
                                                    min-[1024px]:max-[1439px]:text-[5.8rem] min-[1024px]:max-[1439px]:-ml-[0.5rem]

                                                    min-[1440px]:leading-[6rem] 
                                                    min-[1440px]:text-[6.8rem] min-[1440px]:-ml-[0.5rem]
                                            `}>
                                  {destinationId.name}
                              </h1>



            </div>


            <div className={`text-planet 
 
 

                                    min-[1440px]:w-full min-[1440px]:h-[24%] min-[1440px]:flex


                            `}>

                               <p className={`text-white font-[300] tracking-[0.05rem] leading-[1.7rem]
                                                    min-[1440px]:text-[1.35rem] min-[1440px]:
                                            `}>
                                  
                                  {destinationId.description}

                              </p>



            </div>

            <div className={`travel-time-planet   border-t-2 border-[rgba(255,255,255,0.5)] items-end justify-end
 
 

                                    min-[1440px]:w-full min-[1440px]:h-[22%] min-[1440px]: flex


                            `}>

                              <div className={`right-time   
                              
                              
                                                        min-[1024px]:max-[1439px]:mr-[1rem] min-[1024px]:max-[1439px]:mb-[0.8rem] 
                                                        min-[1024px]:max-[1439px]:flex min-[1024px]:max-[1439px]:flex-col 
                                                        min-[1024px]:max-[1439px]:justify-between
                                                        min-[1024px]:max-[1439px]:w-[48%] min-[1024px]:max-[1439px]:h-[22%] 
                              
                              
                                                        min-[1440px]:mr-[2rem] min-[1440px]:mb-[0.8rem] 
                                                        min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:justify-between
                                                        min-[1440px]:w-[38%] min-[1440px]:h-[62%] 
                                                  `}>



                                           <p className={`text-white font-[300] 
                                           
                                           min-[1024px]:max-[1439px]:mb-4
                                           tracking-[0.08rem]
                                                                min-[1440px]:text-[1.15rem] min-[1440px]:
                                                        `}>
                                                        
                                              EST. TRAVEL TIME
                                          </p>

                                           <h1 className={`text-white font-[300] tracking-wide 
                                                                uppercase
                                                                
                                                                
                                                                min-[1024px]:max-[1439px]:text-[1.9rem] min-[1024px]:max-[1439px]:leading-4 


                                                                min-[1440px]:text-[1.9rem] min-[1440px]:leading-4 
                                                        `}>
                                                        
                                                        {destinationId.travel}

                                          </h1>


                              </div>



            </div>






          </div>



        </div>
      </div>
    </>
  );
}
