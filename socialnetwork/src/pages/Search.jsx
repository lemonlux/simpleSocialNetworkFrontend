import { useEffect, useState } from "react"

import { searchPost } from "../services/post.service"
import { addFavPost, addFollowing, addSavedPost, getUserById, getUserByUsername } from "../services/user.service"

import { useAuth } from "../context/authContext"
import { DivLine, FlexDir, H3Feed, NavBar, SearchBar } from "../components"
import { IndividualPost } from "../components/IndividualPost"
import { MiniProfile } from "../components/MiniProfile"

export const Search = () => {

  //!--states
const [search, setSearch] = useState("posts")

const [res, setRes] = useState(null); //* -- feed
const [send, setSend] = useState(false);
const [isLoading, setIsLoading] = useState(true);

const [searchInput, setSearchInput] = useState(null); //* --- search

const [userLikedPosts, setUserLikedPosts] = useState([]); //* -- likes
const [updatedLikes, setUpdatedLikes] = useState(false);

const [userSavedPosts, setUserSavedPosts] = useState([]); //* -- bookmarks
const [updatedSaved, setUpdatedSaved] = useState(false);

const [userFollowing, setUserFollowing] = useState([]) //* -- following
const [updatedFollowing, setUpdatedFollowing] = useState(false)

//!--hooks
const { user } = useAuth();

 //!-- fetch

 const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setGallery()
    }
}

 const setGallery = async () => {
    if (search == "posts") {
      setSend(true);
      setRes(await searchPost(searchInput));

      setIsLoading(false);
      setSend(false);
    } 
     if (search == "people") {
      setSend(true);
      setRes(await getUserByUsername(searchInput));

      setIsLoading(false);
      setSend(false);
    }
  };
  // console.log(res?.data);


  const addToLikes = async (id) => {
    const response = await addFavPost(id);
    setUpdatedLikes(!updatedLikes);
  };

  const addToSaved = async (id) => {
    const response = await addSavedPost(id);
    setUpdatedSaved(!updatedSaved);
  };

const addToFollowing = async (id) =>{
  const response = await addFollowing(id)
  console.log(response)
  setUpdatedFollowing(!updatedFollowing)
}

  const getLikedPosts = async () => {
    const response = await getUserById(user._id);
    setUserLikedPosts(response?.data?.likedPosts); //! tiene que ser un array - BACK NO POPULADO
    setUserSavedPosts(response?.data?.savedPosts)
    setUserFollowing(response?.data?.following)
  };

  console.log(userFollowing)

//!-- useEffect 

useEffect(() => {
setGallery()
}, [search])

useEffect(() => {
    getLikedPosts();
    // getSavedPosts()
  }, [updatedLikes, updatedSaved, updatedFollowing, search]);





  return (
    <>

    <SearchBar> <div> <input placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown}/> <i className="bi bi-search" onClick={setGallery} ></i> </div></SearchBar>

    <NavBar>
        <div onClick={() => setSearch("posts")}>
        <H3Feed  variant={search == "posts" && "focus"} >Posts</H3Feed >
        </div>
        <div onClick={() => setSearch("people")} >
        <H3Feed variant={search == "people" && "focus"}>People</H3Feed >
        </div>
    </NavBar>
    <DivLine variant="H"/>
<FlexDir direction="column" height="84vh" width="100%" justifyContent="start">
    
{search == "posts" && res?.data != null && (
    <>
            {res?.data?.slice(0,4).map((item) => (
          <>
            <IndividualPost
            key={item._id}
              username={item?.creator?.username}
              img={item?.creator?.image}
              text={item?.text}
              addToLikes={addToLikes}
              addToSaved={addToSaved}
              id={item?._id}
              userLikedPosts={userLikedPosts}
              userSavedPosts={userSavedPosts}
            />
            <DivLine variant="H" />
          </>
        ))}
    </>
) }

{ search == "people" && res?.data != null && (
  <>
{res?.data.map((item) => (
  <>
  {console.log(item?.username)}
      <MiniProfile 
      username={item?.username}
      img={item?.image}
      id={item?._id}
      description={item?.description}
      addToFollowing={addToFollowing}
      userFollowing={userFollowing}
      
      />
      <DivLine variant="H" />
      </>
))}
</>
)


}
    
     </FlexDir>


    
    
    </>
  )
}
