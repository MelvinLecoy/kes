import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgSquare from "./BgSquare";
import Profile from "../assets/PfP3.0.png";
import { useRef, useState } from "react";

function Main() {
  // const personalTraits: string[] = ["const [hobby, setHobby] = useState('Pool');"];
  const personalTraits: string[] = ["Hi from Kestino!", "AvidSelfLearner.py",
                                    "const [hobby, setHobby] = useState('Pool');", "<LoveWebDevMoreTho />"];
  const [text, count] = useTypewriter({words: personalTraits, loop: true, delaySpeed: 2000,});

  const about = useRef<HTMLAnchorElement>(null), exp = useRef<HTMLAnchorElement>(null);
  const skills = useRef<HTMLAnchorElement>(null), projs = useRef<HTMLAnchorElement>(null);
  const adjust = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, upper: boolean) => {
    const winW = window.innerWidth, denom = about.current?.offsetWidth; let perc = 68;
    const left: boolean = e.clientX < winW / 2;
    (left) ? perc += 30 * (e.clientX / denom!) : perc += 30 * ((winW - e.clientX) / denom!);
    (upper ? (left ? about : skills) : (left ? exp : projs)).current?.style.setProperty("--trans", `${perc}%`);
  };
  return (
    <div className="fjbic">
      <div className="linksize z-30 fjc fc hs border-white">
        <a href="#about" ref={about} onMouseMove={e => adjust(e, true)} className="link llink w-full fjsic z-30 border-r-2">about</a>
        <a href="#experience" ref={exp} onMouseMove={e => adjust(e, false)} className="link llink w-full fjsic z-30 border-b-2 border-r-2">experience</a>
      </div>
      <div className="fjcic fc hs space-y-8 tc">
          <BgSquare />
          <img src={Profile} alt="pfp" className="rela h-36 w-36 mx-auto mt-20 rlg objcov z-20" />
          <div className="z-20">
              <h2 className="uppercase text-gray-500 pb-2 tracking-[15px] text-sm lg:text-lg">Software Engineer</h2>
              <h1 className="text-[15px] md:text-[20px] min-[910px]:text-[23px] lg:text-[27px] font-semibold">
                  <span className="mr-1">{text}</span>
                  <Cursor cursorColor="#F7AB0A"/>
              </h1>
          </div>
      </div>
      <div className="linksize z-30 fjc fc hs pr-4 border-white">
        <a href="#skills" ref={skills} onMouseMove={e => adjust(e, true)} className="link rlink w-full fjeic z-30 border-l-2">skills</a>
        <a href="#projects" ref={projs} onMouseMove={e => adjust(e, false)} className="link rlink w-full fjeic z-30 border-b-2 border-l-2">projects</a>
      </div>
    </div>
    
  )
}

export default Main