import React from "react";
import "./stylesheets/App.css";
function App() {
  return (
    <React.Fragment>
      <Book
        title={"la vida en la granja"}
        img={"https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UL320_.jpg"}
        author={"lola la vaca"}
      />
      <Book
        title={"caperucita roja"}
        img={"https://m.media-amazon.com/images/I/71cS8NuKl6L._AC_UL320_.jpg"}
        author={"el lobo"}
      />
      <Book
        title={"pinocho"}
        img={"https://m.media-amazon.com/images/I/71xIOPc+v8L._AC_UL320_.jpg"}
        author={"GrillO loCo"}
      />
    </React.Fragment>
  );
}

function Book({ title, img, author }) {
  return (
    <article className="book-container">
      <div className="image-container">
        <Image imgCover={img} />
      </div>
      <BookTitle title={title} />
      <BookAuthor author={author} />
    </article>
  );
}

function Image({ imgCover }) {
  return <img className="book-image" src={imgCover} alt="book cover" />;
}

function BookTitle({ title }) {
  return <h3 className="book-title">{title}</h3>;
}

function BookAuthor({ author }) {
  return <p className="book-author">{author}</p>;
}

export default App;
