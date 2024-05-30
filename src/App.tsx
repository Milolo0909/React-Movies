import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FullMovie from "./pages/FullMovie";
import FullPerson from "./pages/FullPerson";

import "./scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<FullMovie />} />
        <Route path="/person/:id" element={<FullPerson />} />
      </Routes>
    </>
  );
}

export default App;
