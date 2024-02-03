import { useEffect, useState } from "react";
import { DivLine } from "../components/styledComponents/DivLine";
import { FlexDir } from "../components/styledComponents/FlexDir";
import { NavBar } from "../components/styledComponents/NavBar";
import { getAllPosts, getAllPostsFollowing } from "../services/post.service";
import { usePageNumbering } from "../hooks/usePageNumbering";
import { H3Feed } from "../components/styledComponents/H3Feed";
import { IndividualPost } from "../components/IndividualPost";
import {
  addFavPost,
  addSavedPost,
  getUserById,
  getUserByIdP,
} from "../services/user.service";
import { useAuth } from "../context/authContext";
import { Loading } from "../components/styledComponents/Loading";

export const Feed = () => {
  //! -- hooks
  const [feed, setFeed] = useState("fyp"); //* -- feed
  const [res, setRes] = useState(null);
  const [send, setSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //* -- likes
  const [updatedLikes, setUpdatedLikes] = useState(false);

  const [userSavedPosts, setUserSavedPosts] = useState([]); //* -- bookmarks
  const [updatedSaved, setUpdatedSaved] = useState(false);


  const { ComponentPageNumbering, setGalleryItems, dataPag } =
    usePageNumbering(3);
  const { user } = useAuth();

  //!-- fetch
  const setGallery = async () => {
    if (feed == "fyp") {
      setSend(true);
      setRes(await getAllPosts());

      setIsLoading(false);
      setSend(false);
    } else if (feed == "following") {
      setSend(true);
      setRes(await getAllPostsFollowing());

      setIsLoading(false);
      setSend(false);
    }
  };
  console.log(res);

  const addToLikes = async (id) => {
    const response = await addFavPost(id);
    setUpdatedLikes(!updatedLikes);
  };

  const getLikedPosts = async () => {
    const response = await getUserById(user._id);
    setUserLikedPosts(response?.data?.likedPosts); //! tiene que ser un array - BACK NO POPULADO
  };

  const addToSaved = async (id) => {
    const response = await addSavedPost(id);
    setUpdatedSaved(!updatedSaved);
  };

  const getSavedPosts = async () => {
    const response = await getUserById(user._id);
    setUserSavedPosts(response?.data?.savedPosts); 
  };


  //! useEffect

  useEffect(() => {
    res?.status == 200 && setGalleryItems(res?.data);
  }, [res, feed]);

  useEffect(() => {
    setGallery();
  }, [feed]);

  useEffect(() => {
    getLikedPosts();
    getSavedPosts()
  }, [updatedLikes, updatedSaved, feed]);


  return (
    isLoading ? <Loading/> : (
    <>
      <NavBar>
        <div onClick={() => setFeed("fyp")}>
          <H3Feed variant={feed == "fyp" && "focus"}>For you</H3Feed>
        </div>
        <div onClick={() => setFeed("following")}>
          <H3Feed variant={feed == "following" && "focus"}>Following</H3Feed>
        </div>
      </NavBar>
      <DivLine variant="H" />
      <ComponentPageNumbering />
      <DivLine variant="H" />
      <FlexDir
        direction="column"
        height="84vh"
        width="100%"
        justifyContent="start"
      >
        {dataPag.map((item) => (
          <>
            <IndividualPost
              username={item.creator[0].username}
              img={item.creator[0].image}
              text={item.text}
              addToLikes={addToLikes}
              addToSaved={addToSaved}
              id={item._id}
              userLikedPosts={userLikedPosts}
              userSavedPosts={userSavedPosts}
            />
            <DivLine variant="H" />
            {/* <p>@{item.creator[0].username}</p>
    <p>{item.text}</p> */}
          </>
        ))}
      </FlexDir>
    </>
    )
  );
};
