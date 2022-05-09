import { TopViews } from "../Views/TopView/TopViews";
import styles from "./ViewsHolder.module.scss";
import { BottomViews } from "../Views/BottomView/BottomViews";
import { Oferta } from "../Views/Oferta/Oferta";
import { Route, Routes } from "react-router-dom";

export const ViewsHolder = () => {
  return (
    <div className={styles.Holder}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <TopViews />
              <BottomViews />
            </>
          }
        ></Route>
        <Route path="/oferta" element={<Oferta />}></Route>
      </Routes>
    </div>
  );
};
