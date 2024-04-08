import UserList from "./components/UserList";
import { Provider } from "react-redux";
import { store } from "./store";

export default function AlbumsMain() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}
