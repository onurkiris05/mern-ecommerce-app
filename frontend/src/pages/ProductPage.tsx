import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SingleProduct from "../components/Products/Product";

function Product() {
  return (
    <>
      <Navbar />
      <Announcement />
      <SingleProduct />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product;
