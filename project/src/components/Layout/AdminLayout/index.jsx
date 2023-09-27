import Header from "./Items/Header";
import Sidebar from "./Items/Sidebar";
import PropTypes from "prop-types";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
