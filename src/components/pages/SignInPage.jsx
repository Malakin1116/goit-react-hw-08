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
import { useDispatch } from "react-redux";

import { apiLoginUser } from "../../redux/auth/operations";

export default function SignInPage() {
  const LoginUserSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("Invalid email adress"),
    password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("password is required"),
  });

  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginUserSchema}
        onSubmit={(values, actions) => {
          console.log("Form submitted", values);
          dispatch(apiLoginUser(values));

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
    </div>
  );
}
