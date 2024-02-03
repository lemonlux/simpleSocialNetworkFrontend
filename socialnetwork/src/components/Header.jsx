import { useState } from "react";
import { ButtonPrimary } from "./styledComponents/ButtonPrimary";
import { DivLine } from "./styledComponents/DivLine";
import { TitleIcon } from "./styledComponents/TitleIcon";
import { NavLink } from "react-router-dom";
import { NavElement } from "./styledComponents/Nav.element";
import { PostPopup } from "./PostPopup";

export const Header = () => {
  const [page, setPage] = useState("home");
  const [postPopup, setPostPopup] = useState(false)

  return (
    <NavElement>
      <NavLink className="navLink" to="/feed">
        <TitleIcon onClick={() => setPage("home")} variant={ page == "home" && "focus"}>
          {" "}
          { page == "home" ? <i className="bi bi-house-door-fill"></i> : <i className="bi bi-house-door"></i>} 
          <h2>Home</h2>
        </TitleIcon>
      </NavLink>
      <NavLink className="navLink" to="/search">
      <TitleIcon  onClick={() => setPage("explore")}  variant={ page == "explore" && "focus"}>
        {page == "explore" ? <i className="bi bi-search-heart-fill"></i> : <i className="bi bi-search"></i> }
        <h2>Explore</h2>
      </TitleIcon>
      </NavLink>
      <NavLink className="navLink" to="/feed">
      <TitleIcon onClick={() => setPage("messages")}  variant={ page == "messages" && "focus"}>
        {" "}
        {page == "messages" ? <i className="bi bi-envelope-fill"></i> : <i className="bi bi-envelope"></i> }
        <h2>Messages</h2>
      </TitleIcon>
      </NavLink>
      <NavLink className="navLink" to="/feed">
      <TitleIcon onClick={() => setPage("saved")}  variant={ page == "saved" && "focus"}>
        {" "}
        {page ==  "saved" ? <i className="bi bi-bookmark-fill"></i> :<i className="bi bi-bookmark"></i>}
         <h2>Bookmarks</h2>
      </TitleIcon>
      </NavLink>
      <NavLink className="navLink" to="/feed">
      <TitleIcon onClick={() => setPage("profile")}  variant={ page == "profile" && "focus"}>
      {page ==  "profile" ? <i className="bi bi-person-fill"></i> : <i className="bi bi-person"></i> }
        <h2>Profile</h2>
      </TitleIcon>
      </NavLink>
      <NavLink className="navLink" to="/settings">
      <TitleIcon onClick={() => setPage("settings")}  variant={ page == "settings" && "focus"}>
      {page ==  "settings" ? <i className="bi bi-gear-fill"></i> : <i className="bi bi-gear"></i> }
        <h2>Settings</h2>
      </TitleIcon>
      </NavLink>
    
      <NavLink className="navLink" to="/log/login">
      <TitleIcon >
        {" "}
        <i className="bi bi-box-arrow-right"></i> <h2>Logout</h2>
      </TitleIcon>
      </NavLink>
      <ButtonPrimary onClick={()=>setPostPopup(true)} variant="normal" width="90%" height="50px">
        Post
      </ButtonPrimary>
      {postPopup && <PostPopup setPostPopup={setPostPopup}/>}
    </NavElement>

  );
};
