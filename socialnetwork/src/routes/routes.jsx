import App from "../App";


export const router = createBrowserRouter ([

    {
        path:"/",
        element: <App/>,
        children: [
              {
                path: "/",
                // element: <Feed />,
              },
              {
                path: "/feed",
                //  element: <Feed />,
              },
              {
                path: "/feed/:id",
                // element: 
                // // (<Protected>
                //   <PostById/>
                // // </Protected>),
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
                element: <NotFound />,
              },
        ],
    },
    {
        path: "/signup",
        // element: <Register />,
      },
      {
        path: "/login",
        // element: <Login />,
      },
]);
