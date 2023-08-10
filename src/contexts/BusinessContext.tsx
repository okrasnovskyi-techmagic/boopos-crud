import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { CARD_STATUS, ICard } from "../types";

const BusinessContext = createContext<ICard[] | null>(null);

const BusinessDispatchContext = createContext(null);

export function BusinessProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(businessReducer, initialBusiness);

  return (
    <BusinessContext.Provider value={tasks}>
      {/*
       // @ts-ignore */}
      <BusinessDispatchContext.Provider value={dispatch}>
        {children}
      </BusinessDispatchContext.Provider>
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  return useContext(BusinessContext);
}

export function useBusinessDispatch() {
  return useContext(BusinessDispatchContext);
}

export enum BusinessActionType {
  ADD = "add",
}

export type BusinessAction = {
  type: BusinessActionType;
  payload: {
    name: string;
    business_price: number;
    loan_amount: number;
  };
};

function businessReducer(business: ICard[], action: BusinessAction) {
  switch (action.type) {
    case BusinessActionType.ADD: {
      return [
        ...business,
        {
          id: Math.floor(Math.random() * 100),
          name: action.payload.name,
          business_price: action.payload.business_price,
          loan_amount: action.payload.loan_amount,
          status: CARD_STATUS.READY,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialBusiness: ICard[] = [
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
