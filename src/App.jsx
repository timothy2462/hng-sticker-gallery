import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GiphyGallery from "./components/GiphyGallery";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProctectedRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/giphygallery"
            element={
              <ProtectedRoute>
                <GiphyGallery />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
