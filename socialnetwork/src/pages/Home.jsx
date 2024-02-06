import { Navigate, Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { DivLine, FlexDir, HomeElement } from "../components"
import { useEffect } from "react"
import { useThemeApp } from "../context/themeContext"


export const Home = () => {

const redirect = () =>{
  return <Navigate to="/feed" />
}

const { isMobile } = useThemeApp()
useEffect(() => {
  redirect()
}, [])



  return (
    <>
    <HomeElement>
      <Header/>
      {!isMobile && <DivLine variant="V"/>}
      <FlexDir margin="0" gap="0" width={isMobile ? "100vw" :"49vw" }   padding={isMobile ? "4px 2px 30px 2px" :"0" } direction="column">
      <Outlet/>
      </FlexDir>
      {!isMobile && <DivLine variant="V"/>}
      <Footer/>
      </HomeElement>
    </>
  )
}
