import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./pages/privacy.jsx";
import Terms from "./pages/Terms.jsx";
import DisputeTable from "./components/DisputeTable";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><DisputeTable /></>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;