import Sidebar from "./Items/Sidebar";
import PropTypes from "prop-types";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div>{children}</div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
