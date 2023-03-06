import { motion } from "framer-motion";
import { SpreadEffect } from "../GeneralPieces";
import aboutList from "../../assets/data/aboutlist.json";
import CardDeck from "./CardDeck";

type event = React.MouseEvent<HTMLHeadingElement, MouseEvent> | React.MouseEvent<HTMLLIElement, MouseEvent>;

function About() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const hacker = (e: event) => {
    let itr = 0;
    const interval = setInterval(() => {
      const et = e.target as HTMLElement;
      et.innerText = et.innerText.split("").map((l, idx) => {
          return (idx < itr) ? et.dataset.value![idx] : letters[Math.floor(Math.random() * 52)];
      }).join("");
      if (itr >= et.dataset.value!.length) clearInterval(interval);
      itr += 1/3;
    }, 30);
  };

  return (
  <motion.div className='pageDiv je z-20' transition={{duration: 1.5}} initial={{opacity: 0,}} whileInView={{opacity: 1,}}>
    <SpreadEffect title="About" />
    <div className="fjbic fc ws 2xl:fr 2xl:fjevenic h-[83%]">
      <CardDeck />
      <div className="2xl:ml-60 w-[450px] 2xl:w-[500px]">
        <h4 onMouseOver={hacker} className="font-semibold underline mb-2 text-[40px] 2xl:text-[50px]" data-value="Kestino (He/Him)">Kestino (He/Him)</h4>
        <ul className="list-disc tl ml-[68px] space-y-[6px] aboutTextSize aboutpb">
          {aboutList.map((list, idx) => <li key={idx} onMouseOver={hacker} data-value={list}>{list}</li>)}
        </ul>
      </div>
    </div>
  </motion.div>
  )
}

export default About;