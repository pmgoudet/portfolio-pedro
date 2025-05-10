import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="p-6 md:p-12 lg:pb-16 xl:pb-24" id='contact'>
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 pt-4 md:text-4xl md:mb-8 md:text-center'>Contactez-moi !</h2>


      <ContactForm />
    </section>
  )
}

export default ContactSection;