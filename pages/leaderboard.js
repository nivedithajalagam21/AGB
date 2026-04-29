import { leaderboardData } from "../data/leaderboard";

function sortAndRank(entries) {
  return [...entries]
    .sort((a, b) => b.score - a.score)
    .map((row, idx) => ({ ...row, rank: idx + 1 }));
}

export default function LeaderboardPage() {
  const sections = [...new Set(leaderboardData.map((row) => row.section))];

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 20px 80px" }}>
      <h1>Leaderboard</h1>
      <p>
        This leaderboard presents adversarial attack performance under a standardized evaluation
        framework. Results are reported as misclassification rates across multiple datasets, models,
        and settings. Higher values indicate stronger attack effectiveness.
      </p>
      <p>
        Values are grouped by fair protocol definitions with consistent comparison setup and
        multiple-split reporting.
      </p>

      {sections.map((section) => {
        const groups = leaderboardData.filter((row) => row.section === section);
        return (
          <section key={section} style={{ marginTop: 36 }}>
            <h2>{section}</h2>
            {groups.map((group) => {
              const ranked = sortAndRank(group.entries);
              const best = ranked[0]?.method;

              return (
                <div
                  key={`${group.section}-${group.dataset}-${group.victim}-${group.setting}`}
                  style={{ border: "1px solid #dbe3ec", borderRadius: 10, marginBottom: 20, overflow: "hidden" }}
                >
                  <div style={{ padding: "12px 14px", borderBottom: "1px solid #e5e7eb", background: "#f8fafc", fontWeight: 600 }}>
                    Dataset: {group.dataset} | Victim: {group.victim} | Setting: {group.setting}
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left", padding: 12 }}>Rank</th>
                        <th style={{ textAlign: "left", padding: 12 }}>Method</th>
                        <th style={{ textAlign: "left", padding: 12 }}>Score (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ranked.map((entry) => (
                        <tr key={entry.method} style={{ background: entry.method === best ? "#eff6ff" : "transparent" }}>
                          <td style={{ padding: 12, borderTop: "1px solid #eef2f7" }}>#{entry.rank}</td>
                          <td style={{ padding: 12, borderTop: "1px solid #eef2f7" }}>{entry.method}</td>
                          <td style={{ padding: 12, borderTop: "1px solid #eef2f7" }}>{entry.score.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </section>
        );
      })}
    </main>
  );
}
