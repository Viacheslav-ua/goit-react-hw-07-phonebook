// import { ADD, REM, FILTER } from "./contacts-actTypes";
import { createAction } from "@reduxjs/toolkit";

type contactsType = {
  id: string;
  name: string;
  number: string;
};

export const addContact = createAction<contactsType>("contacts/Add");
// export const addContact = (data: contactsType) => ({
//   type: ADD,
//   payload: data,
// });

export const removeContact = createAction<string>("contacts/Remove");
// export const removeContact = (id: string) => ({
//   type: REM,
//   payload: id,
// });

export const setFilter = createAction<string | undefined>("contacts/setFilter");

// export const setFilter = (value: string) => ({
//   type: FILTER,
//   payload: value,
// });
