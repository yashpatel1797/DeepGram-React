import MockMan from 'mockman-js';
import { Feed, Login, Profile, Signup, Explore, BookMark, SinglePost } from "pages"
import { PrivateRoute, Followers, Following, Posts } from 'components';
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
                path: "/profile/:userId/",
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element: <Posts />
                    },
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                    {
                        path: "following",
                        element: <Following />,
                    },
                ]
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
                path: "/explore",
                element: <Explore />,
            },
        ]
    }
]
export { routes }