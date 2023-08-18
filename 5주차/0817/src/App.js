import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./Cards";
import Detail from "./Detail";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {useSelector((state) => state.contents).map((content, idx) => {
          return (
            <Route
              path={content.path}
              key={idx}
              element={<Detail content={content} />}
            />
          );
        })}
        <Route path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
