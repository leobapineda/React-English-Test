function BookAdded({ isAdded }) {
  return (
    <h3 className={isAdded ? "add-book_msg added" : "add-book_msg"}>
      {`Book added to card`}
    </h3>
  );
}
export default BookAdded;
