import BookList from "./BookList";
import BookCreate from "./BookCreate";

function BookMain() {
  return (
    <>
      <div className="section">
        <BookCreate />
        <BookList />
      </div>
    </>
  );
}

export default BookMain;
