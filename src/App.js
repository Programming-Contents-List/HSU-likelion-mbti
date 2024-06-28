import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Start from './components/Start';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [num, setNum] = useState(1);
  const [score, setScore] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    PJ: 0
  });

  const resetState = () => {
    setNum(1);
    setScore({
      EI: 0,
      SN: 0,
      TF: 0,
      PJ: 0
    });
  };

  const updateScore = (type, value) => {
    setScore({
      ...score,
      [type]: score[type] + value,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start setNum={setNum} />} />
        <Route path="/question" element={<Question num={num} setNum={setNum} updateScore={updateScore} />} />
        <Route path="/result" element={<Result score={score} resetState={resetState} />} />
      </Routes>
    </Router>
  );
}

export default App;
