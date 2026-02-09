import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LockScreen from './components/LockScreen'
import Dashboard from './pages/Dashboard'
import RoseDay from './pages/RoseDay'
import ProposeDay from './pages/ProposeDay'
import ChocolateDay from './pages/ChocolateDay'
import TeddyDay from './pages/TeddyDay'
import PromiseDay from './pages/PromiseDay'
import HugDay from './pages/HugDay'
import KissDay from './pages/KissDay'
import ValentineDay from './pages/ValentineDay'

const SECRET_CODE = "khubsoorat" // Change this to your desired secret code;

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = (code) => {
    if (code === SECRET_CODE) {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  // 🔒 Always show lock screen on refresh
  if (!isUnlocked) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rose-day" element={<RoseDay />} />
        <Route path="/propose-day" element={<ProposeDay />} />
        <Route path="/chocolate-day" element={<ChocolateDay />} />
        <Route path="/teddy-day" element={<TeddyDay />} />
        <Route path="/promise-day" element={<PromiseDay />} />
        <Route path="/hug-day" element={<HugDay />} />
        <Route path="/kiss-day" element={<KissDay />} />
        <Route path="/valentine-day" element={<ValentineDay />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
