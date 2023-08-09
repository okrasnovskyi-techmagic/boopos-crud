import { HTMLAttributes } from "react";

export default function Button(props: any) {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className="bg-primary-btn px-3 py-2 rounded-3xl text-primary-white"
    >
      {children}
    </button>
  );
}
