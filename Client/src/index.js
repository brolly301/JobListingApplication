import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/Navbar.css";
import Dropdown from "./components/Dropdown";
import { JobProvider } from "./context/jobs";
import { BrowserRouter } from "react-router-dom";
import { SavedJobsProvider } from "./context/savedJobs";
import { UserContextProvider } from "./context/user";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <SavedJobsProvider>
      <JobProvider>
        <BrowserRouter>
          <App />
          {/* <Dropdown /> */}
        </BrowserRouter>
      </JobProvider>
    </SavedJobsProvider>
  </UserContextProvider>
);
