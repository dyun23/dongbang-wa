import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Desktop2 from "./Desktop2";
import Frame6 from "./Frame6";

const CommunityMain = () => {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    // 메타데이터 로직
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame1 />} />
      <Route path="/frame-2" element={<Frame2 />} />
      <Route path="/desktop-2" element={<Desktop2 />} />
      <Route path="/frame-6" element={<Frame6 />} />
    </Routes>
  );
};

export default CommunityMain;