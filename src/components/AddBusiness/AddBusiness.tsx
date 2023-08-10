import { Formik } from "formik";
import Button from "../Button";
import {
  BusinessActionType,
  useBusinessDispatch,
} from "../../contexts/BusinessContext";
import { useNavigate } from "react-router-dom";

export function AddBusiness() {
  const dispatch = useBusinessDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Add business</h1>
      <Formik
        initialValues={{ name: "", business_price: 0, loan_amount: 0 }}
        onSubmit={(values) => {
          // @ts-ignore
          dispatch({
            type: BusinessActionType.ADD,
            payload: {
              name: values.name,
              business_price: values.business_price,
              loan_amount: values.loan_amount,
            },
          });

          navigate("/");
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-10 p-2 mb-6"
            />

            <label>Business Price</label>
            <input
              type="number"
              name="business_price"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-10 p-2 mb-6"
            />

            <label>Loan Amount</label>
            <input
              type="number"
              name="loan_amount"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-10 p-2 mb-6"
            />
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Add business
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddBusiness;
