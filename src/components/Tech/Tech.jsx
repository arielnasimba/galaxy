import React from 'react'
import NavBar from '../Navbar/NavBar';

import TET from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import  "../Tech/Tech.css"
import { Outlet, Link , useParams} from 'react-router-dom';
import DATA from "../../assets/data/data.json"


export default function Tech() {

    

  const {id = 0} = useParams();
  const technoId = DATA.technology[id];
  console.log(technoId.images);

  const src_technotId = (technoId.images.portrait).split('/').splice(2,4).join('/');

  const srcId = new URL(`../../assets/images/${src_technotId}`, import.meta.url).href;

  return (
    <>
      <div
        className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover min-[1440px]:bg-tech-desktop`}
      >

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
            <span className={`opacity-30 mr-[2rem] font-semibold`}>03</span>
             SPACE LAUNCH 101
          </h2>
        


        
            </div>


            <div
          className={`carousel-area  flex justify-between  flex-row-reverse

                                absolute
                          min-[1440px]:bottom-[3.4rem]
                          min-[1440px]:right-0



                          min-[1440px]:w-[87.5%] min-[1440px]:h-[58%]

                        `}
        >
          {/* Image area  */}
          <div
            className={` image-satelitte-area flex  w-1/2 h-full mt-[4rem] bg-gray-200
                                
                                            min-[1440px]:w-[41%] min-[1440px]:h-full
                                            min-[1440px]:mt-[0rem]
                            `}
          >
            <img src={srcId} alt="" className='h-full w-full' />

            <div
              className={`buttons-area absolute bottom-[6.5rem]  w-[10rem] h-[1rem]     `}
            >
              <ul className={`w-full h-full  flex justify-between`}></ul>
            </div>
          </div>

          {/* image area  */}
          <div
            className={` text-planet w-[48%] h-full flex   justify-between  items-center   `}
          >
            {/* <Outlet > */}
            <div className={`navLaunch w-[15%] h-[57%]   mb-10`}>
              <nav
                className={`    text-white 
        
          
                                    min-[1440px]:w-full min-[1440px]:h-full min-[1440px]:
                                    min-[1440px]:self-end min-[1440px]:flex min-[1440px]:font-light
                                    min-[1440px]:items-center min-[1440px]:text-[1.1rem] min-[1440px]:tracking-wider 


        
                            `}
              >
                <ul
                  className={` satelite-btn  flex-col

                      min-[1440px]: min-[1440px]:w-full 
                      min-[1440px]:h-full min-[1440px]:mx-auto min-[1440px]:flex min-[1440px]:gap-10
                      min-[1440px]: min-[1440px]:items-center
                      min-[1440px]:justify-between                      
                            `}



                >

                    
                  {
                  
                  DATA.technology.map((launches,key) =>{
                      // console.log(launches);
                  
                      return (
                          <Link 
                              key={key}
                              to={`/galaxy/tech/${key}`}
                              className={`  w-[80%] outline outline-[0.01rem] rounded-full h-full cursor-pointer hover:bg-white hover:text-black flex justify-center items-center text-[2rem]`}
                          >
                            {key+1}
 
                          </Link>
                      ) 
                      
                      
                    })
                  }


                </ul>
              </nav>
            </div>

  
            <div className={`inside-launch   w-[76%] h-[57%] mb-10 flex flex-col
            
            
            `}>


                        <div className={`top-launch


                                        min-[1440px]:w-[30%] min-[1440px]:h-[8%]  
                        `}>

                            <p className={ ` text-white
                            
                            min-[1440px]:leading-9
                            `}>

                                THE TERMINOLOGY...

                            </p>

                        </div>

                        <div className={`mid-launch flex items-end 


                                        min-[1440px]:w-full min-[1440px]:h-[20%] 
                        `}>

                            <h1 className={ ` text-white uppercase
                            
                            min-[1440px]:leading-9 min-[1440px]:text-[3.3rem]
                            `}>

                                {technoId.name}

                            </h1>

                        </div>

                        <div className={`bot-launch mt-[3rem]


                                        min-[1440px]:w-[86%] min-[1440px]:h-[56%]  
                        `}>

                            <p className={ ` text-white font-light tracking-[1px]
                            
                            min-[1440px]:leading-7 min-[1440px]:text-[1.15rem]
                            `}>

                                {technoId.description}


                            </p>

                        </div>


            </div>







          </div>



        </div>

    </div>
    </>
  );
}
