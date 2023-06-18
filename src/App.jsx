import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} lazy={() => import('./pages/Home')} />
          <Route path="/character" element={<h1>character</h1>} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
