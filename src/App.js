import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
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
          <Routes>
            <Route path="/" element={<PasswordPage />} />
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
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <SaveDate />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/details" element={<Details />} /> */}
            {/* <Route path="/location" element={<Location />} /> */}
            {/* <Route path="/save-the-date" element={<SaveDate />} /> */}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
