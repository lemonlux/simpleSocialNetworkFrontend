import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <ThemeContextProvider>
    <RouterProvider router={router} />
   </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
