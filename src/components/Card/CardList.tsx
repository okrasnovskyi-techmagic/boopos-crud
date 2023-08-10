import { Card } from "./Card";
import { useBusiness } from "../../contexts/BusinessContext";

export function CardList() {
  const businesses = useBusiness();

  return (
    <div className="space-y-4">
      {businesses?.map((item) => <Card {...item} key={item.id} />)}
    </div>
  );
}
