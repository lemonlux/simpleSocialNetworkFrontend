import { useEffect, useState } from "react";
import { usePageNumbering } from "../hooks/usePageNumbering";
import { useAuth } from "../context/authContext";
import { addFavPost, addSavedPost, getUserById, getUserByIdP } from "../services/user.service";
import { DivLine, FlexDir, H1Form, H2Form, Loading, NavBar } from "../components";
import { IndividualPost } from "../components/IndividualPost";
import { Link } from "react-router-dom";

export const Bookmarks = () => {

  //! -- states
  const [res, setRes] = useState(null); //* -- feed
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

      setSend(true);

      setRes(await getUserByIdP(user._id));

      setIsLoading(false);
      setSend(false);
  
  };

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
      res?.status == 200 && setGalleryItems(res?.data?.savedPosts);
    }, [res]);
  
    useEffect(() => {
      setGallery();
    }, [updatedSaved, updatedLikes]);
  
    useEffect(() => {
      getLikedPosts();
    }, [updatedLikes, updatedSaved]);

  return (
    isLoading ? (
      <Loading />
    ) : (
      <>
        <NavBar>
          <h2>Bookmarks</h2>
        </NavBar>
        <DivLine variant="H" />
        {dataPag?.length == 0 && (
          <>
           <FlexDir
        direction="column"
        height="90vh"
        width="100%"
        justifyContent="start"
        padding="28px 0 0 0"

      >
          <H1Form  fontSize="40px">This is empty</H1Form>
          <H2Form fontSize="20px" color="#74787d">Start exploring. Browse <Link to="/feed">feed</Link></H2Form>
          </FlexDir>
          </>
        )}
        {dataPag?.length !== 0 && (
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
           likes={item.likes.length}
           privacy={item.creator.privacy}
           comments={item.comments.length}
              key={item._id}
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
          )}
        </>
    )
  )
}
