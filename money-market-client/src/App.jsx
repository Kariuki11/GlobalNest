import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<div>Login Page (TODO)</div>} />
        <Route path="/register" element={<div>Register Page (TODO)</div>} />
        <Route path="/dashboard" element={<div>Dashboard Page (TODO)</div>} />
        <Route path="/market" element={<div>Market Page (TODO)</div>} />
        <Route path="/invest" element={<div>Invest Page (TODO)</div>} />
        <Route path="/portfolio" element={<div>Portfolio Page (TODO)</div>} />
        <Route path="/news" element={<div>News Page (TODO)</div>} />
        <Route path="/settings" element={<div>Settings Page (TODO)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
