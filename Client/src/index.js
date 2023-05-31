import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/Navbar.css";
import { JobProvider } from "./context/jobs";
import { BrowserRouter } from "react-router-dom";
import { SavedJobProvider } from "./context/savedJobs";
import { UserContextProvider } from "./context/user";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <SavedJobProvider>
      <JobProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JobProvider>
    </SavedJobProvider>
  </UserContextProvider>
);
