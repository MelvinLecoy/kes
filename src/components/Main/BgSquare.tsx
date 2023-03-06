import { motion } from "framer-motion";

export default function BgSquare() {
  const scale = [1, 2, 2, 3, 1];
  const opacity = [0.1, 0.2, 0.4, 0.8, 0.1, 1.0];
  const rad = ["20%", "20%", "50%", "80%", "20%"];
  const animation = {scale: scale, opacity: opacity, borderRadius: rad};
  return (
    <motion.div initial={{opacity: 0,}} animate={animation} transition={{duration: 2.5,}} className="relative fjcic z-20 pen">
        <div className="bgSquare h-[200px] w-[200px] animate-ping pen" />
        <div className="bgSquare h-[300px] w-[300px] opac30 pen" />
        <div className="bgSquare h-[500px] w-[500px] opac70 pen" />
        <div className="bgSquare h-[650px] w-[650px] opac20 animate-pulse border-[#F7AB0A] pen" />
        <div className="bgSquare h-[800px] w-[800px] opac60 pen" />
    </motion.div>
  )
}