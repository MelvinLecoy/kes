import './globals.css';
import { HeaderNavbar, Main, About, Experience, Skills, Projects, Contact } from './components';
import { useEffect, useRef } from 'react';

function App() {
  const blob = useRef<HTMLDivElement>(null);
  const trailing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    blob.current?.animate({left: `${e.clientX}px`, top: `${e.clientY}px`},
                          {duration: 3000, fill: "forwards"});
  };

  useEffect(() => window.scrollTo(0, document.body.scrollHeight), []);  //Stays at bottom of first page when clicking the home icon

  return (
    <div onMouseMove={trailing} className='bg-[rgb(29,29,31)] rela'>
      <div className='fixed h-[5000px] w-[10000px] backdrop-blur-[50px] z-10'></div>
      <div ref={blob} className='mouseTrailer z-0'></div>
      <HeaderNavbar />
      <div className='text-white overflow-x-hidden ofys hs ws snapy snapman z-20 scrollBar'>
        <section id='main' className='snaps'><Main /></section>
        <section id='about' className='snapc'><About /></section>
        <section id='experience' className='snapc'><Experience /></section>
        <section id='skills' className='snaps'><Skills /></section>
        <section id='projects' className='snaps'><Projects /></section>
        <section id='contact' className='snaps'><Contact /></section>
      </div>
    </div>
  );
}

export default App;


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