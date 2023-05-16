import { GoLocation } from "react-icons/go";
import JobSearch from "../HomePage/JobSearch";

export default function ResultSearch() {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button>
        <GoLocation />
      </button>
      <button>Search</button>
      <JobSearch />
    </div>
  );
}
