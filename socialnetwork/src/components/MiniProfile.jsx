import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "./styledComponents/ButtonPrimary";
import { FlexDir } from "./styledComponents/FlexDir";
import { IndividualPostElement } from "./styledComponents/IndividualPost.element";

export const MiniProfile = ({
  username,
  img,
  id,
  description,
  addToFollowing,
  userFollowing,
  variant,
  privacy
}) => {
  const navigate = useNavigate()
  const isFollowing = userFollowing?.includes(id);


  return (
    <>
      <IndividualPostElement>
        <FlexDir
          gap="0"
          margin="0"
          width="12%"
          height="100%"
          padding= {variant !== "mini" ? "16px 0 0 0"  : "0" }
        >
          <img alt={username} src={img} onClick={()=>{navigate(`/user/${username}`)}}/>
        </FlexDir>
        <FlexDir
          gap="0"
          margin="0"
          padding={variant !== "mini" ? "0 12px 0 4px" : "0 12px 0 12px" }
          width="70%"
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
            <h4 onClick={()=>{navigate(`/user/${username}`)}}>@{username}</h4> { privacy == "private" && <i className="bi bi-lock-fill"></i>}
          </FlexDir>
          {variant != "mini" &&
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="start"
            height="auto"
            minHeight="40px"
          >
            <p onClick={()=>{navigate(`/user/${username}`)}}>{description}</p>
          </FlexDir>}
        </FlexDir>
        {isFollowing != undefined &&
        <ButtonPrimary
          width={variant == "mini" ? "35%" : "15%"}
          variant={isFollowing ? "unfollow" : "follow"}
          fontSize="16px"
          onClick={() => addToFollowing(id)}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </ButtonPrimary>}
      </IndividualPostElement>
    </>
  );
};
