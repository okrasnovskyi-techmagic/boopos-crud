export enum BUSINESS_STATUS {
  READY = "ready",
  INFO = "info",
}

export type IBusiness = {
  id: number;
  name: string;
  business_price: number;
  loan_amount: number;
  status?: BUSINESS_STATUS;
};
