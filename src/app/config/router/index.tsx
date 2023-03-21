import { type RouteProps } from "react-router-dom";
import Challenge from "../../../pages/privatePages/Challenge";
import Settings from "../../../pages/privatePages/Settings";
import Challenges from "../../../pages/publicPages/Challenges";
import Login from "../../../pages/publicPages/Login";
import Signup from "../../../pages/publicPages/Signup";

export enum AppRoutes {
  CHALLENGES = "CHALLENGES",
  CHALLENGES_ID = "CHALLENGES_ID",
  SETTINGS = "SETTINGS",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CHALLENGES]: "/",
  [AppRoutes.CHALLENGES_ID]: "/challenges/:id",
  [AppRoutes.SETTINGS]: "/settings",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.SIGNUP]: "/signup",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CHALLENGES]: {
    path: RoutePath.CHALLENGES,
    element: <Challenges />,
  },
  [AppRoutes.CHALLENGES_ID]: {
    path: RoutePath.CHALLENGES_ID,
    element: <Challenge />,
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.SETTINGS,
    element: <Settings />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.LOGIN,
    element: <Login />,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.SIGNUP,
    element: <Signup />,
  },
};
