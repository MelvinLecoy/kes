import { motion } from "framer-motion"
import logo from "../assets/TMD Logo.png";

type Props = {}

function ExperienceCard({}: Props) {
    const init = {y: -100, opacity: 0,}
    const end = {y: 0, opacity: 1,}
  return (
    <article className="fic fc fs0 rounded-lg snap-center space-y-7 p-10 bg-[#292929] w-[500px] md:w-[600px] xl:w-[900px]
                        opacity-50 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
        <motion.img initial={init} whileInView={end} transition={{duration: 1.2,}} viewport={{once: true,}}
                    src={logo} alt="Exp Logo" className="fs0 rela top-20 md:top-0 md:pb-5 h-60 w-60 rounded-full object-cover" />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Org</h4>
            <p className="text-2xl font-bold mt-1">Title</p>
            <div className="f space-x-2 my-2">
                {/* Tech used */}
            </div>
            <p className="uppercase py-5 text-gray-300">Start - End</p>
            <ul className="list-disc ml-4 space-y-4 text-lg">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard;