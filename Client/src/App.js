import HomePage from "./routes/HomePage";
import RegisterPage from "./routes/RegisterPage";
import ResultsPage from "./routes/ResultsPage";
import LoginPage from "./routes/LoginPage";
import JobPage from "./routes/JobPage";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./routes/ProfilePage";
import SavedPage from "./routes/SavedPage";
import useUserContext from "./hooks/useUserContext";
import Navbar from "./components/Navbar";

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
    </>
  );
}
