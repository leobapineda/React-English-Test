import React from "react";

function Book({
  title,
  img,
  author,
  price,
  sinopsis,
  addToCart,
  showSinopsis,
  sinopsisContent,
}) {
  return (
    <article className="book-container">
      <div className="image-container">
        <img
          onMouseOver={() => showSinopsis(img)}
          onMouseOut={() => showSinopsis()}
          src={img}
          alt="book cover"
        />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{price}</p>
      <button onClick={addToCart} className="btn">
        Add book to cart
      </button>
      {sinopsisContent === img && (
        <div className="sinopsis show">{sinopsis}</div>
      )}
    </article>
  );
}

export default Book;
