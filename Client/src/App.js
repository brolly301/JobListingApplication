import { getTest } from "./functions/test";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./index.css";

function App() {
  const [data, setData] = useState("Hello World");
  const [location, setLocation] = useState("");

  //Calls the test data a single time when the application is loaded and sets its state
  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      {/* <HomePage location={location} setLocation={setLocation} /> */}
      <ResultsPage />
    </div>
  );
}

export default App;
