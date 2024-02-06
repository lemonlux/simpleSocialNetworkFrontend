import { useEffect, useState } from "react";

import { getAllPosts, getAllPostsFollowing } from "../services/post.service";
import { usePageNumbering } from "../hooks/usePageNumbering";

import {
  addFavPost,
  addSavedPost,
  getUserById,
} from "../services/user.service";
import { useAuth } from "../context/authContext";
import { DivLine, FlexDir, H1Form, H2Form, H3Feed, Loading, NavBar } from "../components";
import { IndividualPost } from "../components/IndividualPost";
import { Link } from "react-router-dom";

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
    setUserSavedPosts(response?.data?.savedPosts);
  };

  const addToSaved = async (id) => {
    const response = await addSavedPost(id);
    setUpdatedSaved(!updatedSaved);
  };

  console.log(dataPag)


  //! useEffect

  useEffect(() => {
    res?.status == 200 && setGalleryItems(res?.data);
  }, [res, feed]);

  useEffect(() => {
    setGallery();
  }, [feed]);

  useEffect(() => {
    getLikedPosts();
  }, [updatedLikes, updatedSaved, feed]);

  return isLoading ? (
    <Loading />
  ) : (
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
      {dataPag?.length == 0 && (
          <>
           <FlexDir
        direction="column"
        height="91vh"
        width="100%"
        justifyContent="start"
        padding="28px 0 0 0"

      >
          <H1Form  fontSize="40px">This is empty</H1Form>
          <H2Form fontSize="20px" color="#74787d">You are not following any user. Browse <Link to="/search">explore</Link> to find your friends.</H2Form>
          </FlexDir>
          </>
        )}
      { dataPag?.length != 0 &&
        <>
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
              likes={item.likes.length}
              privacy={item.creator.privacy}
              comments={item.comments.length}
              username={item.creator.username}
              img={item.creator.image}
              text={item.text}
              addToLikes={addToLikes}
              addToSaved={addToSaved}
              id={item._id}
              userLikedPosts={userLikedPosts}
              userSavedPosts={userSavedPosts}
              variant="post"
            />
            <DivLine variant="H" />
          </>
        ))}
      </FlexDir>
      </>
}
    </>
  );
};
