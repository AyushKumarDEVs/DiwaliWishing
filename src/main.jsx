import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InputDetails from './components/InputDetails.jsx';
import Wish from './components/Wish.jsx';
import CopyUrlComponent from './components/CopyUrlComponent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InputDetails/>,
  },

  {
    path: "Copy/:id",
    element: <CopyUrlComponent/>,
  },

  {
    path: "wish/:id",
    element: <Wish/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
