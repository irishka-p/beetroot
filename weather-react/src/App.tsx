import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonchStatistics from "./pages/MonchStatistics/components/MonthStatistics";
import { Header } from "./pages/shared/Header/Header";
import { Popup } from "./pages/shared/Popup/Popup";

function App() {
  return (
    <div className='global-container'>
      {/* <Popup /> */}
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/MonchStatistics' element={<MonchStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
