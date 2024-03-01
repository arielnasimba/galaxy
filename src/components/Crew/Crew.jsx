import React from 'react'
import NavBar from '../Navbar/NavBar'
import DATA from "../../assets/data/data.json"
import TEST from "../../assets/images/crew/image-douglas-hurley.png"
import { Link, useParams } from 'react-router-dom'

export default function  Crew() {

    const {id = 0} = useParams();
    const crewId = DATA.crew[id];

    const src_crewId = (crewId.images.png).split('/').splice(2,4).join('/');

    const srcId = new URL(`../../assets/images/${src_crewId}`, import.meta.url).href;

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
        

                            min-[1440px]:top-[13rem] min-[1440px]:left-[11.25rem]
                            min-[1440px]: 
                            min-[1440px]:w-[26%] min-[1440px]:h-[5%]
                        `}>

            <h2 className={`text-white tracking-[0.5rem]
            
                                min-[1440px]:text-[1.6rem]   

            
                        `}>

                    <span className={`opacity-30 mr-[2rem] font-semibold`}>

                        02 
                    </span> 

                        MEET YOUR CREW
            </h2>

        </div>


        <div className={`carousel-area  flex justify-between

                            self-center   absolute 
                          min-[1440px]:bottom-[1.4rem]



                          min-[1440px]:w-[75%] min-[1440px]:h-[63%]

                        `}>


            <div className={`text-crew  flex flex-col  w-[44%] h-[52%] mt-[4rem]
            
                                            min-[1440px]:
                            `}>
                            
                <div className={`role-crew 
                                    w-[50%] h-[16%]
                                `}>

                                    <h4 className={`text-[1.8rem] text-[rgba(255,255,255,0.8)]`} >{crewId.role}  </h4>


                </div>

                <div className={`name-crew w-full h-[22%] 

                                        `}>

                                <h5 className={`text-[3.41rem] text-[rgba(255,255,255,1)]

                                                    -ml-1 leading-[3rem]
                                `} >{crewId.name}   </h5>


                </div>


                <div className={`desc-crew w-full h-[46%] mt-9  

                                        `}>

                        <p className={`text-[1.4rem] leading-[2.1rem] text-white opacity-100
                                            tracking-wider
                            font-thin
                        `} > 
                        {crewId.bio}
                          </p>


                </div>

                <div className={`buttons-area absolute bottom-[6.5rem]  w-[10rem] h-[1rem]     `}>


                <ul className={`w-full h-full  flex justify-between`}>


                    {

                        DATA.crew.map((crewMember,key) =>{
                            // console.log(crewMember);

                            return (
                                <Link 
                                    key={key}
                                    to={`/galaxy/crew/${key}`}
                                    className={`bg-white w-[8%] opacity-50 rounded-full h-[85%] cursor-pointer hover:underline`}
                                >
                                </Link>
                            ) 


                          })
                    }



{/* 
                    <Link className={`bg-white w-[8%] opacity-50 rounded-full h-[85%]`}>

                    </Link>

                    <Link className={`bg-white w-[8%] opacity-50 rounded-full h-[85%]`}>

                    </Link>

                    <Link className={`bg-white w-[8%] opacity-50 rounded-full h-[85%]`}>

                    </Link>

                    <Link className={`bg-white w-[8%] opacity-50 rounded-full h-[85%]`}>

                    </Link> */}
                </ul>



                </div>


            </div>


                    {/* image area  */}
            <div className={`image-crew-area  w-[42%] h-full flex  `}>


                
                <img src={srcId} alt="hello" srcset="" />



            </div>



{/* <div className="carousel w-[45%]  right-0 absolute h-[100%] bg-orange-400">
  <div id="item1" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className={`flex justify-between w-[8rem] py-2 gap-4 bg-black absolute left-0 bottom-[4rem]`}>
  <a href="#item1" className={`  w-[0.7rem] h-[0.7rem] opacity-20 focus:opacity-100 bg-white rounded-full`}></a> 
  <a href="#item2" className={`  w-[0.7rem] h-[0.7rem] opacity-20 focus:opacity-100 bg-white rounded-full`}></a> 
  <a href="#item3" className={`  w-[0.7rem] h-[0.7rem] opacity-20 focus:opacity-100 bg-white rounded-full`}></a> 
  <a href="#item4" className={`  w-[0.7rem] h-[0.7rem] opacity-20 focus:opacity-100 bg-white rounded-full`}></a>
</div>

                             */}


        </div>

      </div>

    
    </>
  )
}
