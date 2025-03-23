import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error.page.tsx';
import HomePage from './pages/home.page.tsx';


const router = createBrowserRouter([

   // Manager Client 
   {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      { index: true,  element: <HomePage/>,},
      // {
      //   path: "contacts/:contactId",
      //   element: <HomePage />,
      // },

    ],
  }


]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
