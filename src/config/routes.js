import MockMan from 'mockman-js';
import { Feed, Login, Profile, Signup, Explore, Notification, BookMark, SinglePost } from "pages"
import { PrivateRoute } from 'components';
const routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                path: "/profile/:userId",
                element: <Profile />,
            },
            {
                path: "/bookmark",
                element: <BookMark />,
            },
            {
                path: "/post/:postId",
                element: <SinglePost />,
            },
            {
                path: "/",
                element: <Feed />,
            },
            {
                path: "/notifications",
                element: <Notification />,
            },
            {
                path: "/explore",
                element: <Explore />,
            },
        ]
    }
]
export { routes }