import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } >
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
