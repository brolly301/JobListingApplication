import "../../CSS/ResultsPage/ResultFilters.css";

export default function SortBy({ children, ...rest }) {
  return (
    <div>
      <button className="sort-button" {...rest}>
        {children}
      </button>
    </div>
  );
}
