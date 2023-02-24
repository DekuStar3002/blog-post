import "./App.css";
import { BlogPage, Error, PageNotFound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPostProvider } from "./contexts/BlogPostContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPostProvider><BlogPage /></BlogPostProvider>} />
          <Route path="/error/:errorCode" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
