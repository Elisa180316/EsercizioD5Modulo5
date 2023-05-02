//stato dei commenti//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //gestisce le api slice crea la parte di store dei commenti

const initialState = {
  comments: [],
  isLoading: false,
  error: "",
};

export const getCommentsFromBook = createAsyncThunk(
  /* primo par stringa che descrive cosa sta facendo funzione */
  "commentsFromBook/getCommentsFromBook",
  async (elementId) => {
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${elementId}`;
    try {
      const data = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODI2MjI2MDMsImV4cCI6MTY4MzgzMjIwM30.-tp46JMUERvpm3iEsrOsQo3KHMegj-jXe56j2T_aUgE",
        },
      });
      const response = await data.json();
      return response;
    } catch (error) {
      if (error) throw new Error("C'è un errore generico");
    }
  }
);
const commentsFromBookSlice = createSlice({
  name: "commentsFromBook",
  initialState,
  extraReducers: (builder) => {
    builder
      //in attesa dei dati//
      .addCase(getCommentsFromBook.pending, (state) => {
        state.isLoading = true;
      })
      //con i dati.Action manipola i dati//
      .addCase(getCommentsFromBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      //Rejected//
      .addCase(getCommentsFromBook.rejected, (state) => {
        state.isLoading = false;
        state.error = "C'è un errore";
      });
  },
});

export const arrayOfComments = (state) => state.commentsSlice.comments;

export const commentsError = (state) => state.commentsSlice.error;

export const commentsLoading = (state) => state.commentsSlice.isLoading;

export default commentsFromBookSlice.reducer;
