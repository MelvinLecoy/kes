import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import SpreadEffect from "./SpreadEffect";
import contact from "../assets/data/contactlist.json";
import ContactInfo from "./ContactInfo";
import SparklingText from "./SparklingText";

type Inputs = {
  name: string,
  subject: string,
  message: string,
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = fData => {window.location.href = 
    `mailto:kestino@umich.edu?subject=${fData.subject}&body=Hi, this is ${fData.name}. Here is my message: ${fData.message}`;
  };
  return (
    <div className='pageDiv jc z-20'>
      <SpreadEffect title="Contact" />
      <div className='fjcic fc space-y-10 mr-2'>
        <h4 className='text-4xl font-semibold w-full'>I've got just what you want. <SparklingText text="HMU @"/></h4>
        <div className="fc fjcis max-[889px]:space-y-9 m890">
          <div className="space-y-9 min-[890px]:space-y-12">
            <ContactInfo icon={<PhoneIcon />} info={contact.phone} />
            <ContactInfo icon={<EnvelopeIcon />} info={contact.email} />
            <ContactInfo icon={<MapPinIcon />} info={contact.address} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="f fc space-y-2 w-fit mx-auto">
            <div className="f fr space-x-2">
              <input className="contactInput" type="text" placeholder="Name" {...register('name')} />
              <input className="contactInput" type="text" placeholder="Subject" {...register('subject')} />
            </div>
            <textarea className="contactInput pb-16" placeholder="Message" {...register('message')} />
            <button type="submit" className="bg-[#F7AB0A] py-3 rmd text-black hover:text-white font-bold text-xl">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;