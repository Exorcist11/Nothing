import PropTypes from "prop-types";
import Header from "./Items/Header";
import Navbar from "./Items/Navbar";
import Slider from "./Items/Slider";
import Footer from "./Items/Footer";

export default function ClientLayout({ children }) {
  return (
    <div className="px-10 bg-[#e5e7f6] ">
      <Header />
      <Navbar />
      <Slider />
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
}

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
