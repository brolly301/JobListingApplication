import "../../CSS/ResultsPage/ResultFilters.css";

export default function FilterButton({ children, ...rest }) {
  return (
    <div>
      <button className="filter-button" {...rest}>
        {children}
      </button>
    </div>
  );
}
