// import { CiPhone } from "react-icons/ci";
// import { GrAccessibility } from "react-icons/gr";
// import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../../redux/contacts/operations";

// export default function Contact({ name, number, id }) {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <div className={css.container}>
//       <div className={css.divLeft}>
//         <p className={css.text}>
//           <GrAccessibility className={css.icon} />
//           {name}
//         </p>
//         <p className={css.text}>
//           <CiPhone className={css.icon} />
//           {number}
//         </p>
//       </div>
//       <button className={css.button} onClick={handleDelete}>
//         Delete
//       </button>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Are you sure delete ${name}?`)) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactName}>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button type="button" className={css.deleteButton} onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
