import { IconType } from "react-icons";
import { FaHome, FaCreditCard, FaRobot, FaChartPie } from "react-icons/fa";

type MenuItem = {
  label: string;
  icon: IconType;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: FaHome },
  { label: "Cards", icon: FaCreditCard },
  { label: "Analytics", icon: FaChartPie },
  { label: "AI Assistant", icon: FaRobot },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">CreditAI</h2>

      <nav>
        <ul>
          <li>🏠 Dashboard</li>
          <li>💳 Cards</li>
          <li>📊 Analytics</li>
          <li>🤖 AI Assistant</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

