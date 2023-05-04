import classNames from "classnames";

export default function JobInput({ className, ...rest }) {
  const finalClassName = classNames("border", className);

  return (
    <div class>
      <input className={finalClassName} {...rest} type="text" />
    </div>
  );
}
