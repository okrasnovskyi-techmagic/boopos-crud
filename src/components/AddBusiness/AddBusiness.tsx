import { Formik } from "formik";
import Button from "../Button";

export function AddBusiness() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Add business</h1>
      <Formik
        initialValues={{ name: "", price: 0, loan: 0 }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
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
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-10 p-2 mb-6"
            />

            <label>Loan Amount</label>
            <input
              type="number"
              name="loan"
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
