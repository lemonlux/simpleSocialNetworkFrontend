import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import "./Home.css"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
