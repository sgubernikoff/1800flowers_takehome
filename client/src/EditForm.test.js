import { render as rtlRender, screen, fireEvent } from "@testing-library/react";
import EditForm from "./EditForm";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

test("renders EditForm component", () => {
  render(<EditForm />);
  const edit = screen.getByTestId("edit");
  expect(edit).toBeTruthy();
});
