import { Link } from "react-router-dom";

type IHeader = {
  type?: "back";
};

export function Header({ type }: IHeader) {
  return (
    <header className="flex items-center justify-between pb-8">
      {type === "back" ? (
        <Link to={"/"} className="flex items-center">
          <img src="/icon-black.svg" alt="Back" />
          <span className="pl-4 text-primary-desc">Deals</span>
        </Link>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Businesses</h1>
          <Link
            to={"/business"}
            className="bg-primary-btn px-3 py-2 rounded-3xl text-primary-white"
          >
            Add business
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
