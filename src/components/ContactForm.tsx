import { useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";

// Definindo o tipo para os dados do formulário
interface FormData {
  name: string;
  email: string;
  sujet: string;
  message: string;
}

function ContactForm() {
  // Estado para controlar os valores do formulário
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [status, setStatus] = useState<string>(""); // Para mostrar o status (enviado ou erro)

  // Função para atualizar os valores do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Chama a função do EmailJS para enviar o formulário
    emailjs
      .sendForm(
        "service_id", // Substitua pelo seu Service ID do EmailJS
        "template_id", // Substitua pelo seu Template ID do EmailJS
        e.target as HTMLFormElement, // Envia o formulário inteiro
        "user_id" // Substitua pelo seu User ID do EmailJS
      )
      .then(
        () => {
          setStatus("E-mail envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            sujet: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Échec de l'envoi de l'e-mail. Veuillez réessayer.");
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-1/2 m-auto lg:w-[600px] dark:text-white dark:font-light">
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
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full dark:bg-dark-color"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full dark:bg-dark-color"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sujet">Sujet</label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              required
              value={formData.sujet}
              onChange={handleChange}
              className="border-2 border-secondary rounded-md p-2 mb-4 focus:border-primary focus:outline-none lg:w-full dark:bg-dark-color"
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
            value={formData.message}
            onChange={handleChange}
            className="resize-none border-2 border-secondary rounded-md p-2 mb-6 focus:border-primary focus:outline-none lg:w-full lg:h-full lg:mb-4 dark:bg-dark-color"
          />
        </div>
      </div>

      {status && (
        <div className="mb-4 text-center text-lg">
          <p>{status}</p>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <Button type="reset" variant="secondary">
          Réinitialiser
        </Button>
        <Button type="submit">
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
