import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import Contact from "./routes/Contact";
import Root from "./routes/Root";
import Todo from "./routes/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetch("https://jsonplaceholder.typicode.com/todos").then(
            (response) => response.json()
          );
        },
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/todos/:id",
        element: <Todo />,
        loader({ params }) {
          const id = params.id;
          return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
            (response) => response.json()
          );
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
