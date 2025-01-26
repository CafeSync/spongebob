import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import LoginPage from "@/pages/LoginPage";
import MenuPage from "@/pages/MenuPage";
import { useAuth } from "@/auth/AuthProvider";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  debugger;

  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => (
  <Routes>
    <Route element={<LoginPage />} path="/login" />
    <Route
      element={
        <ProtectedRoute>
          <AuthenticatedRoutes />
        </ProtectedRoute>
      }
      path="/*"
    />
  </Routes>
);

const AuthenticatedRoutes = () => (
  <Routes>
    <Route element={<MenuPage />} path="/menu" />
    <Route element={<Navigate to="/menu" />} path="*" />
  </Routes>
);

export default App;
