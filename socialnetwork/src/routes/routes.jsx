import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { LogedOut } from "../pages/LogedOut";
import { Login } from "../pages/Login";
import { Feed } from "../pages/Feed";
import { Settings } from "../pages/Settings";
import { Search } from "../pages/Search";
import { Post } from "../pages/Post";
import { User } from "../pages/User";
import { Bookmarks } from "../pages/Bookmarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/feed",
            element: <Feed />,
          },
          {
            path: "/feed/:id",
            element: <Post />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/search",
            element: <Search />,
          },

          {
            path: "/user/:username",
            element: <User />,
          },
          {
            path: "/bookmarks",
            element: <Bookmarks />,
          },
          {
            path: "*",
            // element: <NotFound />,
          },
        ],
      },
      {
        path: "/log",
        element: <LogedOut />,
        children: [
          {
            path: "/log/signup",
            element: <Register />,
          },
          {
            path: "/log/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
