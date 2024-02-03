import { useEffect, useState } from "react"
import { DivLine } from "../components/styledComponents/DivLine"
import { FlexDir } from "../components/styledComponents/FlexDir"
import { NavBar } from "../components/styledComponents/NavBar"
import { getAllPosts, getAllPostsFollowing } from "../services/post.service"
import { usePageNumbering } from "../hooks/usePageNumbering"
import { H3Feed } from "../components/styledComponents/H3Feed"

export const Feed = () => {

//! -- hooks
    const [feed, setFeed] = useState("fyp")
    const [res, setRes] = useState(null)
    const [send, setSend] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { ComponentPageNumbering, setGalleryItems, dataPag } = usePageNumbering (3)

//!-- fetch
    const setGallery = async () => {
        if (feed == "fyp"){
            setSend(true);
            setRes(await getAllPosts());
       
            setIsLoading(false);
            setSend(false);

        } else if (feed == "following"){
            setSend(true);
            setRes(await getAllPostsFollowing());
        
            setIsLoading(false);
            setSend(false);
        }
   
      };
      console.log(res)
      //! useEffect

      useEffect(() => {
        res?.status == 200 && setGalleryItems(res?.data);
      }, [res, feed]);
    
      useEffect(() => {
        setGallery();
      }, [feed]);


console.log(dataPag)



  return (
    <>
   
    <NavBar>
        <div onClick={() => setFeed("fyp")}>
        <H3Feed  variant={feed == "fyp" && "focus"} >For you</H3Feed >
        </div>
        <div onClick={() => setFeed("following")} >
        <H3Feed variant={feed == "following" && "focus"}>Following</H3Feed >
        </div>
    </NavBar>
    <DivLine variant="H"/>
    <ComponentPageNumbering/>
    <DivLine variant="H"/>
     <FlexDir direction="column" height="84vh" width="99%"> 
     
  {dataPag.map(item => (
    <>
    <p>@{item.creator[0].username}</p>
    <p>{item.text}</p>
    </>
  ))}
   </FlexDir>
    </>
   
  )
}
