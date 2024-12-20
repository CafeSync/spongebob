import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/LoginPage.tsx";
import { useAuth } from "@/auth/AuthProvider.tsx";
import MenuPage from "@/pages/MenuPage.tsx";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route
        element={
          <ProtectedRoute>
            <MenuPage />
          </ProtectedRoute>
        }
        path="/menu"
      />
    </Routes>
  );
}

export default App;
