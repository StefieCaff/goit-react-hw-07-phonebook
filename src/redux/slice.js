import { createSlice } from "@reduxjs/toolkit";

import { getContacts } from "./operators";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const rootReducer = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {},
    extraReducers: builder => {
        //* getContacts from API/db
        builder.addCase(getContacts.pending, state => {
            state.contacts.isLoading = true;
        })
        .addCase(getContacts.fulfilled, (state, action ) => {
            state.contacts.isLoading = false;
            state.contacts.items = action.payload;
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.contacts.error = action.payload;
        })
    },
    
});

export default rootReducer.reducer;

