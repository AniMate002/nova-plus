import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import MainPage from './Components/Pages/MainPage';
import GamesPage from './Components/Pages/GamesPage';
import NewsPage from './Components/Pages/NewsPage';
import SingleNewsPage from './Components/Pages/SingleNewsPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/news',
        element: <NewsPage />
      },{
        path: '/news/:newsId',
        element: <SingleNewsPage />
      }
    ]
  },
  {
    path: '/games',
    element: <GamesPage />
  }
]);

root.render(
  <Provider store={store}>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </Provider>
);

