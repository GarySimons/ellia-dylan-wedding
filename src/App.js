import React, {
  useState,
  useEffect,
  useRef,
  useState as useReactState,
} from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Home from "./routes/Home";
import Details from "./routes/Details";
import Location from "./routes/Location";
import Accommodation from "./routes/Accommodation";
import Contact from "./routes/Contact";
import SaveDate from "./routes/SaveDate";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import PasswordPage from "./routes/PasswordPage";
import Order from "./routes/Order";
import Menu from "./routes/Menu";

// 🔁 Handles restoring the redirect path just once
function RedirectHandler() {
  const navigate = useNavigate();
  const hasRedirected = useRef(false);

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirect");
    if (!hasRedirected.current && redirectPath && redirectPath !== "/") {
      sessionStorage.removeItem("redirect");
      hasRedirected.current = true;
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true",
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        <Router>
          <RedirectHandler />
          <Routes>
            <Route path="/" element={<PasswordPage />} />

            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-of-celebrations"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              path="/location"
              element={
                <ProtectedRoute>
                  <Location />
                </ProtectedRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accommodation"
              element={
                <ProtectedRoute>
                  <Accommodation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rsvp"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route path="/save-the-date" element={<SaveDate />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
