import { useNavigate, useParams } from "react-router-dom"
import { addFavPost, addFollowing, addSavedPost, getUserById, getUserByUsernamePopulated } from "../services/user.service";
import { useEffect, useState } from "react";
import { ButtonPrimary, DivLine, FlexDir, H1Form, H2Form, H3Feed, IndividualPostElement, NavBar, Span } from "../components";
import { useAuth } from "../context/authContext";
import { UserElement } from "../components/styledComponents/User.element";
import { IndividualPost } from "../components/IndividualPost";


export const User = () => {

 //!-- states
 const [feed, setFeed] = useState("posts"); //* -- feed

 const [res, setRes] = useState(); //* -- user
 const [send, setSend] = useState(false);
 const [isLoading, setIsLoading] = useState(true);

 const [userLikedPosts, setUserLikedPosts] = useState([]); //* -- likes
 const [updatedLikes, setUpdatedLikes] = useState(false);

 const [userSavedPosts, setUserSavedPosts] = useState([]); //* -- bookmarks
 const [updatedSaved, setUpdatedSaved] = useState(false);

 const [updatedFollowing, setUpdatedFollowing] = useState(false); //* -- following
 const [userFollowing, setUserFollowing] = useState([])

 //! -- hooks
    const { username } = useParams()
    const { user } = useAuth();
    const navigate = useNavigate()

//! --- fetch
    const fetchData = async () => {
        setSend(true);
        setRes(await getUserByUsernamePopulated(username));
        setIsLoading(false);
        setSend(false);
      };

      const isOwnUser = username == user.username ? true : false 

      const addToFollowing = async () => {
        const response = await addFollowing(res?.data?._id);
        setUpdatedFollowing(!updatedFollowing);
      };

      const ownUser = async () => {
        const response = await getUserById(user?._id);
        setUserFollowing(response?.data?.following);
        setUserLikedPosts(response?.data?.likedPosts); 
         setUserSavedPosts(response?.data?.savedPosts);
      };

      const addToLikes = async (id) => {
        const response = await addFavPost(id);
        setUpdatedLikes(!updatedLikes);
      };

      const addToSaved = async (id) => {
        const response = await addSavedPost(id);
        setUpdatedSaved(!updatedSaved);
      };
    

     //!--- useEffects


           useEffect(() => {
            fetchData()
            ownUser()
               }, [updatedFollowing, updatedLikes, updatedSaved])

      const isFollowing = userFollowing?.includes(res?.data?._id);


  return (
    <>
    <NavBar>
        <h2>@{username}</h2>
      </NavBar>
      <DivLine variant="H" />
          <UserElement>
        <FlexDir
          alignItems="start"
          gap="0"
          margin="0"
          width="20%"
          height="100%"
          padding="16px 0 0 0"
        >
          <img alt={username} src={res?.data?.image} />
         
        </FlexDir>
        <FlexDir
          gap="0"
          margin="0"
          padding="0 12px 0 4px"
          width="60%"
          direction="column"
          height="100%"
        >
        
        </FlexDir>
        {!isOwnUser ? (
        <ButtonPrimary
          width="15%"
          variant={isFollowing ? "unfollow" : "follow"}
          fontSize="16px"
          onClick={() => addToFollowing()}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </ButtonPrimary>
        ): (
            <ButtonPrimary
          width="15%"
          variant="unfollow"
          fontSize="16px"
          onClick={() => navigate("/settings")}
        >
         Edit profile
        </ButtonPrimary>
        )}
        
      </UserElement>
      <FlexDir
            gap="0"
            margin="0"
            width="100%"
            padding="0 0 0 20px"
            justifyContent="start"
            height="40px"
          >
            <H2Form fontSize="24px">@{username} { res?.data?.privacy == "private" && <i className="bi bi-lock-fill"></i>}</H2Form>
          </FlexDir>
          <FlexDir
            gap="0"
            padding= "0 20px 0 20px"
            margin="0"
            width="100%"
            justifyContent="start"
            height="auto"
            minHeight="40px"
          >
            <p>{res?.data?.description}</p>
          </FlexDir>
      <FlexDir
            gap="12px"
            margin="0"
            padding="0 0 0 20px"
            width="100%"
            justifyContent="start"
            height="30px"
          >
            <p>{res?.data?.following?.length} <Span>Following</Span> </p>
           <p>{res?.data?.followers?.length} <Span>{res?.data?.followers?.length == 1 ? "Follower" : "Followers"}</Span></p>
           
          </FlexDir>
          {(res?.data?.privacy == "public" || isOwnUser) &&
          <NavBar>
        <div onClick={() => setFeed("posts")}>
          <H3Feed variant={feed == "posts" && "focus"}>Posts</H3Feed>
        </div>
        <div onClick={() => setFeed("likes")}>
          <H3Feed variant={feed == "likes" && "focus"}>Likes</H3Feed>
        </div>
      </NavBar>
}
      <DivLine variant="H" />
      <FlexDir
        direction="column"
        height="50vh"
        width="100%"
        justifyContent="start"
      >
{res?.data?.privacy == "private" && !isOwnUser &&(
<>
<FlexDir direction="column" width="60%" padding="20px 0 0 0">
<H1Form fontSize="35px">These posts are protected</H1Form>
          <H2Form color="#74787d" fontSize="16px">This user is private and only approved followers can see their posts</H2Form>
          </FlexDir>
</>)}

{feed == "posts" && (res?.data?.privacy == "public" || isOwnUser) && res?.data?.myPosts?.toReversed().slice(0,2).map((item) => (
          <>
            <IndividualPost
              key={item._id}
              likes={item.likes.length}
              comments={item.comments.length}
              username={username}
              img={res?.data?.image}
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
        {feed == "likes" && (res?.data?.privacy == "public" || isOwnUser)&&  res?.data?.likedPosts?.toReversed().slice(0,2).map((item) => (
          <>
            <IndividualPost
              key={item._id}
              likes={item.likes.length}
              comments={item.comments.length}
              username={username}
              img={res?.data?.image}
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
  )
}
