import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
);

