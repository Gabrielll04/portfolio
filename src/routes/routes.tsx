import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import BlogPage from "../pages/Blog";
import PostPage from "../pages/Post/Post";
import Whoami from "../pages/Whoami";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/blog',
        element: <BlogPage />
    },
    {
        path: '/blog/:postid',
        element: <PostPage/>
    },
    {
        path: '/whoami',
        element: <Whoami />
    }
]);