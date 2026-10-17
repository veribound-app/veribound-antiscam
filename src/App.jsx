import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import DisputeTable from "./components/DisputeTable.jsx";

function App() {
  return (
    <BrowserRouter>
      <div style={{background:'#050a0f', minHeight:'100vh'}}>
        <div style={{padding:'14px 24px', borderBottom:'1px solid #112233', display:'flex', gap:24, alignItems:'center'}}>
          <span style={{color:'#00ff88', fontWeight:900}}>SCAMINTELLI SOC</span>
          <a href="/" style={{color:'#8899aa', textDecoration:'none', fontSize:14}}>Scan</a>
          <a href="/privacy" style={{color:'#8899aa', textDecoration:'none', fontSize:14}}>Privacy</a>
          <a href="/terms" style={{color:'#8899aa', textDecoration:'none', fontSize:14}}>Terms</a>
          <span style={{marginLeft:'auto', color:'#00ff88', fontSize:12}}>● Live - MTN / Airtel Intel</span>
        </div>
        <Routes>
          <Route path="/" element={<DisputeTable />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;