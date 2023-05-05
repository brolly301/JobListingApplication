import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobResults from "./AdzunaAPI";
import { useState } from "react";
import "./index.css";

function App() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (term, jobLocation) => {
    const result = await JobResults(term, jobLocation);
    setResults(result);
    console.log(results);
  };

  return (
    <div className="App">
      <JobSearch onSubmit={handleSubmit} />
      <JobList results={results} />
    </div>
  );
}

export default App;
