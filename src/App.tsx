import './globals.css';
import { HeaderNavbar, Main, About, Experience, Skills, Projects, Contact } from './components';

function App() {
  return (
    <div className='bg-[rgb(36,36,36)] hs text-white snapy snapman overflow-y-scroll overflow-x-hidden z-0 scrollBar'>
      <HeaderNavbar />
      <section id='main' className='snaps'><Main /></section>
      <section id='about' className='snapc'><About /></section>
      <section id='experience' className='snapc'><Experience /></section>
      <section id='skills' className='snaps'><Skills /></section>
      <section id='projects' className='snaps'><Projects /></section>
      <section id='contact' className='snaps'><Contact /></section>
    </div>
  );
}

export default App;
