const CardSummaryPanel = () => {
  return (
    <div className="summary-panel">
      <h2>My Cards</h2>

      <div className="mini-card">
        <p>Current Balance</p>
        <h1>$8,245.00</h1>
        <span>**** 4242</span>
      </div>

      <div className="utilization-box">
        <div className="section-header">
          <h3>Credit Utilization</h3>
          <span>38%</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>Healthy usage. Keep it below 40%.</p>
      </div>
    </div>
  );
};

export default CardSummaryPanel;