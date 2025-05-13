import ContactForm from "./ContactForm";
import ArrowUp from "./ArrowUp";

function ContactSection() {
  return (
    <section className="p-6 mb-8 md:p-12 lg:pb-16 xl:pb-12 scroll-mt-[94px]" >
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 pt-4 md:text-4xl md:mb-8 md:text-center' id='contact'>Contactez-moi !</h2>
      <ContactForm />
      <ArrowUp />

    </section>
  )
}

export default ContactSection;