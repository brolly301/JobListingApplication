import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobResults from "./AdzunaAPI";
import { getTest } from "./functions/test";
import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";

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
    <div className="app">
      <Navbar />
      <JobSearch onSubmit={handleSubmit} />
      <JobList results={results} />
      {data}
    </div>
  );
}

export default App;
