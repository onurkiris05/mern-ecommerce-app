import Announcement from "../components/Announcement";
import FilterProducts from "../components/FilterProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function ProductList() {
  return (
    <>
      <Navbar />
      <Announcement />
      <FilterProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductList;
