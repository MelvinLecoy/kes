import { motion } from "framer-motion";
import SkillPad from "./SkillPad";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div initial={{opacity: 0, }} whileInView={{opacity: 1,}} transition={{duration: 1.5,}}
                className='pageDiv min-h-screen md:tl xl:fr max-w-[2000px] xl:px-10 xl:space-y-0 z-20'>
        <h3 className='titleStyle'>Skills</h3>
        <h3 className="abso top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
        <div className="grid grid-cols-4 gap-5">
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
            <SkillPad />
        </div>
    </motion.div>
  )
}

export default Skills;