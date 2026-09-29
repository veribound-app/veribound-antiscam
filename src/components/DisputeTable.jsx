export default function DisputeTable() {
  const [reports] = useState([
    { id: 1, email: "scam@example.com", amount: 500, status: "High Risk" },
    { id: 2, email: "test@example.com", amount: 50, status: "Low Risk" },
  ]);

  return (
    <div>
      <h2>Dispute Reports ({reports.length})</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr><th>ID</th><th>Email</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}><td>{r.id}</td><td>{r.email}</td><td>${r.amount}</td><td>{r.status}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}