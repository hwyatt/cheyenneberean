import { Suspense } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
};

export default ContactPage;
