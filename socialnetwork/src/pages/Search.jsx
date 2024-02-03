import { useEffect, useState } from "react"
import { H3Feed } from "../components/styledComponents/H3Feed"
import { NavBar } from "../components/styledComponents/NavBar"
import { DivLine } from "../components/styledComponents/DivLine"
import { FlexDir } from "../components/styledComponents/FlexDir"
import { SearchBar } from "../components/styledComponents/SearchBar"
import { searchPost } from "../services/post.service"
import { getUserByUsername } from "../services/user.service"

export const Search = () => {

const [search, setSearch] = useState("posts")

const [res, setRes] = useState(null);
const [send, setSend] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [searchInput, setSearchInput] = useState(null);

 //!-- fetch
 const setGallery = async () => {
    if (search == "posts") {
      setSend(true);
      setRes(await searchPost(searchInput));

      setIsLoading(false);
      setSend(false);
    } 
     if (search == "people") {
        console.log("entro aquiii")
      setSend(true);
      setRes(await getUserByUsername(searchInput));

      setIsLoading(false);
      setSend(false);
    }
  };
  console.log(res);
  console.log(search)

useEffect(() => {
setGallery()
}, [search])




  return (
    <>

    <SearchBar> <div> <input placeholder="Search" onChange={(e) => setSearchInput(e.target.value)}/> <i className="bi bi-search" onClick={setGallery}></i> </div></SearchBar>

    <NavBar>
        <div onClick={() => setSearch("posts")}>
        <H3Feed  variant={search == "posts" && "focus"} >Posts</H3Feed >
        </div>
        <div onClick={() => setSearch("people")} >
        <H3Feed variant={search == "people" && "focus"}>People</H3Feed >
        </div>
    </NavBar>
    <DivLine variant="H"/>
<FlexDir direction="column" height="84vh" width="98%"> </FlexDir>
    
    
    </>
  )
}
