

function BookEdit({ onEdit, onDelete }) {

  return (
    <>
      <div className="column">
        <div className="buttons are-small">
          <button className="button " onClick={onEdit}>
            Edit
          </button>
          <button className="button " onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default BookEdit;
