import Challenge from "../pages/privatePages/Challenge";
import Settings from "../pages/privatePages/Settings";
import Challenges from "../pages/publicPages/Challenges";
import Login from "../pages/publicPages/Login";
import Signup from "../pages/publicPages/Signup";

export const publicRoutes = [
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />},
    {path: '/challenge', element: <Challenges />}
]

export const privateRoutes = [
    {
        path: '/challenges', 
        element: <Challenges />, 
        children: {
            path: '/challenges/:id',
            element: <Challenge />
        }
    },
    {
        path: '/settings',
        element: <Settings />
    }
]
