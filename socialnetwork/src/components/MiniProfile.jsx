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
  variant
}) => {
  const isFollowing = userFollowing.includes(id);
  console.log(userFollowing, id);

  return (
    <>
      <IndividualPostElement>
        <FlexDir
          alignItems="start"
          gap="0"
          margin="0"
          width="12%"
          height="100%"
          padding= {variant !== "mini" ? "16px 0 0 0"  : "0" }
        >
          <img alt={username} src={img} />
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
            <h4>@{username}</h4>
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
            <p>{description}</p>
          </FlexDir>}
        </FlexDir>
        <ButtonPrimary
          width={variant == "mini" ? "35%" : "15%"}
          variant={isFollowing ? "unfollow" : "follow"}
          fontSize="16px"
          onClick={() => addToFollowing(id)}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </ButtonPrimary>
      </IndividualPostElement>
    </>
  );
};
