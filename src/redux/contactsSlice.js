import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Експорт редюсера
export const contactsReducer = contactsSlice.reducer;

// Експорт екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Експорт селектора
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice;
