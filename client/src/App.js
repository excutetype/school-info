import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import Menu from "pages/menu/Menu";
import Cafeteria from "pages/info/Cafeteria";
import Schedul from "pages/info/Schedule";
import { isExistLocalStorage } from "custom_module/function";
import styles from "App.module.css";

function App() {
  let isExistSchoolData = false;
  if (isExistLocalStorage(["province", "code"])) {
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
