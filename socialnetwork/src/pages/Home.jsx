import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

import { Footer } from "../components/Footer"
import { HomeElement } from "../components/styledComponents/Home.element"
import { FlexDir } from "../components/styledComponents/FlexDir"
import { DivLine } from "../components/styledComponents/DivLine"

export const Home = () => {
  return (
    <>
    <HomeElement>
      <Header/>
      <DivLine/>
      <FlexDir margin="0" gap="0" width="49vw">
      <Outlet/>
      </FlexDir>
      <DivLine/>
      <Footer/>
      </HomeElement>
    </>
  )
}
