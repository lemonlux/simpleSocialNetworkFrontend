import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { DivLine, FlexDir, HomeElement } from "../components"


export const Home = () => {
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
