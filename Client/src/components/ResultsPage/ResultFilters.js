import FilterButton from "./FilterButton";
import "../../CSS/ResultsPage/ResultFilters.css";
import useJobContext from "../../hooks/useJobsContext";
import JobShow from "../HomePage/JobShow";

export default function ResultFilters() {
  const { results } = useJobContext();

  //Salary from 10 - 100k
  const salaryFilter = () => {
    const filteredResults = results.filter((result) => {
      return result.salary_max > 30000;
    });
    console.log(filteredResults);
  };

  //Filter by month posted
  const dateFilter = () => {
    const filteredResults = results.filter((result) => {
      const resultDate = new Date(result.created);
      let todayDate = new Date();
      todayDate.setMonth(todayDate.getMonth() - 1);
      return resultDate > todayDate;
    });
    console.log(filteredResults);
  };

  const jobTypeFilter = () => {
    const filteredResults = results.filter((result) => {
      return result.contract_time === "full_time";
    });
    console.log(filteredResults);
  };

  return (
    <div className="filter-container">
      <FilterButton onClick={dateFilter}>Date Posted</FilterButton>
      <FilterButton>Remote</FilterButton>
      <FilterButton onClick={salaryFilter}>Salary</FilterButton>
      <FilterButton onClick={jobTypeFilter}>Job Type</FilterButton>
      <FilterButton>Education</FilterButton>
      <FilterButton>Location</FilterButton>
    </div>
  );
}
