import { motion } from "framer-motion";
import logo from "../assets/TMD Logo.png";

type Props = {
    dirLeft?: boolean;
}

function Skill({ dirLeft }: Props) {
    const init = {x: dirLeft ? -200: 200, opacity: 0,};
    const end = {x: 0, opacity: 1,};
  return (
    <div className="group rela f">
        {/* className="fs0 rela top-20 md:top-0 md:pb-5"> */}
        <motion.img initial={init} whileInView={end} transition={{duration: 1,}}
                    src={logo} alt="Skill Logo" className="w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale
                                                          rfull objcov border border-gray-500" />
        <div className="abso opac0 group-hover:opac80 group-hover:bg-white rfull transition duration-300 ease-in-out
                        h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 z-0">
            <div className="fjcic h-full">
                <p className="text-3xl font-bold text-black opac100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;