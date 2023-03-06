import { motion } from "framer-motion";

type Props = {}

function CardDeck({}: Props) {
    const init = {x: -200, opacity: 0,}, end = {x: 0, opacity: 1,};
  return (
    <motion.div initial={init} whileInView={end} transition={{duration: 2.5,}} viewport={{once: true,}}
        className='deck w-[39vw] aspect-[5/7] rela min-[870px]:w-[330px] 2xl:bottom-[17%] 2xl:left-[7%]'>
        <div className="lil card"></div>
        <div className="big card"></div>
        <div className="lil card"></div>
        <div className="big card"></div>
        <div className="lil card"></div>
        <div className="big card"></div>
        <div className="lil card"></div>
        <div className="big card"></div>
    </motion.div>
  )
}

export default CardDeck;