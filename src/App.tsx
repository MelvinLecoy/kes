import './globals.css';
import { HeaderNavbar, Main, About, Experience, Skills, Projects, Contact } from './components';

function App() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
                    overflow-y-scroll overflow-x-hidden z-0 scrollBar'>
      <HeaderNavbar />
      <section id='main' className='snap-start'><Main /></section>
      <section id='about' className='snap-center'><About /></section>
      <section id='exp' className='snap-center'><Experience /></section>
      <section id='skills' className='snap-start'><Skills /></section>
      <section id='projs' className='snap-start'><Projects /></section>
      <section id='contact' className='snap-start'><Contact /></section>
    </div>
  );
}

export default App;
