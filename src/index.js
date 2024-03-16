import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookProvider } from "./course-4/context/BooksContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <>
    <BookProvider>
      <App />
    </BookProvider>
  </>
);
