import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter basename="/web-portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
