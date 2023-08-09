import { CARD_STATUS, ICard } from "../../types";
import { formatter } from "../../utils/currency";
import Alert from "../Alert";

function Description({ title, amount }: { title: string; amount: number }) {
  return (
    <div className="py-2 space-y-2">
      <div className="text-sm text-primary-desc">{title}</div>
      <div className="text-lg text-primary-number font-bold">
        {formatter.format(amount)}
      </div>
    </div>
  );
}

export function Card({ name, business_price, loan_amount, status }: ICard) {
  const renderAlert = (status: CARD_STATUS) => {
    switch (status) {
      case CARD_STATUS.READY: {
        return (
          <Alert
            status="info"
            title="Ready for evaluation"
            description="Hooray! This is ready"
            onClick={() => {
              console.log("callback");
            }}
          />
        );
      }
      case CARD_STATUS.INFO: {
        return (
          <Alert
            status="warning"
            title="More info needed"
            description="We need more information about the deal"
            onClick={() => {
              console.log("callback");
            }}
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="p-8 rounded-2xl border-2 border-primary-white bg-white space-y-6">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex space-x-10">
        <Description title="Business price" amount={business_price} />
        <Description title="Loan amount" amount={loan_amount} />
      </div>
      {renderAlert(status)}
    </div>
  );
}
