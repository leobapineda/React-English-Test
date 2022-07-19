import React, { useState } from "react";
import "./stylesheets/App.css";

function App() {
  const [isAdded, setIsAddedisAdded] = useState(false);
  const [bookTitle, setBookTitle] = useState("");

  const bookList = [
    {
      title: "The Vanishing Half: A Novel",
      img: "https://m.media-amazon.com/images/I/71cS8NuKl6L._AC_UL320_.jpg",
      author: "Brit Bennett",
      price: 199,
    },
    {
      title: "Laurie (Flash Relatos)",
      img: "https://m.media-amazon.com/images/I/71xIOPc+v8L._AC_UL320_.jpg",
      author: "Hernández Sendin",
      price: 0,
    },
    {
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL320_.jpg",
      author: "James Clear",
      price: 199,
    },
  ];

  function addToCart(title) {
    setIsAddedisAdded((prevState) => !prevState);
    setBookTitle(title);
    setTimeout(() => {
      setIsAddedisAdded((prevState) => !prevState);
    }, 1000);
  }

  const booksMap = bookList.map((singleBook) => {
    return <Book addToCart={addToCart} key={singleBook.img} {...singleBook} />;
  });
  return (
    <React.Fragment>
      <div className="book-list ">{booksMap}</div>
      <BookAdded isAdded={isAdded} title={bookTitle} />
    </React.Fragment>
  );
}

function Book({ title, img, author, price, addToCart }) {
  return (
    <article className="book-container">
      <div className="image-container">
        <img src={img} alt="book cover" />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{price}</p>
      <button onClick={() => addToCart(title)} className="btn">
        Add book to cart
      </button>
    </article>
  );
}

function BookAdded({ isAdded, title }) {
  return (
    <h3 className={isAdded ? "add-book_msg added" : "add-book_msg"}>
      {/* {`${title} added to card`} */}
      {`${title} Book added to card`}
    </h3>
  );
}

export default App;
