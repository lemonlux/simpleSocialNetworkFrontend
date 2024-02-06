import { Navigate, Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { DivLine, FlexDir, HomeElement } from "../components"
import { useEffect } from "react"


export const Home = () => {

const redirect = () =>{
  return <Navigate to="/feed" />
}

useEffect(() => {
  redirect()
}, [])



  return (
    <>
    <HomeElement>
      <Header/>
      <DivLine variant="V"/>
      <FlexDir margin="0" gap="0" width="49vw" direction="column">
      <Outlet/>
      </FlexDir>
      <DivLine variant="V"/>
      <Footer/>
      </HomeElement>
    </>
  )
}
