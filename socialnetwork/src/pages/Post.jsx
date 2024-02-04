import { useParams } from "react-router-dom"
import { getPostById } from "../services/post.service";
import { useEffect, useState } from "react";
import { ButtonPrimary, DivLine, FlexDir, Loading, NavBar } from "../components";
import { IndividualPost } from "../components/IndividualPost";
import { addFavPost, addSavedPost, getUserById } from "../services/user.service";
import { useAuth } from "../context/authContext";
import { Comment } from "../components/styledComponents/Comment";
import { useForm } from "react-hook-form";
import { createComment } from "../services/comment.service";



export const Post = () => {
    //!-- states
    const [res, setRes] = useState();
    const [send, setSend] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isOwner, setIsOwner] = useState();
    const [inputValue, setInputValue] = useState("");

    const [userLikedPosts, setUserLikedPosts] = useState([]); //* -- likes
    const [updatedLikes, setUpdatedLikes] = useState(false);
  
    const [userSavedPosts, setUserSavedPosts] = useState([]); //* -- bookmarks
    const [updatedSaved, setUpdatedSaved] = useState(false);

    const [ownUser, setOwnUser] = useState([]) //* -- user

    const [resComment, setResComment] = useState()
    const [sendComment, setSendComment] = useState(false);
    const [isLoadingComment, setIsLoadingComment] = useState(true);

    //!-- hooks
    const { id } = useParams()
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();


    //!-- fetch

    const setGallery = async () =>{
        setSend(true);
        const response = await getPostById(id);
        setRes(response.data)
        setIsLoading(false);
        setSend(false);
    }

    console.log(res?.comments)
   

    const formSubmit = async (formData) => {
        setResComment(await createComment(id, formData));
        setInputValue("")

        }


const addToLikes = async (id) => {
    const response = await addFavPost(id);
    setUpdatedLikes(!updatedLikes);
  };

  const getLikedPosts = async () => {
    const response = await getUserById(user._id);
    setUserLikedPosts(response?.data?.likedPosts);
    setUserSavedPosts(response?.data?.savedPosts);
    setOwnUser(response?.data)
  };


  const addToSaved = async (id) => {
    const response = await addSavedPost(id);
    setUpdatedSaved(!updatedSaved);
  };


    //!--- useEffects

    useEffect(() => {
 setGallery()
    }, [resComment])

    useEffect(() => {
        getLikedPosts();
      }, [updatedLikes, updatedSaved]);
    

    
  return (
    isLoading ? (
    <Loading />
  ) : (
    <>
      <NavBar>
        <h2>Post</h2>
      </NavBar>
      <DivLine variant="H" />
      <FlexDir
        direction="column"
        height="92vh"
        width="100%"
        justifyContent="start"
      >

          
            <IndividualPost
              key={res?._id}
              username={res?.creator?.username}
              img={res?.creator?.image}
              text={res?.text}
              addToLikes={addToLikes}
              addToSaved={addToSaved}
              id={res?._id}
              userLikedPosts={userLikedPosts}
              userSavedPosts={userSavedPosts}
              variant="post"
            />
            <DivLine variant="H" />
            <Comment onSubmit={handleSubmit(formSubmit)}>
            <FlexDir
          alignItems="start"
          gap="0"
          margin="0"
          width="12%"
          height="100%"
          padding="16px 0 0 0"
        >
          <img alt={ownUser.username} src={ownUser.image} />
        </FlexDir>
        <FlexDir
          gap="0"
          margin="0"
          padding="0 12px 0 4px"
          width="88%"
          direction="column"
          height="100%"
        >
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="start"
            height="40px"
          >
            <h4>Replying to <span>@{res?.creator?.username}</span></h4>
          </FlexDir>
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="start"
            height="auto"
            minHeight="40px"
          >
            <textarea placeholder="Type your reply" 
             onInput={(e) => {
                setInputValue(e.target.value);
              }}
            value={inputValue}
            {...register("textComment", {
                required: true,
                minLength: 1,
                maxLength: 140,
              })}/>
            
          </FlexDir>
          
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="end"
            height="40px"
          >
 <ButtonPrimary variant="normal" fontSize="15px" width="80px" type="submit" > Reply </ButtonPrimary>
          </FlexDir>
        </FlexDir>
        
            </Comment>
            <DivLine variant="H" />
            {res?.comments?.slice(0, 3).map((item) => (
              <>
                <IndividualPost
                  key={item._id}
                  username={item?.creator?.username}
                  img={item?.creator?.image}
                  text={item?.textComment}
                  addToLikes={addToLikes}
                  addToSaved={addToSaved}
                  id={item?._id}
                  userLikedPosts={userLikedPosts}
                  userSavedPosts={userSavedPosts}
                  variant="comment"
                />
                <DivLine variant="H" />
              </>
            ))}
      </FlexDir>
    </>
  )
  )
}
