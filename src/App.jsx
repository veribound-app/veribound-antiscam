import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Privacy from "./pages/privacy.jsx";
import Terms from "./pages/Terms.jsx";
=======
import Privacy from "<div className="" />
<pages />
<p></p>rivacy.jsx";
import Terms from './pages/Terms';
>>>>>>> 5434aa4f10e975f5c6d5598064004246336cd1c9
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