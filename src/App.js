import DisplayProductList from "./DisplayProductList";
import { Provider } from "react-redux";
import store from "./store/index";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplayProductList />
      </div>
    </Provider>
  );
}
