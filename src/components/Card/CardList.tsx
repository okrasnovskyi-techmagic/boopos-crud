import { Card } from "./Card";
import { CARD_STATUS, ICard } from "../../types";

const data: ICard[] = [
  {
    id: 1,
    name: "Vitra",
    business_price: 1000000,
    loan_amount: 800000,
    status: CARD_STATUS.READY,
  },
  {
    id: 2,
    name: "Your Monstera",
    business_price: 2000000,
    loan_amount: 1200000,
    status: CARD_STATUS.INFO,
  },
];

export function CardList() {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
}
