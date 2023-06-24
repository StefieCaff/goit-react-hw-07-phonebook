import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk('contact/get',
    async () => {
        try {
            const response = await axios.get('https://6495c988b08e17c91792ad8a.mockapi.io/contacts')
            return response.data;
        } catch (error) {
            return error;
        }
    }
);