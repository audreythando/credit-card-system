const transactions = [
  { name: "Amazon.com", category: "Shopping", amount: "- $125.50" },
  { name: "Woolworths", category: "Groceries", amount: "- $85.40" },
  { name: "Netflix", category: "Entertainment", amount: "- $15.99" },
  { name: "Shell", category: "Fuel", amount: "- $60.00" },
];

const RecentTransactions = () => {
  return (
    <div className="transactions-card">
      <div className="section-header">
        <h2>Recent Transactions</h2>
        <span>View All</span>
      </div>

      {transactions.map((item) => (
        <div className="transaction-row" key={item.name}>
          <div>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </div>
          <strong>{item.amount}</strong>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;