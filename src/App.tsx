import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
