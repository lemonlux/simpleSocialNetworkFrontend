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
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: 
        <ProtectedRoutes>
        <Home />
        </ProtectedRoutes>,
        children: [
          {
            path: "/feed",
            element:
            <ProtectedRoutes>
            <Feed />
            </ProtectedRoutes>,
          },
          {
            path: "/feed/:id",
            element:
            <ProtectedRoutes>
            <Post />
            </ProtectedRoutes>,
          },
          {
            path: "/settings",
            element:
            <ProtectedRoutes> 
            <Settings />
            </ProtectedRoutes>,
          },
          {
            path: "/search",
            element: 
            <ProtectedRoutes>
            <Search />
            </ProtectedRoutes>,
          },

          {
            path: "/user/:username",
            element: 
            <ProtectedRoutes>
            <User />
            </ProtectedRoutes>,
          },
          {
            path: "/bookmarks",
            element:
            <ProtectedRoutes>
            <Bookmarks />
            </ProtectedRoutes>,
          },
          {
            path: "*",
            // element: 
            // <ProtectedRoutes>
            // <NotFound />
            // </ProtectedRoutes>,
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
