import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Cafeteria from "pages/Cafeteria";
import Schedul from "pages/Schedule";
import { isExistLocalStorage } from "custom_module";
import styles from "App.module.css";

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
            <Route path="/" element={isExistSchoolData ? <Menu /> : <Home />} />
            <Route path="/cafeteria" element={<Cafeteria />} />
            <Route path="/schedule" element={<Schedul />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
