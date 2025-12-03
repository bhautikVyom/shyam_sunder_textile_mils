import { Navigate, useRoutes } from "react-router";
import AdminPanelLayout from "../components/admin-panel/admin-panel-layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/authentication/Login";
import User from "../pages/master/User/User";
import Design from "../pages/Design/Design";
import AddEditUser from "../pages/master/User/AddEditUser";

export const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("admin_store");
  return user ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("admin_store");
  return user ? <Navigate to="/" /> : children;
};

const routes = (isLoggedIn) => [
  {
    path: "/login",
    element: isLoggedIn ? <AdminPanelLayout /> : <Login />,
  },
  {
    path: "/",
    element: isLoggedIn ? <AdminPanelLayout /> : <Login />,
    children: [
      {
        element: <Dashboard />,
        path: "/",
        index: true,
      },

      {
         element: <Design />,
        path: "/design",
        index: true,
      },
      // Master Routes
      {
        element: <User />,
        path: "/master/user",
        index: true,
      },
      {
        element: <AddEditUser />,
        path: "/master/user/add",
        index: true,
      },
      //______________________________
    ],
  },
];

export default function Routes(props) {
  const { isLoggedIn } = props;
  return useRoutes(routes(isLoggedIn));
}
