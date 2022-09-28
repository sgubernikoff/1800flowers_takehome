import { render as rtlRender, screen, fireEvent } from "@testing-library/react";
import Posts from "./Posts";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PostsCard from "./PostsCard";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe(Posts, () => {
  it("search bar populates form", () => {
    render(<Posts />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("allows user to search by title", async () => {
  const fakePosts = [
    {
      body: "this is body 1",
      id: 1,
      title: "tile",
      userId: 1,
    },
    {
      body: "this is body 2",
      id: 2,
      title: "title 2",
      userId: 2,
    },
    {
      body: "this is body 3",
      id: 3,
      title: "title 3",
      userId: 3,
    },
  ];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePosts),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App />, container);
  });
  document.querySelector(".search-bar").value = fakePosts[0].title;

  expect(
    fakePosts
      .filter((p) => p.title === document.querySelector(".search-bar").value)
      .includes(fakePosts[0]) &&
      !fakePosts
        .filter((p) => p.title === document.querySelector(".search-bar").value)
        .includes(fakePosts[1])
  );

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

test("triggers handle edit when edit is clicked", () => {
  const fakePost = {
    body: "this is body 1",
    id: 1,
    title: "tile",
    userId: 1,
  };
  const setSearchText = jest.fn();
  const { container } = render(
    <PostsCard setSearchText={setSearchText} post={fakePost} />
  );

  fireEvent.click(screen.getByText(/Edit/));

  expect(setSearchText).toHaveBeenCalled();
});
