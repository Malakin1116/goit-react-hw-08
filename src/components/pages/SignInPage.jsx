// import { ErrorMessage, Field, Form, Formik } from "formik";
// import css from "../pages/SignInPage.module.css";

// const SignInPage = () => {
//   return (
//     <div>
//       <Formik
//         initialValues={{ name: "", email: "" }}
//         validationSchema={null}
//         onSubmit={(values) => {
//           console.log("Form submitted", values);
//         }}
//       >
//         <Form>
//           <label>
//             <span>Name:</span>
//             <Field type="text" name="name" placeholder="Ivan Ivanov" />
//             <ErrorMessage name="name" component="span" />
//           </label>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignInPage;

import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../pages/SignInPage.module.css";
import * as Yup from "yup";

const SignInPage = () => {
  const RegisterUserSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less then 20 characters")
      .required("Name is required"),
    email: Yup.string()
      .required("email is required")
      .email("Invalid email adress"),
    password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("password is required"),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterUserSchema}
        onSubmit={(values, actions) => {
          console.log("Form submitted", values);
          // dispatch();

          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.labelText}>Name:</span>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </label>

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
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInPage;
