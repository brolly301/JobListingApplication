import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/Navbar.css";
import { JobProvider } from "./context/jobs";
import { BrowserRouter } from "react-router-dom";
import { UserDetailsProvider } from "./context/userDetails";
import { SavedJobProvider } from "./context/savedJobs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SavedJobProvider>
    <JobProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobProvider>
  </SavedJobProvider>
);
