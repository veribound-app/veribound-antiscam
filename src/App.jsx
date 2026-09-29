import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DisputeTable from "./components/DisputeTable";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisputeTable />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}