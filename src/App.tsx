import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import LoginPage from "@/pages/LoginPage.tsx";
import { useAuth } from "@/auth/AuthProvider.tsx";
import MenuPage from "@/pages/MenuPage.tsx";

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" />;
};

function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route
        element={
          <ProtectedRoute>
            <MenuPage />
          </ProtectedRoute>
        }
        path="/menu"
      />
      <Route element={<Navigate to={token ? "/menu" : "/login"} />} path="/" />
    </Routes>
  );
}

export default App;
