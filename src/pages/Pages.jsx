import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "../components/Searched";
import Recipe from "../components/Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/searched/:serach" element={<Searched />}></Route>
        <Route path="/recipe/:name" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
