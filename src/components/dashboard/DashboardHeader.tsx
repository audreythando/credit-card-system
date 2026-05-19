const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div>
        <h1>Welcome back, Audrey 👋</h1>
        <p>Here’s what’s happening with your cards today.</p>
      </div>

      <div className="header-actions">
        <button>🔍</button>
        <button>🔔</button>
        <div className="profile-avatar">A</div>
      </div>
    </div>
  );
};

export default DashboardHeader;