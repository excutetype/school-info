import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Select from "pages/Select";
import LocalStorage from "utils/LocalStroage";
import Home from "pages/Home";

function App() {
  const schoolDataNames = [
    "province",
    "level",
    "name",
    "code",
    "grade",
    "classNM",
  ];
  let chooseSchool = false;
  if (LocalStorage.isExist(schoolDataNames)) {
    chooseSchool = true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={chooseSchool ? <Home /> : <Navigate replace to="/select" />}
        />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
