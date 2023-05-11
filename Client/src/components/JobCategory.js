import "../CSS/JobCategories.css";

export default function JobCategory({ children, ...rest }) {
  return (
    <div className="job-category">
      <h4 className="job-category-name">{children}</h4>

      <img className="job-category-image" {...rest} />
    </div>
  );
}
