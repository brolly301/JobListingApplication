import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import JobPage from "./pages/JobPage";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SavedPage from "./pages/SavedPage";
import useUserContext from "./hooks/useUserContext";
import Navbar from "./components/Navbar";
import ApplicationPage from "./pages/ApplicationPage";
import Footer from "./components/Footer";

export default function App() {
  const { userData } = useUserContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/search" element={<ResultsPage />} />
        <Route path="/search/result/:id" element={<JobPage />} />
        <Route path="/jobs" element={<SavedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search/result/:id/apply" element={<ApplicationPage />} />
        <Route
          path="/register"
          element={
            userData.user ? <Navigate replace to="/" /> : <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={userData.user ? <Navigate replace to="/" /> : <LoginPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}
