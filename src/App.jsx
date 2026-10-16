import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "<div className="" />
<pages />
<p></p>rivacy.jsx";
import Terms from './pages/Terms';
import DisputeTable from "./components/DisputeTable";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Veribound App</h1>
            <DisputeTable />
          </div>
        } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}