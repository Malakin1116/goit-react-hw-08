import ContactList from "../../components/ContactsList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function ContactsPage() {
  return (
    <div>
      <h1>Contacts</h1>

      <ContactForm />
      <ContactList />
    </div>
  );
}
