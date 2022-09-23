import { render as rtlRender, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

test("renders App component", () => {
  render(<App />);
});
