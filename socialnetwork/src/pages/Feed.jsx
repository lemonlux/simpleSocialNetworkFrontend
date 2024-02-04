import { useEffect, useState } from "react";

import { getAllPosts, getAllPostsFollowing } from "../services/post.service";
import { usePageNumbering } from "../hooks/usePageNumbering";

import {
  addFavPost,
  addSavedPost,
  getUserById,
} from "../services/user.service";
import { useAuth } from "../context/authContext";
import { DivLine, FlexDir, H3Feed, Loading, NavBar } from "../components";
import { IndividualPost } from "../components/IndividualPost";


export const Feed = () => {
  //! -- states
  const [feed, setFeed] = useState("fyp"); //* -- feed
  const [res, setRes] = useState(null);
  const [send, setSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //* -- likes
  const [updatedLikes, setUpdatedLikes] = useState(false);

  const [userSavedPosts, setUserSavedPosts] = useState([]); //* -- bookmarks
  const [updatedSaved, setUpdatedSaved] = useState(false);

  //!-- hooks

  const { ComponentPageNumbering, setGalleryItems, dataPag } =
    usePageNumbering(4);
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
            key={item._id}
              username={item.creator.username}
              img={item.creator.image}
              text={item.text}
              addToLikes={addToLikes}
              addToSaved={addToSaved}
              id={item._id}
              userLikedPosts={userLikedPosts}
              userSavedPosts={userSavedPosts}
            />
            <DivLine variant="H" />
          </>
        ))}
      </FlexDir>
    </>
    )
  );
};
