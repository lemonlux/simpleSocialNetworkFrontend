import { useState } from "react"
import { H3Feed } from "../components/styledComponents/H3Feed"
import { NavBar } from "../components/styledComponents/NavBar"
import { DivLine } from "../components/styledComponents/DivLine"
import { FlexDir } from "../components/styledComponents/FlexDir"

export const Search = () => {

const [search, setSearch] = useState("posts")





  return (
    <>
        <NavBar>
        <div onClick={() => setSearch("posts")}>
        <H3Feed  variant={search == "posts" && "focus"} >Posts</H3Feed >
        </div>
        <div onClick={() => setSearch("people")} >
        <H3Feed variant={search == "people" && "focus"}>People</H3Feed >
        </div>
    </NavBar>
    <DivLine variant="H"/>

<FlexDir direction="column" height="92vh" width="98%"> </FlexDir>
    
    
    </>
  )
}
