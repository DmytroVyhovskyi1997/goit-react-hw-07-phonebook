import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = `https://643d87eb6c30feced814bd42.mockapi.io/`;

axios.defaults.baseURL = BASE_URL;

const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('contacts');
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );