import BookShow from "./BookShow";
import useBooksContext from "./hooks/use-books-context";

function BookList() {
    console.log(useBooksContext());
  const { books } = useBooksContext();

  const renderBooks = books.map((book, index) => (
    <BookShow key={index} book={book} />
  ));

  return (
    <>
      <h1>CARD LIST</h1>
      <div className="columns is-multiline">{renderBooks}</div>
    </>
  );
}

export default BookList;
