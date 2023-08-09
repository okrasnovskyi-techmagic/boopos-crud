export enum CARD_STATUS {
  READY = "ready",
  INFO = "info",
}

export type ICard = {
  id: number;
  name: string;
  business_price: number;
  loan_amount: number;
  status: CARD_STATUS;
};
