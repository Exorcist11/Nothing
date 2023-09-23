import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";

const adminRoute = [
  { path: "/admin-home", component: Home },
  { path: "/admin-user", component: User },
  { path: "/admin-login", component: Login, layout: null },
];

export { adminRoute };
