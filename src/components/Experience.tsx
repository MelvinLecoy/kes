import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}} transition={{duration: 1.5}}
                className='pageDiv ofh md:fr max-w-full px-10'>
        <h3 className='titleExp top-28'>Relevant</h3>
        <h3 className='titleExp top-36'>Experience</h3>
        <div className="f overflow-x-scroll w-full tl space-x-5 p-10 snapx snapman scrollBar">
            <ExpCard />
            <ExpCard />
            <ExpCard />
        </div>
    </motion.div>
  )
}

export default Experience;