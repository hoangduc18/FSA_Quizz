import React from "react";
//import { useAuth } from "../../contexts/auth.context";
import { Navigate, Outlet } from "react-router-dom";

// Check role and redirect to the correct route
// Neu user chua login thi redirect ve login page
// Neu user da login thi cho phep vao cac route con lai
// Neu ko co role du dieu kien thi redirect to 403 page
const AnonymousRoute: React.FC = () => {
  //const { isAuthenticated } = useAuth();
  //return isAuthenticated ?  <Navigate to="/" /> : <Outlet />
  return <Outlet />
}

export default AnonymousRoute;