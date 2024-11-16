import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
export default function ContactsPage() {
  return (
    <div>
      <h1>Contacts</h1>

      <ContactForm />
      <ContactList />
    </div>
  );
}
