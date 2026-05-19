import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Shopping", value: 850 },
  { name: "Food", value: 520 },
  { name: "Bills", value: 310 },
  { name: "Transport", value: 280 },
];

const COLORS = ["#8b5cf6", "#ec4899", "#f97316", "#06b6d4"];

const SpendingChart = () => {
  return (
    <div className="chart-card">
      <div className="section-header">
        <h2>Spending Overview</h2>
        <span>This Month</span>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center">
          <h2>$2,345</h2>
          <p>Total Spend</p>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;