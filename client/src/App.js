import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchoolData from "pages/SelectSchool";
import Home from "pages/Home";
import Info from "pages/Info";
import { isExistLocalStorage } from "custom_module";
import styles from "./App.module.css";

function App() {
  let isExistSchoolData = false;
  if (isExistLocalStorage(["province", "code", "level"])) {
    isExistSchoolData = true;
  }

  return (
    <div className={styles.rootContainer}>
      <div className={styles.contents}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={isExistSchoolData ? <Home /> : <SchoolData />}
            />
            <Route path="info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
