import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, ErrorPage, Register, ProtectedRoute } from "./pages";
import {
  Addjobs,
  Alljobs,
  Stats,
  Profile,
  SharedLayout,
} from "./pages/dashboard/index";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<Alljobs />} />
          <Route path="add-job" element={<Addjobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
