import { Navigate, useRoutes } from "react-router";
import AdminPanelLayout from "../components/admin-panel/admin-panel-layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/authentication/Login";
import User from "../pages/master/User/User";
import Design from "../pages/Design/Design";
import AddEditUser from "../pages/master/User/AddEditUser";
import AddDesign from "../pages/Design/AddDesign";
import Order from "../pages/order/order";
import Report from "../pages/report/report";
import AddOrder from "../pages/order/AddOrder";

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
      {
        element: <AddDesign />,
        path: "/design/:type/*",
        index: true,
      },
      {
        element: <Order />,
        path: "/order",
        index: true,
      },
      {
        element: <AddOrder />,
        path: "/order/:type/*",
        index: true,
      },
      {
        element: <Report />,
        path: "/report",
        index: true,
      },
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
    ],
  },
];

export default function Routes(props) {
  const { isLoggedIn } = props;
  return useRoutes(routes(isLoggedIn));
}
