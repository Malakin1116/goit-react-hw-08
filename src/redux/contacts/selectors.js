export const selectUserData = (state) => state.contacts.items;
export const selectErrorData = (state) => state.contacts.error;
export const selectLoadingData = (state) => state.contacts.loading;

import { selectFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [selectUserData, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter((value) =>
      value.name
        ?.toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase() || "")
    );
  }
);
