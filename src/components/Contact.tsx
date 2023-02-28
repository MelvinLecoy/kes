import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = fData => {
    window.location.href = `mailto:kestino@umich.edu?subject=${fData.subject}&body=Hi, I am ${fData.name}. ${fData.message} (${fData.email})`;
  };
  return (
    <div className='pageDiv md:tl md:fr max-w-7xl px-10'>
      <h3 className='titleStyle'>Contact</h3>
      <div className='f fc space-y-10'>
        <h4 className='hfourStyle'>I've got just what you need. <span className='orangeUnderline'>Let's talk</span></h4>
        <div className="space-y-10">
          <div className="ficjc space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1 7818796187</p>
          </div>
          <div className="ficjc space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">kestino@umich.edu</p>
          </div>
          <div className="ficjc space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">413 E Huron St, Ann Arbor MI</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="f fc space-y-2 w-fit mx-auto">
          <div className="f space-x-2">
            <input className="contactInput" type="text" placeholder="Name" {...register('name')} />
            <input className="contactInput" type="email" placeholder="Email" {...register('email')} />
          </div>
          <input className="contactInput" type="text" placeholder="Subject" {...register('subject')} />
          <textarea className="contactInput" placeholder="Message" {...register('message')} />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;