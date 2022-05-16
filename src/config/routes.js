import MockMan from 'mockman-js';
import { Feed, Login, Profile, Signup, Explore, Notification, BookMark } from "pages"
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
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/bookmark",
                element: <BookMark />,
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