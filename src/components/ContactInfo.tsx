import { motion } from "framer-motion";

type Props = {
    icon: React.ReactElement<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
    }>,
    info: string,
};

function ContactInfo({ icon, info }: Props) {
  const init = {x: -200, opacity: 0,}, end = {x: 0, opacity: 1,};
  return (
    <motion.div initial={init} whileInView={end} transition={{duration: 1.5}} viewport={{once: true}} className="fjsic space-x-5">
        <div className="text-[#F7AB0A] h-7 w-7 animate-pulse">{icon}</div>
        <p className="text-2xl">{info}</p>
    </motion.div>
  )
}

export default ContactInfo;