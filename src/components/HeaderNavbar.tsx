import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function HeaderNavbar() {
    const rInit = {x: -500, opacity: 0, scale: 0.5,}, lInit = {x: 500, opacity: 0, scale: 0.5,};
    const end = {x: 0, opacity: 1, scale: 1,};
    const Github: string = "https://github.com/MelvinLecoy";
    const Linkedin: string = "https://www.linkedin.com/in/kestinoktlau/";
    const Spotify: string = "https://open.spotify.com/user/uncledrewchrislau";
  return (
    <header className="fis jb sticky top-0 p-5 max-w-7xl mx-auto z-20 xl:ic">
        <motion.div initial={rInit} animate={end} transition={{duration: 1.5,}} className="fic fr">
            <SocialIcon url={Github} target="_blank" fgColor="gray" bgColor="transparent" />
            <SocialIcon url={Linkedin} target="_blank" fgColor="gray" bgColor="transparent" />
            <SocialIcon url={Spotify} target="_blank" fgColor="gray" bgColor="transparent" />
        </motion.div>
        {/* <Link href="#contact"> */}
          <motion.div initial={lInit} animate={end} transition={{duration: 1.5,}} className="fic fr text-gray-300 cp">
              <SocialIcon className="cp" network="email" fgColor="gray" bgColor="transparent" />
              <p className="uppercase hidden md:ilf text-sm text-gray-400">Get In Touch</p>
          </motion.div>
        {/* </Link> */}
    </header>
  )
}

export default HeaderNavbar;