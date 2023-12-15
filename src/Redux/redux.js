import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  name: '',
  gender: '',
  phoneNumber: '',
  birth: '',
  studentId: '',
  university: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'setEmail':
        return { ...state, email: action.payload };
      case 'setPassword':
        return { ...state, password: action.payload };
      case 'setName':
        return { ...state, name: action.payload };
      case 'setGender':
        return { ...state, gender: action.payload };
      case 'setPhoneNumber':
        return { ...state, phoneNumber: action.payload };
      case 'setBirth':
        return { ...state, birth: action.payload };
      case 'setStudentId':
        return { ...state, studentId: action.payload };
      case 'setUniversity':
        return { ...state, university: action.payload };
    default:
        return state;
    }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;