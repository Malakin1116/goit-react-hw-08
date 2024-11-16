import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}
