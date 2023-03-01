import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgSquare from "./BgSquare";
import Profile from "../assets/PfP3.0.png";

function Main() {
  const personalTraits: string[] = ["Hi from Kestino!", "AvidSelfLearner.py",
                                    "const [hobby, setHobby] = useState('Pool');", "<ButLovesWebDevMore />"];
  const [text, count] = useTypewriter({words: personalTraits, loop: true, delaySpeed: 2000,});
  return (
    <div className="fjcic fc hs space-y-8 tc ofh">
        <BgSquare />
        <img src={Profile} alt="pfp" className="rela h-36 w-36 mx-auto mt-20 rlg objcov" />
        <div className="z-20">
            <h2 className="uppercase text-gray-500 pb-2 tracking-[15px] text-sm lg:text-lg">Software Engineer</h2>
            <h1 className="text-[26px] md:text-[32px] lg:text-[44px] font-semibold px-10">
                <span className="mr-1">{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <div className="pt-5">
                <a href="#about"><button className="heroBtn">About</button></a>
                <a href="#experience"><button className="heroBtn">Experience</button></a>
                <a href="#skills"><button className="heroBtn">Skills</button></a>
                <a href="#projects"><button className="heroBtn">Projects</button></a>
            </div>
        </div>
    </div>
  )
}

export default Main