import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPages from "./pages/LoginPages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPages/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

