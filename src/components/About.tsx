import { motion } from "framer-motion";
import AboutPic from "../assets/About.png";

export default function About() {
    const init = {x: -200, opacity: 0,}, end = {x: 0, opacity: 1,};
  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}} transition={{duration: 1.5}}
                className='pageDiv md:fr md:tl max-w-7xl px-10 z-20'>
        <h3 className='titleStyle'>About</h3>
        <motion.img initial={init} whileInView={end} transition={{duration: 1.2,}} viewport={{once: true,}}
            src={AboutPic} alt="About Page" className="h-60 w-60 md:w-[350px] md:h-[450px] xl:w-[400px] xl:h-[500px]
                                                        fs0 rela top-20 md:-top-3 rfull md:rlg objcov" />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="font-semibold underline text-5xl xl:text-[50px]">Kestino (He/Him)</h4>
            <ul className="list-disc ml-4 tl text-[18px] xl:text-[23px]">
                <li>Hong Kong based</li>
                <li>CS @ University of Michigan</li>
                <li>Been coding for 5+ years</li>
                <li>Full stack development</li>
                <li>Strong self-learner</li>
                <li>Incredible work ethic</li>
                <li>Pool Enthusiast</li>
                <li>Interested in Stock/Crypto</li>
                <li>Long Live Juice WRLD</li>
                <li>Live to Learn, Learn to Live</li>
            </ul>
        </div>
    </motion.div>
  )
}


// import './globals.css';
// import { HeaderNavbar, Main, About, Experience, Skills, Projects, Contact } from './components';

// function App() {
//   return (
//     <div className='bg-[rgb(36,36,36)] hs text-white snapy snapman overflow-y-scroll overflow-x-hidden z-0 scrollBar'>
//       <HeaderNavbar />
//       <section id='main' className='snaps'><Main /></section>
//       <section id='about' className='snapc'><About /></section>
//       <section id='experience' className='snapc'><Experience /></section>
//       <section id='skills' className='snaps'><Skills /></section>
//       <section id='projects' className='snaps'><Projects /></section>
//       <section id='contact' className='snaps'><Contact /></section>
//     </div>
//   );
// }

// export default App;