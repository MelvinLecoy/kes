import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
  const projs = [1, 2, 3, 4, 5];
  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}} transition={{duration: 1.5,}}
      className='pageDiv ofh md:fr max-w-full z-20'>
      <h3 className='titleStyle'>Projects</h3>
      <div className='rela f w-full overflow-x-scroll overflow-y-hidden snapx snapman scrollBar'>
        {projs.map((proj, i) => (
          <div className='hs ws fs0 fjcic fc p-20 md:p-44 space-y-5 snapc'>
            {/* motion.img 2:06:17 */}
            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='hfourStyle'>
                <span className='orangeUnderline'>Case Study {i + 1} of {projs.length}: </span>ChatGPT Clone
              </h4>
              <p className='tc text-lg md:tl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, assumenda! Amet corporis voluptas nobis molestiae, inventore esse voluptate magni, numquam, similique nemo soluta eum dolorem tempora reiciendis incidunt possimus odit!
                Blanditiis modi libero dolorum laudantium sequi tempora saepe voluptatem incidunt totam distinctio perferendis, beatae temporibus dolores aspernatur at praesentium, ad ex facilis cupiditate nostrum! Cumque aliquid quidem perspiciatis officiis fuga!
                Aspernatur, ipsum. Culpa fugiat aut non incidunt quam quos rerum eos! Vero ullam nam qui. Dicta incidunt temporibus sequi cupiditate saepe, consequatur nihil fugiat veniam nobis reiciendis minima, obcaecati labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, assumenda! Amet corporis voluptas nobis molestiae, inventore esse voluptate magni, numquam, similique nemo soluta eum dolorem tempora reiciendis incidunt possimus odit!
                Blanditiis modi libero dolorum laudantium sequi tempora saepe voluptatem incidunt totam distinctio perferendis, beatae temporibus dolores aspernatur at praesentium, ad ex facilis cupiditate nostrum! Cumque aliquid quidem perspiciatis officiis fuga!
                Aspernatur, ipsum. Culpa fugiat aut non incidunt quam quos rerum eos! Vero ullam nam qui. Dicta incidunt temporibus sequi cupiditate saepe, consequatur nihil fugiat veniam nobis reiciendis minima, obcaecati labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, assumenda! Amet corporis voluptas nobis molestiae, inventore esse voluptate magni, numquam, similique nemo soluta eum dolorem tempora reiciendis incidunt possimus odit!
                Blanditiis modi libero dolorum laudantium sequi tempora saepe voluptatem incidunt totam distinctio perferendis, beatae temporibus dolores aspernatur at praesentium, ad ex facilis cupiditate nostrum! Cumque aliquid quidem perspiciatis officiis fuga!
                Aspernatur, ipsum. Culpa fugiat aut non incidunt quam quos rerum eos! Vero ullam nam qui. Dicta incidunt temporibus sequi cupiditate saepe, consequatur nihil fugiat veniam nobis reiciendis minima, obcaecati labore.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='abso w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects;