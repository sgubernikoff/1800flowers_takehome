import { render as rtlRender, screen } from "@testing-library/react";
import Posts from "./Posts";
import { Provider } from "react-redux";
import store from "./store/store";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe(Posts, () => {
  it("search bar populates", () => {
    render(<Posts />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});
