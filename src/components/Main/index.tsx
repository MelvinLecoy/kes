import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgSquare from "./BgSquare";
import Profile from "../../assets/images/ProfilePic/3.0.png";
import { useRef } from "react";
import { motion } from "framer-motion";

function Main() {
  // const personalTraits: string[] = ["const [hobby, setHobby] = useState('Pool');"];
  const personalTraits: string[] = ["Hi from Kestino!", "AvidSelfLearner.py",
                                    "const [hobby, setHobby] = useState('Pool');", "<LoveWebDevMoreTho />"];
  const [text, count] = useTypewriter({words: personalTraits, loop: true, delaySpeed: 2000,});

  const about = useRef<HTMLAnchorElement>(null), contact = useRef<HTMLAnchorElement>(null);
  const expskills = useRef<HTMLAnchorElement>(null), projs = useRef<HTMLAnchorElement>(null);
  const adjust = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, upper: boolean) => {
    const winW = window.innerWidth, winH = window.innerHeight, denom = about.current?.offsetWidth; let perc = 70;
    const top: boolean = e.clientY < winH / 2;
    perc += 30 * ((top ? e.clientX : (winW - e.clientX)) / denom!);
    (top ? (upper ? about : contact) : (upper ? expskills : projs)).current?.style.setProperty("--trans", `${perc}%`);
  };

  const lInit = {x: -200, opacity: 0,}, rInit = {x: 200, opacity: 0,};
  const end = {x: 0, opacity: 1,};
  return (
    <div className="rela fjardic fc hs space-y-24">
      <motion.div initial={lInit} whileInView={end} transition={{duration: 1.5}} className="links">
        <a href="#about" ref={about} onMouseMove={e => adjust(e, true)} className="link llink js">about</a>
        <a href="#contact" ref={contact} onMouseMove={e => adjust(e, false)} className="link llink js border-b">contact</a>
      </motion.div>
      <div className="rela fjcic fc hs ws tc pen">
          <BgSquare />
          <div className="rela pen">
            <div className="fjcic ws h-[144px]">
              <img src={Profile} alt="pfp" className="abso h-36 w-36 mx-auto rlg objcov z-20" />
            </div>
            <div className="abso ws z-20 top-44">
              <h2 className="uppercase text-gray-500 pb-2 tracking-[15px] text-sm md:text-base lg:text-lg">Software Engineer</h2>
              <h1 className="text-[19px] md:text-2xl xl:text-[27px] font-semibold">
                  <span className="mr-1">{text}</span>
                  <Cursor cursorColor="#F7AB0A"/>
              </h1>
            </div>
          </div>
      </div>
      <motion.div initial={rInit} whileInView={end} transition={{duration: 1.5}} className="links">
        <a href="#expskills" ref={expskills} onMouseMove={e => adjust(e, true)} className="link rlink je">experience & skills</a>
        <a href="#projects" ref={projs} onMouseMove={e => adjust(e, false)} className="link rlink je border-b">projects</a>
      </motion.div>
    </div>
  )
}

export default Main;