import React from 'react'
import NavBar from '../Navbar/NavBar';

export default function Destination() {
  return (
    <>
      <div
        className={`w-[100dvw]   h-[100dvh]   bg-no-repeat bg-cover min-[1440px]:bg-destination-desktop `}
      >
        {/* <Outlet/> */}

        <NavBar />
      </div>
    </>
  );
}
