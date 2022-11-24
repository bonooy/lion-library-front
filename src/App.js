import Main from './Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import TrendLib from "./TrendLib";
import MyLib from "./MyLib"
import Upload from "./Upload";
import AllLib from "./AllLib";
import Show from "./Show";
import Show2 from "./Show2";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/creation" element={<CreateAccount />}/>
              <Route path="/trend" element={<TrendLib />}/>
              <Route path="/my" element={<MyLib />}/>
              <Route path="/upload" element={<Upload />}/>
              <Route path="/all" element={<AllLib />}/>
              <Route path="/show" element={<Show />}/>
              <Route path="/show2" element={<Show2 />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;