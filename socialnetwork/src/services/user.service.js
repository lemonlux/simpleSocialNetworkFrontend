import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";


// ------------------------- REGISTER ----------------------------------

export const registerUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/user/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};



// ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("user/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

// ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("user/login", formData)
    .then((res) => res)
    .catch((error) => error);
};


//*---------------------------------- CON AUTH -------------------------------------


// -------------------------- UPDATE USER ------------------------------

export const updateUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("user/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};



// -------------------------- GET BY USERNAME ------------------------------

export const getUserByUsername = async (username) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/user/getByUsername/${username}`)
    .then((res) => res)
    .catch((error) => error);
};

// -------------------------- GET BY ID POPULATED ------------------------------

export const getUserByIdP = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/user/getByIdP/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
// -------------------------- GET BY ID  ------------------------------

export const getUserById = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/user/getById/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

// -------------------------- GET ALL  ------------------------------

export const getUserByUsernameP = async () => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/user/getAll`)
    .then((res) => res)
    .catch((error) => error);
};



// -------------------------- TOGGLES  ------------------------------

export const addFavComment = async (idComment) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/user/likeComment/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};

export const addFavPost= async (idPost) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/user/likePost/${idPost}`)
    .then((res) => res)
    .catch((error) => error);
};

export const addSavedPost= async (idPost) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/user/savePost/${idPost}`)
    .then((res) => res)
    .catch((error) => error);
};

export const addFollowing = async (idUser) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/user/followUser/${idUser}`)
    .then((res) => res)
    .catch((error) => error);
};

