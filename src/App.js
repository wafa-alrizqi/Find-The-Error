import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";

function App() {
  return (
  <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/Cards' element={<Cards />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </Router>
  </>

  );
}

export default App;
