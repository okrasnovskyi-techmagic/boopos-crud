import classNames from "classnames";

type IAlert = {
  status: "info" | "warning";
  title: string;
  description: string;
  onClick?: () => void;
};

export function Alert({ status, title, description, onClick }: IAlert) {
  return (
    <div
      className={classNames("flex p-4 rounded-xl items-center", {
        "bg-primary-info": status === "info",
        "bg-primary-warning": status === "warning",
      })}
    >
      <div
        className={classNames(" flex-grow ", {
          "text-primary-info-text": status === "info",
          "text-primary-warning-text": status === "warning",
        })}
      >
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </div>
      <button className="bg-primary-btn rounded-full p-2" onClick={onClick}>
        <img src="/icon.svg" alt="icon" />
      </button>
    </div>
  );
}

export default Alert;
