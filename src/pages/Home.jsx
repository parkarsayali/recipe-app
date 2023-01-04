import Veg from "../components/Veg";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veg style={{ margin: "1rem" }} />
      <Popular style={{ margin: "1rem" }} />
    </motion.div>
  );
}

export default Home;
