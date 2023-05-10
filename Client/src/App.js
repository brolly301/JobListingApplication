import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobResults from "./AdzunaAPI";
import { getTest } from "./functions/test";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState("Hello World");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

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
