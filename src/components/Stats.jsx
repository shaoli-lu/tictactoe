
export default function Stats({ stats, players, onResetStats }) {
  return (
    <div id="stats-container">
      <div className="stats-card">
        <h3>{players.X}</h3>
        <div className="stats-item">
          <span className="stat-label">Wins:</span>
          <span className="stat-value wins">{stats.X.wins}</span>
        </div>
        <div className="stats-item">
          <span className="stat-label">Losses:</span>
          <span className="stat-value losses">{stats.X.losses}</span>
        </div>
        <div className="stats-item">
          <span className="stat-label">Draws:</span>
          <span className="stat-value draws">{stats.X.draws}</span>
        </div>
      </div>
      <div className="stats-card">
        <h3>{players.O}</h3>
        <div className="stats-item">
          <span className="stat-label">Wins:</span>
          <span className="stat-value wins">{stats.O.wins}</span>
        </div>
        <div className="stats-item">
          <span className="stat-label">Losses:</span>
          <span className="stat-value losses">{stats.O.losses}</span>
        </div>
        <div className="stats-item">
          <span className="stat-label">Draws:</span>
          <span className="stat-value draws">{stats.O.draws}</span>
        </div>
      </div>
      <button className="reset-stats-btn" onClick={onResetStats}>Reset Stats</button>
    </div>
  );
}