import { Outlet } from "react-router-dom"
import { DivLine, LogedOutElement } from "../components"
import { useThemeApp } from "../context/themeContext"

export const LogedOut = () => {
  const { isMobile } = useThemeApp()
  return (
    <>
    <LogedOutElement>

    { !isMobile && (<>
    <img  alt="logo bird" className="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1706802571/Untitled_Artwork_39_opu2jb.png"/>
   <DivLine variant="V"/>
   </>)}
    <Outlet/>
    </LogedOutElement>
    </>
  )
}
