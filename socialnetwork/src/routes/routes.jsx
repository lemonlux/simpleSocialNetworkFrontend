import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { LogedOut } from "../pages/LogedOut";
import { Login } from "../pages/Login";
import { Feed } from "../pages/Feed";
import { Settings } from "../pages/Settings";
import { Search } from "../pages/Search";


export const router = createBrowserRouter ([

    {
        path:"/",
        element: <App/>,
        children: [
              {
                path: "/",
                element: <Home/>,
                children: [
                  {
                    path: "/feed",
                     element: <Feed />,
                  },
                  {
                    path: "/settings",
                     element: <Settings />,
                  },
                  {
                    path: "/search",
                    element: <Search/>
                  },
                  {
                    path: "/createPost",
                    // element: 
                    // (<Protected>
                    // <CreatePost />
                    // </Protected>),
                  },
                //   {
                //     path: "/updatePost/:id",
                //     element: 
                //     (<Protected>
                //       <UpdatePost />
                //     </Protected>),
                //   },
                //   {
                //     path: "/messages",
                //     element: 
                //     (<Protected>
                //       <Chat />
                //       </Protected>)
                //   },
                  {
                    path: "/user/:username",
                    // element: (
                    //   <Protected>
                    //     <User />
                    //   </Protected>
                    // ),
                  },
                  {
                    path: "/profile",
                    // element: 
                    // (<Protected>
                    //   <Profile />
                    //   </Protected>)
                  
                  },
                  {
                    path: "*",
                    // element: <NotFound />,
                  },
                ]
              },
              {
                path:"/log",
                element: <LogedOut/>,
                children: [
              {
                  path: "/log/signup",
                  element: <Register />,
                },
                {
                  path: "/log/login",
                  element: <Login />,
                }
              ]} 
        ],
    },

]);
