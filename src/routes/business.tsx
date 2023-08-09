import Layout from "../components/Layout";
import Header from "../components/Header";
import AddBusiness from "../components/AddBusiness";

export default function Business() {
  return (
    <Layout>
      <Header type="back" />
      <AddBusiness />
    </Layout>
  );
}
