import Home from "../pages/Admin/Home";
import User from "../pages/Admin/User";
import Login from "../pages/Admin/Login";
import UserHome from "../pages/Client/UserHome";

const adminRoute = [
  { path: "/admin-home", component: Home },
  { path: "/admin-user", component: User },
  { path: "/admin-login", component: Login, layout: null },
];

const clientRoute = [{ path: "/", component: UserHome }];

export { adminRoute, clientRoute };
