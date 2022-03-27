import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponentOne />} />
          <Route path="/two" element={<ComponentTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
