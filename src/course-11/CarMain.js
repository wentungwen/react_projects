import CarForm from "./components/CarForm";
import  CarList  from "./components/CarList";
import  CarValue  from "./components/CarValue";
import  CarSearch  from "./components/CarSearch";
import { store } from "./store";
import { Provider } from "react-redux";

export default function CarMain() {
  return (
    <Provider store={store}>
      <div>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </Provider>
  );
}
