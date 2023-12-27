import { NavBar } from "./components";
import { HomePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
