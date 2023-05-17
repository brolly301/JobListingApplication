import FilterButton from "./FilterButton";
import "../../CSS/ResultsPage/ResultFilters.css";

export default function ResultFilters() {
  return (
    <div className="filter-container">
      <FilterButton>Date Posted</FilterButton>
      <FilterButton>Remote</FilterButton>
      <FilterButton>Salary Estimate</FilterButton>
      <FilterButton>Job Type</FilterButton>
      <FilterButton>Education</FilterButton>
      <FilterButton>Location</FilterButton>
    </div>
  );
}
