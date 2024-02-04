import { FlexDir } from "./styledComponents/FlexDir";
import { IndividualPostElement } from "./styledComponents/IndividualPost.element";

export const IndividualPost = ({
  username,
  img,
  text,
  addToLikes,
  addToSaved,
  id,
  userLikedPosts,
  userSavedPosts,
}) => {
  const isLiked = userLikedPosts?.includes(id);
  const isSaved = userSavedPosts?.includes(id);
  console.log(isLiked, userLikedPosts);

  return (
    <>
      <IndividualPostElement>
        <FlexDir
          alignItems="start"
          gap="0"
          margin="0"
          width="12%"
          height="100%"
          padding="16px 0 0 0"
        >
          <img alt={username} src={img} />
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
            <h4>@{username}</h4>
          </FlexDir>
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="start"
            height="auto"
            minHeight="40px"
          >
            <p>{text}</p>
          </FlexDir>
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="space-around"
            height="50px"
          >
            <i className="bi bi-chat"></i>
            <i
              className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}
              onClick={() => addToLikes(id)}
            ></i>
            <i
              className={isSaved ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
              onClick={() => addToSaved(id)}
            ></i>
          </FlexDir>
        </FlexDir>
      </IndividualPostElement>
    </>
  );
};
