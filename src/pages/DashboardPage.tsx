// @ts-ignore: Importing CSS for side effects without type declarations
import "./DashboardPage.css";

import Sidebar from "../components/dashboard/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import CreditCardPreview from "../components/dashboard/CreditCardPreview";
import AIInsightPanel from "../components/dashboard/AIInsightPanel";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import SpendingChart from "../components/dashboard/SpendingChart";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-main">
<DashboardHeader />

        <div className="stats-grid">
          <StatCard title="Total Balance" value="$8,245" />
          <StatCard title="Monthly Spend" value="$2,345" />
          <StatCard title="Credit Score" value="742" />
        </div>

        <div className="dashboard-content">
          <CreditCardPreview />
          <AIInsightPanel />
          <SpendingChart />
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
}