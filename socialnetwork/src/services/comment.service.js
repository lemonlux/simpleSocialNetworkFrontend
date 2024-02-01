import { extraConfig } from "./serviceApiGeneral.config";


// ------------------ CREATE ------------------
export const createComment = async (postId, formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/comment/createPostComment/${postId}`, formData)
    .then((res) => res)
    .catch((error) => error);
};


// ------------------ GET ALL COMMENTS ------------------
export const getAllComments = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/getAll${id}`)
    .then((res) => res)
    .catch((error) => error);
};


// ------------------ UPDATE COMMENT ------------------

export const updateComment = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/comment/updateComment/${id}`)
    .then((res) => res)
    .catch((error) => error);
};


// ------------------ DETELE COMMENT ------------------
export const deleteComment = async (commentId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comment/delete/${commentId}`)
    .then((res) => res)
    .catch((error) => error);
};