import { Link, useNavigate } from "react-router-dom";
import { FlexDir } from "./styledComponents/FlexDir";
import { IndividualPostElement } from "./styledComponents/IndividualPost.element";
import { DivLine } from "./styledComponents/DivLine";

export const IndividualPost = ({
  likes,
  comments,
  username,
  img,
  text,
  addToLikes,
  addToSaved,
  id,
  userLikedPosts,
  userSavedPosts,
  variant,
  ownUser,
  deletePost,
  privacy,
}) => {
  const navigate = useNavigate();
  const isLiked = userLikedPosts?.includes(id);
  const isSaved = userSavedPosts?.includes(id);
  const isOwner = ownUser?.myPosts?.includes(id);

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
            <h4
              onClick={() => {
                navigate(`/user/${username}`);
              }}
            >
              @{username}
            </h4>
            {privacy == "private" && <i className="bi bi-lock-fill"></i>}
          </FlexDir>
          <FlexDir
            gap="0"
            margin="0"
            width="100%"
            justifyContent="start"
            height="auto"
            minHeight="40px"
            onClick={() => {
              variant != "comment" && navigate(`/feed/${id}`);
            }}
          >
            <p>{text}</p>
          </FlexDir>
          {variant != "comment" && (
            <FlexDir
              gap="0"
              margin="0"
              width="100%"
              justifyContent="space-around"
              height="40px"
            >
              <FlexDir gap="8px">
                <i
                  className="bi bi-chat"
                  onClick={() => {
                    variant != "comment" && navigate(`/feed/${id}`);
                  }}
                ></i>
                <span>{comments}</span>
              </FlexDir>
              <FlexDir gap="8px">
                <i
                  className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}
                  onClick={() => addToLikes(id)}
                ></i>
                <span>{likes}</span>
              </FlexDir>
              <i
                className={isSaved ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
                onClick={() => addToSaved(id)}
              ></i>
              {isOwner && (
                <i className="bi bi-trash3" onClick={() => deletePost(id)}></i>
              )}
            </FlexDir>
          )}
        </FlexDir>
      </IndividualPostElement>
    </>
  );
};
