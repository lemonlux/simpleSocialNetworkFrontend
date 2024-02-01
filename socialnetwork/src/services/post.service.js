import { extraConfig } from "./serviceApiGeneral.config";

// ------------------ CREATE ------------------

export const createPost = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post(`/post/create`, formData)
    .then((res) => res)
    .catch((error) => error);
};

// ------------------ UPDATE ------------------
export const updatePost = async (postId, formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/post/update/${postId}`, formData)
    .then((res) => res)
    .catch((error) => error);
};


// ------------------ DELETE ------------------
export const deletePost = async (postId) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete(`/post/delete/${postId}`)
    .then((res) => res)
    .catch((error) => error);
};

// ----------------- GET by ID -----------------
export const getPostById = async (postId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/post/getById/${postId}`)
    .then((res) => res)
    .catch((error) => error);
};


// ------------------ GET ALL ------------------
export const getAllPosts = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/post/getAll/`)
    .then((res) => res)
    .catch((error) => error);
};

// ------------------ GET ALL BY FOLLOWING ------------------
export const getAllPostsFollowing = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/post/getAllFollowing`)
    .then((res) => res)
    .catch((error) => error);
};

// ---------------- SEARCH ----------------

export const searchPost = async (search) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/post/search/${search}`)
    .then((res) => res)
    .catch((error) => error);
};

