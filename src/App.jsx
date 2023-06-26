import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Locations } from "./pages/Locations";
import { CharacterDetails } from "./pages/CharacterDetails";
import { Page404 } from "./pages/Page404";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            Component={Home}
            lazy={() => import("./pages/Home")}
          />

          <Route
            path="/characters"
            Component={Characters}
            lazy={() => import("./pages/Characters")}
          />

          <Route
            path="/characters/:id"
            Component={CharacterDetails}
            lazy={() => import("./pages/CharacterDetails")}
          />

          <Route
            path="/locations"
            Component={Locations}
            lazy={() => import("./pages/Locations")}
          />

          <Route
            path="/*"
            Component={Page404}
            lazy={() => import("./pages/Page404")}
          />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
