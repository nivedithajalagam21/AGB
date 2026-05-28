import { leaderboardData } from "../data/leaderboard";
import {
  LEADERBOARD_COLUMNS,
  prepareLeaderboardGroups,
  sortAndRankEntries
} from "../assets/js/leaderboard-table";

const thStyle = { padding: "6px 8px", textAlign: "center", background: "#f1f3f5", borderBottom: "1px solid #dee2e6", fontSize: 12 };
const tdStyle = { padding: "6px 8px", textAlign: "center", borderTop: "1px solid #eef2f7", fontSize: 13 };
const methodStyle = { ...tdStyle, textAlign: "left" };

function formatCell(value, numeric) {
  if (value === null || value === undefined || value === "") return "—";
  if (numeric && typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(1);
  return String(value);
}

export default function LeaderboardPage() {
  const groups = prepareLeaderboardGroups(leaderboardData);
  const sections = [...new Set(groups.map((row) => row.section))];

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 20px 80px" }}>
      <h1>Leaderboard</h1>
      <p>
        Compact adversarial attack leaderboard with five perturbation budgets and attack-time reporting.
      </p>

      {sections.map((section) => (
        <section key={section} style={{ marginTop: 36 }}>
          <h2>{section}</h2>
          {groups
            .filter((g) => g.section === section)
            .map((group) => {
              const ranked = sortAndRankEntries(group.entries);
              const best = ranked[0]?.method;

              return (
                <div
                  key={`${group.section}-${group.dataset}-${group.victim}-${group.setting}`}
                  style={{ border: "1px solid #dbe3ec", borderRadius: 10, marginBottom: 20, overflowX: "auto" }}
                >
                  <div style={{ padding: "10px 12px", borderBottom: "1px solid #e5e7eb", background: "#f8fafc", fontWeight: 600, fontSize: 14 }}>
                    {group.dataset} · {group.setting} · {group.victim}
                  </div>
                  <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {LEADERBOARD_COLUMNS.map((col) => (
                          <th key={col.key} style={{ ...thStyle, textAlign: col.align === "left" ? "left" : "center" }}>
                            {col.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ranked.map((entry) => (
                        <tr key={entry.method} style={{ background: entry.method === best ? "#eaf2ff" : "transparent" }}>
                          {LEADERBOARD_COLUMNS.map((col) => {
                            const value = col.key === "rank" ? entry.rank : entry[col.key];
                            const style = col.key === "method" ? methodStyle : tdStyle;
                            return (
                              <td key={col.key} style={style}>
                                {formatCell(value, col.numeric)}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
        </section>
      ))}
    </main>
  );
}
