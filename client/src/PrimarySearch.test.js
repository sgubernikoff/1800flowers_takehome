import { render as rtlRender, screen, fireEvent } from "@testing-library/react";
import PrimarySearch from "./PrimarySearch";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

test("renders PrimarySearch component", () => {
  render(<PrimarySearch />);
  const search = screen.getByTestId("edit");
  expect(search).toBeTruthy();
});
