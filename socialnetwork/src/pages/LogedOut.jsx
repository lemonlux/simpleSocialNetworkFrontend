import { Outlet } from "react-router-dom"
import { LogedOutElement } from "../components/styledComponents/LogedOut.element"
import { DivLine } from "../components/styledComponents/DivLine"

export const LogedOut = () => {
  return (
    <>
    <LogedOutElement>

    <img  alt="logo bird" className="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1706802571/Untitled_Artwork_39_opu2jb.png"/>
   <DivLine/>
    <Outlet/>
    </LogedOutElement>
    </>
  )
}
