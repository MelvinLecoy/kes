import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgSquare from "./BgSquare";
import Profile from "../assets/PfP3.0.png";

function Main() {
  const personalTraits: string[] = ["Hi from Kestino!", "AvidSelfLearner.py",
                                    "const [hobby, setHobby] = useState('Pool');", "<LoveWebDevMoreTho />"];
  // const personalTraits: string[] = ["const [hobby, setHobby] = useState('Pool');"];
  const [text, count] = useTypewriter({words: personalTraits, loop: true, delaySpeed: 2000,});
  return (
    <div className="fjbic">
      <div className="linksize z-30 fjc fc hs border-white">
        <a href="#about" className="link llink w-full fjsic z-30 border-r-2">about</a>
        <a href="#experience" className="link llink w-full fjsic z-30 border-b-2 border-r-2">experience</a>
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
        <a href="#skills" className="link rlink w-full fjeic z-30 border-l-2">skills</a>
        <a href="#projects" className="link rlink w-full fjeic z-30 border-b-2 border-l-2">projects</a>
      </div>
    </div>
    
  )
}

export default Main