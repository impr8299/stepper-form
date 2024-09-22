
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  error: null,
  stepFormData: {},
};

const stepFormSlice = createSlice({
  name: 'stepForm',
  initialState,
  reducers: {
    stepFormRequest(state) {
    },
    stepFormSuccess(state, action) {
      console.log(action, "action")
      state.stepFormData = action.payload.data.data;
      state.error = null;
    },
    stepFormFail(state, action) {
      state.error = action.payload;
    },
  },
});


export const { stepFormRequest, stepFormSuccess, stepFormFail } = stepFormSlice.actions;


export default stepFormSlice.reducer;
