import Button from "./Button";

function ContactForm() {
  return (
    <form className="md:w-1/2 m-auto lg:w-[600px]">
      <p className="text-lg mb-8">Un projet, une question ou juste envie d'échanger ? Parlons-en !</p>

      <div className="lg:flex lg:gap-8">
        <div className="lg:w-1/2 flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sujet">Sujet</label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              required
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full"
            />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2">
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            name="message"
            id="message"
            required
            className="resize-none border-2 border-secondary rounded-md p-2 mb-6 focus:border-primary focus:outline-none lg:w-full lg:h-full lg:mb-4"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button>
          Envoyer
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
