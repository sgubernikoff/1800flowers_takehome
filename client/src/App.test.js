import { render as rtlRender } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

test("renders App component", () => {
  render(<App />);
});

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("getPosts is triggered", async () => {
//   const fakePosts = [
//     {
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//       id: 1,
//       title: "sunt",
//       userId: 1,
//     },
//   ];
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakePosts),
//     })
//   );

//   // Use the asynchronous version of act to apply resolved promises
//   await act(async () => {
//     render(<App />, container);
//   });

//   // expect(getPosts.toHaveBeenCalled());

//   // remove the mock to ensure tests are completely isolated
//   global.fetch.mockRestore();
// });
