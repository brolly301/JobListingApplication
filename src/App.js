import JobSearch from "./components/JobSearch";
import "./index.css";
import JobResults from "./AdzunaAPI";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (term) => {
    const result = await JobResults(term);
    setResults(result);
    console.log(results);
  };

  return (
    <div className="App">
      <JobSearch onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
