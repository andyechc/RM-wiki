import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Page404 } from "./pages/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            Component={Home}
            lazy={() => import("./pages/Home")}
          />

          <Route
            path="/character"
            Component={Character}
            lazy={() => import("./pages/Character")}
          />
          <Route
            path="/*"
            Component={Page404}
            lazy={() => import("./pages/Page404")}
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
