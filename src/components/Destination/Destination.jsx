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
        className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover min-[1440px]:bg-destination-desktop `}
      >
        {/* <Outlet/> */}

        <NavBar />

        <div
          className={`title-meet self-center absolute 
        

                            min-[1440px]:top-[13rem] min-[1440px]:left-[11.25rem]
                            min-[1440px]: 
                            min-[1440px]:w-[35%] min-[1440px]:h-[5%]
                        `}
        >
          <h2
            className={`text-white tracking-[0.3rem]
            
                                min-[1440px]:text-[1.6rem]   

            
                        `}
          >
            <span className={`opacity-30 mr-[2rem] font-semibold`}>01</span>
            PICK YOUR DESTINATION
          </h2>
        </div>

        <div
          className={`carousel-area  flex justify-between 

                                absolute
                          min-[1440px]:bottom-[6rem]
                          min-[1440px]:left-[11.25rem]



                          min-[1440px]:w-[75%] min-[1440px]:h-[54%]

                        `}
        >
          {/* Image area  */}
          <div
            className={` image-crew-area flex  w-1/2 h-[52%] mt-[4rem]
                                
                                            min-[1440px]:w-[40%] min-[1440px]:h-[87%]
                                            min-[1440px]:mt-[0rem]
                            `}
          >
            <img src={srcId} alt="" />

            <div
              className={`buttons-area absolute bottom-[6.5rem]  w-[10rem] h-[1rem]     `}
            >
              <ul className={`w-full h-full  flex justify-between`}></ul>
            </div>
          </div>

          {/* image area  */}
          <div
            className={` text-planet w-[42%] h-full flex  flex-col justify-between  `}
          >
            {/* <Outlet > */}
            <div className={`navPlanets w-[68%] h-[7%] `}>
              <nav
                className={`    text-white 
        
          
                                    min-[1440px]:w-full min-[1440px]:h-full min-[1440px]:
                                    min-[1440px]:self-end min-[1440px]:flex min-[1440px]:font-light
                                    min-[1440px]:items-center min-[1440px]:text-[1.1rem] min-[1440px]:tracking-wider 


        
                            `}
              >
                <ul
                  className={`  

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
 
 

                                    min-[1440px]:w-[75%] min-[1440px]:h-[18%] min-[1440px]: flex


                            `}>

                              <h1 className={` text-white leading-[6rem] uppercase
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

                              <div className={`right-time   mr-[2rem] mb-[0.8rem] flex flex-col justify-between
                              
                                                          min-[1440px]:w-[38%] min-[1440px]:h-[62%] 
                                                  `}>



                                           <p className={`text-white font-[300] tracking-[0.08rem]
                                                                min-[1440px]:text-[1.15rem] min-[1440px]:
                                                        `}>
                                                        
                                              EST. TRAVEL TIME
                                          </p>

                                           <h1 className={`text-white font-[300] tracking-wide leading-4
                                                                uppercase
                                                                
                                                                
                                                                min-[1440px]:text-[1.9rem] min-[1440px]: 
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
