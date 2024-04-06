import { formReducer, changeCost, changeName } from "./slices/formSlice";
import {
  carReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
