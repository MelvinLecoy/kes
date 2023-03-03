import { DocumentTextIcon, HomeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function HeaderNavbar() {
    const rInit = {x: -500, opacity: 0, scale: 0.5,}, lInit = {x: 500, opacity: 0, scale: 0.5,};
    const end = {x: 0, opacity: 1, scale: 1,};
    const Github: string = "https://github.com/MelvinLecoy";
    const Linkedin: string = "https://www.linkedin.com/in/kestinoktlau/";
    const Spotify: string = "https://open.spotify.com/user/uncledrewchrislau";
  return (
    <header className="fis jb sticky top-0 p-5 max-w-7xl mx-auto z-50 xl:ic">
        <motion.div initial={rInit} animate={end} transition={{duration: 1.5,}} className="fic fr">
            <SocialIcon url={Github} target="_blank" fgColor="gray" bgColor="transparent" />
            <SocialIcon url={Linkedin} target="_blank" fgColor="gray" bgColor="transparent" />
            <SocialIcon url={Spotify} target="_blank" fgColor="gray" bgColor="transparent" />
            <SocialIcon network="email" url="#contact" fgColor="gray" bgColor="transparent" />
            <a href={require("../assets/PfP1.0.png")} target="_blank" className="fjcic h-[50px] w-[50px] text-[#808080]" rel="noreferrer">
                <DocumentTextIcon className="w-[25px] h-[30px]"/>
            </a>
        </motion.div>
        <motion.div initial={lInit} animate={end} transition={{duration: 1.5,}} className="fic fr">
            <a href="/kes" className="fjcic h-[50px] w-[70px] text-[#808080]"><HomeIcon className="w-[30px] h-[30px]"/></a>
        </motion.div>
    </header>
  )
}

export default HeaderNavbar;