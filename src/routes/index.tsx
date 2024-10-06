import "react-toastify/dist/ReactToastify.css";
import {
  protectedRoutes,
} from "./routes";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {

  const permittedRoutes = protectedRoutes;
  const element = useRoutes(permittedRoutes);

  return element;
};

export default AppRoutes;
