import { Outlet } from "react-router-dom"
import "./LogedOut.css"

export const LogedOut = () => {
  return (
    <>
    <main className="logedOut">
    <img  alt="logo bird" className="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1706802571/Untitled_Artwork_39_opu2jb.png"/>
   <div className="divLine"></div>
    <Outlet/>
    </main>
    </>
  )
}
