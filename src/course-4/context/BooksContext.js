import { createContext, useState } from "react";
const BooksContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const handleBookSubmit = (title) => {
    if (title) {
      setBooks((prevBooks) => {
        return [...prevBooks, { title: title, id: Date.now() }];
      });
    }
  };
  const handleDelete = (id) => {
    setBooks((prevBooks) => {
      const rest_books = prevBooks.filter((book) => book.id !== id);
      return rest_books;
    });
  };

  const handleUpdatedBookList = (editBook) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) => {
        if (book.id === editBook.id) {
          return { ...book, title: editBook.title };
        }
        return book;
      });
      return updatedBooks;
    });
  };
  const valueToShare = {
    books,
    handleBookSubmit,
    handleDelete,
    handleUpdatedBookList,
  };
  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { BookProvider };
export default BooksContext;
