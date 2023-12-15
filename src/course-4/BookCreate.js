import { useEffect, useState } from "react";
import useBooksContext from "./hooks/use-books-context";

function BookCreate() {
  const { handleBookSubmit } = useBooksContext();
  const [newBook, setNewBook] = useState("");
  return (
    <>
      <div className="columns">
        <input
          className="input"
          type="text"
          value={newBook}
          onChange={(e) => {
            setNewBook(e.target.value);
          }}
          placeholder="Add new book"
        />
        <button className="button" onClick={() => handleBookSubmit(newBook)}>
          Add
        </button>
      </div>
    </>
  );
}

export default BookCreate;