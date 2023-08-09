import Button from "../Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-8">
      <h1 className="text-3xl font-bold">Businesses</h1>
      <Button>Add business</Button>
    </header>
  );
}
