import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

import { addContact } from "../../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const dispatch = useDispatch();

  const contactYup = Yup.object().shape({
    contactname: Yup.string()
      .min(3, "Minimum 3 symbols!")
      .max(50, "Maximum 50 symbols!")
      .required("Name is required"),
    contactnumber: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format 777-88-88")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.contactname,
      number: values.contactnumber,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        contactname: "",
        contactnumber: "",
      }}
      validationSchema={contactYup}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.form}>
          <div className={css.inputAndName}>
            <label htmlFor="contactname">Name</label>
            <Field type="text" name="contactname" />
            <ErrorMessage
              className={css.bad}
              name="contactname"
              component="span"
            />
          </div>
          <div className={css.inputAndName}>
            <label htmlFor="contactnumber">Number</label>
            <Field type="tel" name="contactnumber" placeholder="777-77-77" />
            <ErrorMessage
              className={css.bad}
              name="contactnumber"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
