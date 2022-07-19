import React, { useState } from "react";
import "./stylesheets/App.css";
import bookList from "./BooksData";
import Book from "./components/Book";
import BookAdded from "./components/BookAdded";
function App() {
  const [isAdded, setIsAdded] = useState(false);
  const [isHover, setIsHover] = useState("");

  const addToCart = () => {
    setIsAdded((prevState) => !prevState);
    setTimeout(() => {
      setIsAdded((prevState) => !prevState);
    }, 1000);
  };

  function showSinopsis(img) {
    setIsHover(img);
  }

  const booksMap = bookList.map((singleBook) => {
    return (
      <Book
        addToCart={addToCart}
        showSinopsis={showSinopsis}
        hideSinopsis={showSinopsis}
        sinopsisContent={isHover}
        key={singleBook.img}
        {...singleBook}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="book-list ">{booksMap}</div>
      <BookAdded isAdded={isAdded} />
    </React.Fragment>
  );
}

export default App;
