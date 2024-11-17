import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const LoginUserSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("Password is required"),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginUserSchema}
      onSubmit={(values, actions) => {
        console.log("Form submitted", values);
        dispatch(login(values));

        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.labelText}>Email:</span>
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMessage}
          />
        </label>

        <label className={css.label}>
          <span className={css.labelText}>Password:</span>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={css.input}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <button type="submit" className={css.button}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
}
