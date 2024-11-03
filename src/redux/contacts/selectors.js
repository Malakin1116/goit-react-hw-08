export const SelectuserData = (state) => state.contacts.items;
export const SelectErrorData = (state) => state.contacts.error;
export const SelectLoadingData = (state) => state.contacts.loading;

import { selectFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [SelectuserData, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter((value) =>
      value.name
        ?.toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase() || "")
    );
  }
);
