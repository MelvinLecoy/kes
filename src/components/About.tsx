import { motion } from "framer-motion";
import AboutPic from "../assets/images/About/About.png";
import SpreadEffect from "./SpreadEffect";
import aboutList from "../assets/data/aboutlist.json"
import CardDeck from "./CardDeck";

export default function About() {
  return (
  <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}} transition={{duration: 1.5}}
              className='pageDiv z-20'>
    <SpreadEffect title="About" />
    <div className="fjbic fc ws 2xl:fr 2xl:fjevenic h-[83%]">
      <CardDeck />
      <div className="2xl:ml-60">
        <h4 className="font-semibold underline mb-2 text-[40px] 2xl:text-[50px]">Kestino (He/Him)</h4>
        <ul className="list-disc tl ml-4 space-y-[6px] text-[20px] xl:text-[21px] 2xl:text-[24px]
                                                      pb-40 sm:pb-20 min-[830px]:pb-16 xl:pb-14 2xl:pb-48">
          {aboutList.map((list, idx) => <li key={idx}>{list}</li>)}
        </ul>
      </div>
    </div>
  </motion.div>
  )
}


// className="h-60 w-60 md:w-[325px] md:h-[425px] xl:w-[400px] xl:h-[500px] fs0 rela rlg objcov w-full"