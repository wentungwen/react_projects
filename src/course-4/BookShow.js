import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import BooksContext from "./context/BooksContext";

function BookShow({ book }) {
  const { handleUpdatedBookList, handleDelete } = useContext(BooksContext);
  const [editMode, setEditMode] = useState(false);
  const [bookTitle, setBookTitle] = useState(book.title);

  return (
    <>
      <div className="column is-3">
        <div className="card">
          <img src="https://picsum.photos/300/200" className="card-image" />
          <div className="card-content">
            <div className="content is-small"> ID: {book.id}</div>
            {editMode ? (
              <div className="editBook column">
                <input
                  className="input is-two-thirds"
                  type="text"
                  value={bookTitle}
                  placeholder={bookTitle}
                  onChange={(e) => {
                    setBookTitle(e.target.value);
                  }}
                />
                <button
                  className="button is-primary is-small"
                  onClick={() => {
                    handleUpdatedBookList({ title: bookTitle, id: book.id });
                    setEditMode(false);
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <div> {book.title}</div>
            )}
          </div>

          <div className="card-footer">
            <BookEdit
              onEdit={() => {
                setEditMode(true);
              }}
              onDelete={() => {
                handleDelete(book.id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookShow;
